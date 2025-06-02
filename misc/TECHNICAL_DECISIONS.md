# Technical Decisions Log - NovyUI to MoonZoon Migration

## Overview
This document tracks all significant technical decisions made during the migration process, including rationale, alternatives considered, and implications.

---

## TD-001: Animation Strategy
**Date**: [Updated based on research]
**Status**: Revised
**Decision**: Multi-layered approach using MoonZoon's comprehensive animation system

### Context
Vue components use sophisticated CSS transitions and animations:
- Accordion: `max-height 300ms cubic-bezier(0.4, 0, 0.2, 1)`
- Button spinner: Dynamic keyframe injection
- FileInput: Drag-over state transitions

### Research Findings
MoonZoon provides a **complete animation system**:
1. **Transitions API**: CSS transition wrappers with full property support
2. **Tweened**: Smooth value interpolation with easing functions
3. **Oscillator**: Animation loop management with precise timing
4. **Transform**: Built-in transforms (translate, rotate, scale) with signal support
5. **Interpolation**: Linear interpolation with bounds and custom functions

### Decision
```rust
// 1. CSS Transitions for simple property changes
.s(Transitions::new([
    Transition::background_color().duration(300),
    Transition::transform().duration(200)
]))

// 2. Tweened for smooth value animations
let (height_tween, height_signal) = Tweened::new_and_signal(
    0.0,
    Duration::milliseconds(300),
    ease::cubic_out
);

// Usage in Accordion expand/collapse
.s(Height::exact_signal(
    height_signal.map(|h| h as u32)
))

// 3. Transform with signals for complex animations
.s(Transform::with_signal_self(
    is_expanded.signal().map(|expanded| {
        Transform::new().rotate(if expanded { 180.0 } else { 0.0 })
    })
))

// 4. Oscillator for continuous animations (spinner)
static SPINNER: Lazy<Oscillator> = Lazy::new(|| {
    let osc = Oscillator::new(Duration::seconds(1));
    osc.cycle_wrap(); // Continuous rotation
    osc
});

.s(Transform::with_signal_self(
    SPINNER.signal().map(|t| Transform::new().rotate(t * 360.0))
))
```

### Implementation Strategy
1. **Simple Transitions**: Use `Transitions::new()` for hover, focus, color changes
2. **Height/Width Animations**: Use `Tweened` with `Height::exact_signal()`
3. **Rotation/Scale**: Use `Transform::with_signal_self()` with `Tweened` or `Oscillator`
4. **Continuous Animations**: Use `Oscillator::cycle_wrap()` for spinners
5. **Complex Sequences**: Combine multiple `Tweened` instances with `Task::start()`

### Rationale
- MoonZoon's animation system is **production-ready** and comprehensive
- `Tweened` provides smooth interpolation equivalent to CSS cubic-bezier
- Signal-based animations integrate perfectly with reactive state
- Performance is optimized through `AnimationLoop` and `requestAnimationFrame`

### Alternatives Considered
- CSS-only approach (rejected - limited signal integration)
- Direct DOM manipulation (rejected - unnecessary complexity)

---

## TD-002: File Upload Architecture
**Date**: [Updated based on research]
**Status**: Validated
**Decision**: Proven pattern using web_sys File API with MoonZoon event handling

### Context
FileInput component requires:
- Drag-and-drop functionality
- File validation and error handling
- Progress indication
- Multiple file management

### Research Findings
**Confirmed working patterns** from ringrev and MoonZoon examples:

1. **Drag-and-Drop Implementation** (from `image_drop_zone.rs`):
```rust
.update_raw_el(|raw_el| {
    raw_el
        .event_handler_with_options(
            EventOptions::new().preventable(),
            |event: events::DragEnter| {
                event.stop_propagation();
                event.prevent_default();
                awaiting_drop.set_neq(true);
            },
        )
        .event_handler_with_options(
            EventOptions::new().preventable(),
            |event: events::Drop| {
                event.stop_propagation();
                event.prevent_default();
                let file_list = event.data_transfer().unwrap_throw().files().unwrap_throw();
                add_files(file_list);
            },
        )
})
```

2. **File Processing** (from `image_drop_zone.rs`):
```rust
fn add_files(file_list: web_sys::FileList) {
    let files_count = file_list.length();
    for index in 0..files_count {
        let file = file_list.get(index).unwrap_throw();
        Task::start(async move {
            // File validation
            if not(file.type_().starts_with("image/")) {
                return;
            }
            // File processing with ImageBitmap API
            let Ok(bitmap_promise) = window().create_image_bitmap_with_blob(&file) else {
                return;
            };
            let Ok(bitmap) = JsFuture::from(bitmap_promise)
                .await
                .map(web_sys::ImageBitmap::from)
            else {
                return;
            };
            // Store processed file
        });
    }
}
```

3. **File Input Integration**:
```rust
TextInput::new()
    .update_raw_el(|raw_el| {
        raw_el
            .attr("type", "file")
            .attr("accept", "image/*")
            .attr("multiple", "")
            .event_handler(move |_: events::Input| {
                if let Some(file_list) = dom_element.files() {
                    add_files(file_list);
                }
            })
    })
```

### Decision
```rust
// State management
static FILES: Lazy<Mutable<Vec<web_sys::File>>> = Lazy::new(|| Mutable::new(Vec::new()));
static DRAG_ACTIVE: Lazy<Mutable<bool>> = Lazy::new(|| Mutable::new(false));
static ERROR_MESSAGE: Lazy<Mutable<Option<String>>> = Lazy::new(|| Mutable::new(None));

// File validation
fn validate_files(files: &[web_sys::File], max_files: u32, max_size: u64) -> Result<(), String> {
    if files.len() > max_files as usize {
        return Err(format!("Maximum {} files allowed", max_files));
    }
    for file in files {
        if file.size() > max_size {
            return Err(format!("File '{}' is too large", file.name()));
        }
    }
    Ok(())
}

// Complete FileInput implementation
pub fn file_input() -> impl Element {
    El::new()
        .s(Background::new().color_signal(
            DRAG_ACTIVE.signal().map_bool(
                || color::primary_1(),
                || color::neutral_1()
            )
        ))
        .update_raw_el(|raw_el| {
            raw_el
                .event_handler_with_options(
                    EventOptions::new().preventable(),
                    |event: events::DragOver| {
                        event.prevent_default();
                        event.data_transfer().unwrap_throw().set_drop_effect("copy");
                        DRAG_ACTIVE.set_neq(true);
                    },
                )
                .event_handler_with_options(
                    EventOptions::new().preventable(),
                    |event: events::Drop| {
                        event.prevent_default();
                        DRAG_ACTIVE.set_neq(false);
                        let file_list = event.data_transfer().unwrap_throw().files().unwrap_throw();
                        handle_file_selection(file_list);
                    },
                )
        })
}

fn handle_file_selection(file_list: web_sys::FileList) {
    let files: Vec<web_sys::File> = (0..file_list.length())
        .filter_map(|i| file_list.get(i))
        .collect();

    match validate_files(&files, 10, 10 * 1024 * 1024) {
        Ok(()) => {
            FILES.set(files);
            ERROR_MESSAGE.set(None);
        }
        Err(error) => {
            ERROR_MESSAGE.set(Some(error));
        }
    }
}
```

### Rationale
- **Proven in production**: Pattern used successfully in ringrev
- **Full File API support**: web_sys provides complete File, FileList, DataTransfer APIs
- **Async file processing**: Task::start() enables non-blocking file operations
- **Reactive UI**: MoonZoon signals provide automatic UI updates

### Implementation Notes
- Use `EventOptions::new().preventable()` for proper drag-drop event handling
- File validation should be synchronous, file processing asynchronous
- `JsFuture` enables async file reading (ArrayBuffer, ImageBitmap, etc.)
- Error handling through Result types and reactive error state

---

## TD-003: Component Composition Strategy
**Date**: [To be filled]
**Status**: Proposed
**Decision**: Builder pattern with optional children() for composition

### Context
Vue slots have no direct MoonZoon equivalent:
```vue
<Button>
  <span style="font-weight: bold;">Custom content</span>
</Button>
```

### Decision
```rust
pub struct ButtonBuilder {
    content: Option<Box<dyn Element>>,
    // ... other properties
}

impl ButtonBuilder {
    pub fn children(mut self, content: impl Element + 'static) -> Self {
        self.content = Some(Box::new(content));
        self
    }

    pub fn build(self) -> impl Element {
        Button::new()
            .label_signal(
                self.content.map(|content| content)
                    .unwrap_or_else(|| Text::new(&self.label))
            )
    }
}
```

### Rationale
- Maintains flexibility of Vue slots
- Type-safe composition
- Consistent with MoonZoon patterns

### Trade-offs
- More verbose than Vue slots
- Requires careful lifetime management
- May need component API adjustments

---

## TD-004: Theme System Architecture
**Date**: [To be filled]
**Status**: Proposed
**Decision**: Global theme state with computed color signals

### Context
Vue reactive theme system:
```typescript
const color = {
  primary: {
    '7': computed(() => theme.value === 'light' ? 'oklch(55% 0.16 250)' : 'oklch(65% 0.16 250)')
  }
}
```

### Decision
```rust
// Global theme state
static THEME: Lazy<Mutable<Theme>> = Lazy::new(|| Mutable::new(Theme::Light));

// Computed color signals
pub fn primary_7() -> impl Signal<Item = &'static str> {
    THEME.signal().map(|theme| match theme {
        Theme::Light => "oklch(55% 0.16 250)",
        Theme::Dark => "oklch(65% 0.16 250)",
    })
}

// Component usage
.s(Background::new().color_signal(primary_7()))
```

### Rationale
- Maintains reactivity of Vue system
- Global state ensures consistency
- Signals provide automatic updates

### Performance Considerations
- Signal subscriptions for all themed components
- Memory usage for signal graph
- Update batching for theme changes

---

## TD-005: Error Handling Strategy
**Date**: [To be filled]
**Status**: Proposed
**Decision**: Result-based error handling with user-friendly error states

### Context
Vue components use try-catch and error events:
```vue
emit('error', validationError);
```

### Decision
```rust
// Error types
#[derive(Clone, Debug)]
pub enum ComponentError {
    Validation(String),
    FileUpload(String),
    Network(String),
}

// Component error state
static ERROR_STATE: Lazy<Mutable<Option<ComponentError>>> =
    Lazy::new(|| Mutable::new(None));

// Error handling in components
fn handle_file_validation(files: &[File]) -> Result<(), ComponentError> {
    // Validation logic
    if files.len() > max_files {
        return Err(ComponentError::Validation("Too many files".to_string()));
    }
    Ok(())
}
```

### Rationale
- Type-safe error handling
- Consistent error patterns across components
- User-friendly error messages

---

## TD-006: Performance Optimization Strategy
**Date**: [To be filled]
**Status**: Proposed
**Decision**: Lazy loading with signal-based updates

### Context
Large component library needs optimization for WASM:
- Bundle size concerns
- Memory usage in long-running apps
- Rendering performance

### Decision
1. **Component Lazy Loading**: Load complex components on demand
2. **Signal Optimization**: Use `.dedupe()` to prevent unnecessary updates
3. **Memory Management**: Proper signal cleanup on component unmount

```rust
// Lazy component loading
pub fn load_tree_view() -> impl Element {
    static LOADED: Lazy<Mutable<bool>> = Lazy::new(|| Mutable::new(false));

    El::new().child_signal(
        LOADED.signal().map_bool(
            || Some(tree_view_component()),
            || Some(loading_placeholder())
        )
    )
}

// Signal optimization
.s(Background::new().color_signal(
    theme_color().dedupe()  // Prevent redundant updates
))
```

### Rationale
- WASM bundle size optimization
- Better runtime performance
- Improved user experience

---

## TD-007: Accessibility Implementation
**Date**: [To be filled]
**Status**: Proposed
**Decision**: Built-in accessibility with ARIA attribute helpers

### Context
Vue components have extensive accessibility features:
- ARIA attributes
- Keyboard navigation
- Focus management
- Screen reader support

### Decision
```rust
// Accessibility helpers
pub mod a11y {
    pub fn aria_expanded(expanded: impl Signal<Item = bool>) -> impl Signal<Item = String> {
        expanded.map(|exp| exp.to_string())
    }

    pub fn aria_controls(id: &str) -> String {
        format!("controls-{}", id)
    }
}

// Component usage
Button::new()
    .attr("aria-expanded", a11y::aria_expanded(is_expanded.signal()))
    .attr("aria-controls", &a11y::aria_controls("accordion-content"))
    .on_key_down(|event| {
        match event.key().as_str() {
            "Enter" | " " => toggle_expanded(),
            _ => {}
        }
    })
```

### Rationale
- Consistent accessibility patterns
- Type-safe ARIA attribute handling
- Keyboard navigation support

---

## TD-008: Testing Strategy
**Date**: [To be filled]
**Status**: Proposed
**Decision**: Multi-layer testing with visual regression

### Context
Need comprehensive testing for component migration:
- Unit tests for component logic
- Integration tests for interactions
- Visual regression for UI consistency
- Accessibility testing

### Decision
1. **Unit Tests**: Rust unit tests for component builders and logic
2. **Integration Tests**: WASM-based tests for component interactions
3. **Visual Regression**: Playwright for screenshot comparison
4. **Accessibility**: Automated a11y testing with axe-core

```rust
// Unit tests
#[cfg(test)]
mod tests {
    #[test]
    fn button_builder_creates_correct_variant() {
        let button = ButtonBuilder::new()
            .variant(ButtonVariant::Primary)
            .label("Test");
        assert_eq!(button.variant, ButtonVariant::Primary);
    }
}

// Integration tests (separate crate)
#[wasm_bindgen_test]
fn test_button_click_interaction() {
    // Test actual DOM interactions
}
```

### Rationale
- Comprehensive coverage at all levels
- Automated regression detection
- Accessibility compliance verification

---

## Decision Template

## TD-009: Form Handling & Validation
**Date**: [Updated based on research]
**Status**: Validated
**Decision**: MoonZoon signal-based form state with validation patterns from ringrev

### Context
Vue components use complex form handling:
- Input focus management and cursor preservation
- Cross-component validation and error handling
- Form submission with loading states
- Real-time validation feedback

### Research Findings
**Proven patterns** from ringrev form implementations:

1. **Input Component Pattern** (from `text_input.rs`):
```rust
pub fn text_input(
    placeholder: impl Signal<Item = String> + Unpin + 'static,
    label: impl Signal<Item = String> + Unpin + 'static,
    text: impl Signal<Item = String> + Unpin + 'static,
    autofocus: bool,
    on_change: impl FnMut(String) + 'static,
    on_submit: impl FnMut() + 'static,
    error: impl Signal<Item = bool> + Unpin + 'static,
) -> impl Element {
    TextInput::new()
        .placeholder_signal(placeholder)
        .text_signal(text)
        .on_change(on_change)
        .focus(autofocus)
        .s(Outline::new().color_signal(
            error.map_bool(|| color::red_7(), || color::transparent())
        ))
}
```

2. **Form State Management** (from `organization_settings.rs`):
```rust
// Global form state
store()
    .organization_settings_page
    .signal_cloned()
    .switch(|page| page.organization_name.signal_cloned().map(|name| name.0))

// Validation with error handling
fn add_member() {
    let page = store().organization_settings_page.lock_ref();
    if page.future_member_email.lock_ref().0.is_empty() {
        page.member_error.set(Some(MemberError::Other(ErrorMessage(
            "error-email-empty".to_string()
        ))));
        return;
    }
    // Process valid form
}
```

3. **Focus Management** (from MoonZoon core):
```rust
// Built-in focus handling
.focus(true)  // Auto-focus
.focus_signal(should_focus.signal())  // Reactive focus
.on_focus(|| { /* focus handler */ })
.on_blur(|| { /* blur handler */ })
.on_focused_change(|is_focused| { /* focus state change */ })
```

### Decision
```rust
// Form state structure
#[derive(Clone)]
pub struct FormState<T> {
    pub value: Mutable<T>,
    pub error: Mutable<Option<String>>,
    pub touched: Mutable<bool>,
    pub loading: Mutable<bool>,
}

impl<T: Default> FormState<T> {
    pub fn new() -> Self {
        Self {
            value: Mutable::new(T::default()),
            error: Mutable::new(None),
            touched: Mutable::new(false),
            loading: Mutable::new(false),
        }
    }

    pub fn validate<F>(&self, validator: F) -> bool
    where
        F: FnOnce(&T) -> Result<(), String>
    {
        match validator(&self.value.get()) {
            Ok(()) => {
                self.error.set(None);
                true
            }
            Err(error) => {
                self.error.set(Some(error));
                false
            }
        }
    }
}

// Input component with validation
pub fn validated_input(
    form_state: &FormState<String>,
    placeholder: &str,
    label: &str,
) -> impl Element {
    TextInput::new()
        .placeholder(placeholder)
        .text_signal(form_state.value.signal_cloned())
        .on_change(clone!((form_state) move |text| {
            form_state.value.set(text);
            form_state.touched.set(true);
        }))
        .s(Outline::new().color_signal(
            form_state.error.signal_ref(|error| error.is_some())
                .map_bool(|| color::error_7(), || color::transparent())
        ))
}

// Form validation helper
pub fn validate_form(fields: &[&dyn Fn() -> bool]) -> bool {
    fields.iter().all(|validate| validate())
}

// Usage example
static EMAIL_FIELD: Lazy<FormState<String>> = Lazy::new(FormState::new);
static PASSWORD_FIELD: Lazy<FormState<String>> = Lazy::new(FormState::new);

pub fn login_form() -> impl Element {
    Column::new()
        .item(validated_input(&EMAIL_FIELD, "Email", "Email Address"))
        .item(validated_input(&PASSWORD_FIELD, "Password", "Password"))
        .item(
            Button::new()
                .label("Submit")
                .on_press(|| {
                    let is_valid = validate_form(&[
                        &|| EMAIL_FIELD.validate(|email| {
                            if email.contains('@') { Ok(()) }
                            else { Err("Invalid email".to_string()) }
                        }),
                        &|| PASSWORD_FIELD.validate(|pwd| {
                            if pwd.len() >= 8 { Ok(()) }
                            else { Err("Password too short".to_string()) }
                        }),
                    ]);

                    if is_valid {
                        submit_form();
                    }
                })
        )
}
```

### Rationale
- **Signal-based reactivity**: Automatic UI updates on state changes
- **Composable validation**: Reusable validation functions
- **Focus management**: Built-in MoonZoon focus handling
- **Error handling**: Reactive error display with visual feedback
- **Production proven**: Pattern used successfully in ringrev

### Implementation Notes
- Use `Mutable<T>` for form field values and error states
- Validation should be synchronous for immediate feedback
- Focus management through MoonZoon's built-in `Focusable` trait
- Form submission should set loading states and handle async operations

---

### TD-XXX: [Decision Title]
**Date**: [Date]
**Status**: [Proposed/Accepted/Rejected/Superseded]
**Decision**: [Brief summary]

#### Context
[Background and problem description]

#### Decision
[Detailed decision with code examples]

#### Rationale
[Why this decision was made]

#### Alternatives Considered
[Other options and why they were rejected]

#### Implications
[Consequences and follow-up actions needed]

#### Risks
[Potential issues and mitigation strategies]

---

**Last Updated**: [Date]
**Next Review**: [Date]

use zoon::*;
use crate::tokens::*;
use crate::theme::*;
use crate::components::icon::{IconBuilder, IconName, IconSize, IconColor};

// Checkbox sizes
#[derive(Debug, Clone, Copy)]
pub enum CheckboxSize {
    Small,   // 16px
    Medium,  // 20px
    Large,   // 24px
}

impl CheckboxSize {
    pub fn to_px(self) -> u32 {
        match self {
            CheckboxSize::Small => 20,   // Increased from 16
            CheckboxSize::Medium => 24,  // Increased from 20
            CheckboxSize::Large => 28,   // Increased from 24
        }
    }

    pub fn font_size(self) -> u32 {
        match self {
            CheckboxSize::Small => FONT_SIZE_12,
            CheckboxSize::Medium => FONT_SIZE_14,
            CheckboxSize::Large => FONT_SIZE_16,
        }
    }
}

// Checkbox states
#[derive(Debug, Clone, Copy)]
pub enum CheckboxState {
    Unchecked,
    Checked,
    Indeterminate, // For partial selection in groups
}

// Checkbox builder
pub struct CheckboxBuilder {
    size: CheckboxSize,
    state: CheckboxState,
    disabled: bool,
    label: Option<String>,
    description: Option<String>,
    error: bool,
    required: bool,
}

impl CheckboxBuilder {
    pub fn new() -> Self {
        Self {
            size: CheckboxSize::Medium,
            state: CheckboxState::Unchecked,
            disabled: false,
            label: None,
            description: None,
            error: false,
            required: false,
        }
    }

    pub fn size(mut self, size: CheckboxSize) -> Self {
        self.size = size;
        self
    }

    pub fn checked(mut self, checked: bool) -> Self {
        self.state = if checked {
            CheckboxState::Checked
        } else {
            CheckboxState::Unchecked
        };
        self
    }

    pub fn state(mut self, state: CheckboxState) -> Self {
        self.state = state;
        self
    }

    pub fn disabled(mut self, disabled: bool) -> Self {
        self.disabled = disabled;
        self
    }

    pub fn label(mut self, label: impl Into<String>) -> Self {
        self.label = Some(label.into());
        self
    }

    pub fn description(mut self, description: impl Into<String>) -> Self {
        self.description = Some(description.into());
        self
    }

    pub fn error(mut self, error: bool) -> Self {
        self.error = error;
        self
    }

    pub fn required(mut self, required: bool) -> Self {
        self.required = required;
        self
    }

    pub fn build(self) -> impl Element {
        let checked = Mutable::new(matches!(self.state, CheckboxState::Checked));
        let checked_signal = checked.signal();
        let checked_clone1 = checked.clone();
        let checked_clone2 = checked.clone();
        let checked_clone3 = checked.clone();
        let focused = Mutable::new(false);
        let focused_signal = focused.signal();

        let size_px = self.size.to_px();
        let font_size = self.size.font_size();
        let disabled = self.disabled;
        let error = self.error;
        let state = self.state;

        // Create the checkbox box with proper theming
        let checkbox_box = El::new()
            .s(Width::exact(size_px))
            .s(Height::exact(size_px))
            .s(RoundedCorners::all(4))
            .s(Borders::all_signal(
                checked_clone1.signal().map(move |checked_state| {
                    theme().map(move |t| {
                        let (color, width) = if error {
                            match t {
                                Theme::Light => ("oklch(50% 0.21 30)", 2), // error_7 light
                                Theme::Dark => ("oklch(70% 0.21 30)", 2), // error_7 dark
                            }
                        } else if disabled {
                            match t {
                                Theme::Light => ("oklch(85% 0.14 250)", 1), // neutral_4 light
                                Theme::Dark => ("oklch(25% 0.14 250)", 1), // neutral_4 dark
                            }
                        } else if checked_state {
                            match t {
                                Theme::Light => ("oklch(55% 0.22 250)", 2), // primary_7 light
                                Theme::Dark => ("oklch(65% 0.22 250)", 2), // primary_7 dark
                            }
                        } else {
                            match t {
                                Theme::Light => ("oklch(75% 0.14 250)", 1), // neutral_5 light
                                Theme::Dark => ("oklch(35% 0.14 250)", 1), // neutral_5 dark
                            }
                        };
                        Border::new().width(width).color(color)
                    })
                }).flatten()
            ))
            .s(Background::new().color_signal(
                checked_clone2.signal().map(move |checked_state| {
                    theme().map(move |t| {
                        if disabled {
                            match t {
                                Theme::Light => "oklch(98% 0.14 250)", // neutral_1 light
                                Theme::Dark => "oklch(25% 0.14 250)", // neutral_4 dark - lighter for visibility
                            }
                        } else if checked_state {
                            match t {
                                Theme::Light => "oklch(55% 0.22 250)", // primary_7 light
                                Theme::Dark => "oklch(65% 0.22 250)", // primary_7 dark
                            }
                        } else {
                            match t {
                                Theme::Light => "oklch(98% 0.14 250)", // neutral_1 light
                                Theme::Dark => "oklch(25% 0.14 250)", // neutral_4 dark - lighter for visibility
                            }
                        }
                    })
                }).flatten()
            ))
            .s(Align::center())
            .s(Cursor::new(if disabled {
                CursorIcon::NotAllowed
            } else {
                CursorIcon::Pointer
            }))
            .child_signal(
                checked_signal.map(move |is_checked| {
                    match state {
                        CheckboxState::Indeterminate => {
                            // Always show indeterminate symbol regardless of checked state
                            let icon_size = match size_px {
                                20 => IconSize::Small,
                                24 => IconSize::Medium,
                                _ => IconSize::Large,
                            };

                            El::new()
                                .s(Padding::all(2)) // Add padding around the icon
                                .child(
                                    IconBuilder::new(IconName::Minus)
                                        .size(icon_size)
                                        .color(if disabled {
                                            IconColor::Muted
                                        } else {
                                            IconColor::Custom("oklch(98% 0.14 250)") // White/light color for contrast
                                        })
                                        .build()
                                )
                                .unify()
                        }
                        _ => {
                            // For normal checkboxes, show checkmark based on checked signal
                            if is_checked {
                                let icon_size = match size_px {
                                    20 => IconSize::Small,
                                    24 => IconSize::Medium,
                                    _ => IconSize::Large,
                                };

                                El::new()
                                    .s(Padding::all(2)) // Add padding around the icon
                                    .child(
                                        IconBuilder::new(IconName::Check)
                                            .size(icon_size)
                                            .color(if disabled {
                                                IconColor::Muted
                                            } else {
                                                IconColor::Custom("oklch(98% 0.14 250)") // White/light color for contrast
                                            })
                                            .build()
                                    )
                                    .unify()
                            } else {
                                El::new().unify() // Empty element when unchecked
                            }
                        }
                    }
                })
            )
            .on_click({
                move || {
                    if !disabled {
                        checked_clone3.update(|current| !current);
                    }
                }
            });

        // Build the complete component
        if let Some(label_text) = &self.label {
            let mut items = Vec::new();

            // Main row with checkbox and label
            let main_row = Row::new()
                .s(Gap::new().x(SPACING_8))
                .s(Align::new().top())
                .item(checkbox_box)
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_2))
                        .item(
                            Row::new()
                                .s(Gap::new().x(SPACING_4))
                                .item(
                                    El::new()
                                        .child(Text::new(label_text))
                                        .s(Font::new()
                                            .size(font_size)
                                            .weight(FontWeight::Number(FONT_WEIGHT_4))
                                            .color_signal(theme().map(move |t| {
                                                if disabled {
                                                    match t {
                                                        Theme::Light => "oklch(45% 0.14 250)", // neutral_5 light
                                                        Theme::Dark => "oklch(55% 0.14 250)", // neutral_5 dark
                                                    }
                                                } else {
                                                    match t {
                                                        Theme::Light => "oklch(15% 0.14 250)", // neutral_9 light
                                                        Theme::Dark => "oklch(95% 0.14 250)", // neutral_11 dark
                                                    }
                                                }
                                            }))
                                        )
                                        .s(Cursor::new(if disabled {
                                            CursorIcon::NotAllowed
                                        } else {
                                            CursorIcon::Pointer
                                        }))
                                        .on_click({
                                            let checked_clone = checked.clone();
                                            move || {
                                                if !disabled {
                                                    checked_clone.update(|current| !current);
                                                }
                                            }
                                        })
                                )
                                .item_signal(always(self.required).map(move |required| {
                                    if required {
                                        Some(
                                            El::new()
                                                .child(Text::new("*"))
                                                .s(Font::new()
                                                    .size(font_size)
                                                    .weight(FontWeight::Number(FONT_WEIGHT_5))
                                                    .color_signal(theme().map(|t| match t {
                                                        Theme::Light => "oklch(50% 0.21 30)", // error_7 light
                                                        Theme::Dark => "oklch(70% 0.21 30)", // error_7 dark
                                                    }))
                                                )
                                        )
                                    } else {
                                        None
                                    }
                                }))
                        )
                        .item_signal(always(self.description.clone()).map(move |desc| {
                            desc.map(|description| {
                                El::new()
                                    .child(Text::new(&description))
                                    .s(Font::new()
                                        .size(font_size - 2)
                                        .weight(FontWeight::Number(FONT_WEIGHT_4))
                                        .color_signal(theme().map(move |t| {
                                            if disabled {
                                                match t {
                                                    Theme::Light => "oklch(45% 0.14 250)", // neutral_5 light
                                                    Theme::Dark => "oklch(55% 0.14 250)", // neutral_5 dark
                                                }
                                            } else {
                                                match t {
                                                    Theme::Light => "oklch(35% 0.14 250)", // neutral_7 light
                                                    Theme::Dark => "oklch(75% 0.14 250)", // neutral_9 dark
                                                }
                                            }
                                        }))
                                    )
                            })
                        }))
                );

            items.push(main_row.unify());

            Column::new()
                .s(Gap::new().y(SPACING_4))
                .items(items)
                .unify()
        } else {
            checkbox_box.unify()
        }
    }
}

// Convenience function
pub fn checkbox() -> CheckboxBuilder {
    CheckboxBuilder::new()
}

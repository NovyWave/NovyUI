use zoon::*;
use crate::tokens::*;
use crate::theme::*;

// Select sizes
#[derive(Debug, Clone, Copy)]
pub enum SelectSize {
    Small,   // Smaller padding and font
    Medium,  // Default size
    Large,   // Larger padding and font
}

// Select option
#[derive(Debug, Clone)]
pub struct SelectOption {
    pub value: String,
    pub label: String,
    pub disabled: bool,
}

impl SelectOption {
    pub fn new(value: impl Into<String>, label: impl Into<String>) -> Self {
        Self {
            value: value.into(),
            label: label.into(),
            disabled: false,
        }
    }

    pub fn disabled(mut self, disabled: bool) -> Self {
        self.disabled = disabled;
        self
    }
}

// Select builder
pub struct SelectBuilder {
    size: SelectSize,
    placeholder: Option<String>,
    selected_value: Option<String>,
    options: Vec<SelectOption>,
    disabled: bool,
    required: bool,
    searchable: bool,
    label: Option<String>,
    description: Option<String>,
    error: bool,
    multiple: bool,
}

impl SelectBuilder {
    pub fn new() -> Self {
        Self {
            size: SelectSize::Medium,
            placeholder: None,
            selected_value: None,
            options: Vec::new(),
            disabled: false,
            required: false,
            searchable: false,
            label: None,
            description: None,
            error: false,
            multiple: false,
        }
    }

    pub fn size(mut self, size: SelectSize) -> Self {
        self.size = size;
        self
    }

    pub fn placeholder(mut self, placeholder: impl Into<String>) -> Self {
        self.placeholder = Some(placeholder.into());
        self
    }

    pub fn selected_value(mut self, value: impl Into<String>) -> Self {
        self.selected_value = Some(value.into());
        self
    }

    pub fn option(mut self, option: SelectOption) -> Self {
        self.options.push(option);
        self
    }

    pub fn options(mut self, options: Vec<SelectOption>) -> Self {
        self.options = options;
        self
    }

    pub fn disabled(mut self, disabled: bool) -> Self {
        self.disabled = disabled;
        self
    }

    pub fn required(mut self, required: bool) -> Self {
        self.required = required;
        self
    }

    pub fn searchable(mut self, searchable: bool) -> Self {
        self.searchable = searchable;
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

    pub fn multiple(mut self, multiple: bool) -> Self {
        self.multiple = multiple;
        self
    }

    pub fn build(self) -> impl Element {
        let (focused, focused_signal) = Mutable::new_and_signal(false);
        let selected_value = Mutable::new(self.selected_value.clone());
        let selected_value_signal = selected_value.signal_cloned();

        let (padding_x, padding_y, font_size) = match self.size {
            SelectSize::Small => (SPACING_8, SPACING_6, FONT_SIZE_14),
            SelectSize::Medium => (SPACING_12, SPACING_8, FONT_SIZE_16),
            SelectSize::Large => (SPACING_16, SPACING_12, FONT_SIZE_18),
        };

        let disabled = self.disabled;
        let error = self.error;
        let options = self.options.clone();
        let placeholder_text = self.placeholder.clone().unwrap_or_else(|| "Select an option...".to_string());

        // Create the select input
        let select_input = Row::new()
            .s(Width::fill())
            .s(Padding::new().x(padding_x).y(padding_y))
            .s(Borders::all_signal(theme().map(move |t| {
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
                } else {
                    match t {
                        Theme::Light => ("oklch(75% 0.14 250)", 1), // neutral_5 light
                        Theme::Dark => ("oklch(35% 0.14 250)", 1), // neutral_5 dark
                    }
                };
                Border::new().width(width).color(color)
            })))
            .s(RoundedCorners::all(6))
            .s(Background::new().color_signal(theme().map(move |t| {
                if disabled {
                    match t {
                        Theme::Light => "oklch(98% 0.14 250)", // neutral_1 light
                        Theme::Dark => "oklch(8% 0.14 250)", // neutral_2 dark
                    }
                } else {
                    match t {
                        Theme::Light => "oklch(98% 0.14 250)", // neutral_1 light
                        Theme::Dark => "oklch(8% 0.14 250)", // neutral_2 dark
                    }
                }
            })))
            .s(Cursor::new(if disabled {
                CursorIcon::NotAllowed
            } else {
                CursorIcon::Pointer
            }))
            .s(Align::new().center_y())
            .item(
                El::new()
                    .s(Width::fill())
                    .child_signal(
                        selected_value_signal.map(move |selected| {
                            let display_text = if let Some(ref value) = selected {
                                // Find the label for the selected value
                                options
                                    .iter()
                                    .find(|opt| opt.value == *value)
                                    .map(|opt| opt.label.clone())
                                    .unwrap_or_else(|| value.clone())
                            } else {
                                placeholder_text.clone()
                            };

                            El::new()
                                .child(Text::new(&display_text))
                                .s(Font::new()
                                    .size(font_size)
                                    .color_signal(theme().map(move |t| {
                                        let is_placeholder = selected.is_none();
                                        if disabled {
                                            match t {
                                                Theme::Light => "oklch(45% 0.14 250)", // neutral_5 light
                                                Theme::Dark => "oklch(55% 0.14 250)", // neutral_5 dark
                                            }
                                        } else if is_placeholder {
                                            match t {
                                                Theme::Light => "oklch(65% 0.14 250)", // neutral_6 light
                                                Theme::Dark => "oklch(55% 0.14 250)", // neutral_7 dark
                                            }
                                        } else {
                                            match t {
                                                Theme::Light => "oklch(15% 0.14 250)", // neutral_9 light
                                                Theme::Dark => "oklch(95% 0.14 250)", // neutral_11 dark
                                            }
                                        }
                                    }))
                                )
                        })
                    )
            )
            .item(
                El::new()
                    .child(Text::new("▼"))
                    .s(Font::new()
                        .size(FONT_SIZE_12)
                        .color_signal(theme().map(move |t| {
                            if disabled {
                                match t {
                                    Theme::Light => "oklch(45% 0.14 250)", // neutral_5 light
                                    Theme::Dark => "oklch(55% 0.14 250)", // neutral_5 dark
                                }
                            } else {
                                match t {
                                    Theme::Light => "oklch(65% 0.14 250)", // neutral_6 light
                                    Theme::Dark => "oklch(55% 0.14 250)", // neutral_7 dark
                                }
                            }
                        }))
                    )
            )
            .on_click({
                let selected_value = selected_value.clone();
                let options = self.options.clone();
                move || {
                    if !disabled && !options.is_empty() {
                        // Simple demo: cycle through options
                        let current = selected_value.get_cloned();
                        let next_option = if let Some(current_val) = current {
                            // Find current index and get next
                            let current_index = options.iter().position(|opt| opt.value == current_val).unwrap_or(0);
                            let next_index = (current_index + 1) % options.len();
                            Some(options[next_index].value.clone())
                        } else {
                            // Select first option
                            Some(options[0].value.clone())
                        };
                        selected_value.set(next_option);
                    }
                }
            })
;

        // Build the complete component
        if let Some(label_text) = &self.label {
            let mut items = Vec::new();

            // Label row
            let label_row = Row::new()
                .s(Gap::new().x(SPACING_4))
                .item(
                    El::new()
                        .child(Text::new(label_text))
                        .s(Font::new()
                            .size(FONT_SIZE_14)
                            .weight(FontWeight::Number(FONT_WEIGHT_5))
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
                )
                .item_signal(always(self.required).map(|required| {
                    if required {
                        Some(
                            El::new()
                                .child(Text::new("*"))
                                .s(Font::new()
                                    .size(FONT_SIZE_14)
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
                }));

            items.push(label_row.unify());
            items.push(select_input.unify());

            // Description
            if let Some(description) = &self.description {
                let desc_element = El::new()
                    .child(Text::new(description))
                    .s(Font::new()
                        .size(FONT_SIZE_12)
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
                    );
                items.push(desc_element.unify());
            }

            Column::new()
                .s(Gap::new().y(SPACING_4))
                .items(items)
                .unify()
        } else {
            select_input.unify()
        }
    }
}

// Convenience functions
pub fn select() -> SelectBuilder {
    SelectBuilder::new()
}

pub fn select_option(value: impl Into<String>, label: impl Into<String>) -> SelectOption {
    SelectOption::new(value, label)
}

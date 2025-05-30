use zoon::*;
use crate::tokens::*;

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
    on_change: Option<Box<dyn Fn(String)>>,
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
            on_change: None,
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

    pub fn on_change<F>(mut self, handler: F) -> Self
    where
        F: Fn(String) + 'static
    {
        self.on_change = Some(Box::new(handler));
        self
    }

    pub fn build(self) -> impl Element {
        let (padding_x, padding_y, font_size) = match self.size {
            SelectSize::Small => (SPACING_8, SPACING_6, FONT_SIZE_14),
            SelectSize::Medium => (SPACING_12, SPACING_8, FONT_SIZE_16),
            SelectSize::Large => (SPACING_16, SPACING_12, FONT_SIZE_18),
        };

        let border_color = if self.disabled {
            "#d1d5db" // gray-300
        } else {
            "#e5e7eb" // gray-200
        };

        let background_color = if self.disabled {
            "#f9fafb" // gray-50
        } else {
            "#ffffff" // white
        };

        let text_color = if self.disabled {
            "#9ca3af" // gray-400
        } else {
            "#374151" // gray-700
        };

        // Determine display text
        let display_text = if let Some(selected) = &self.selected_value {
            // Find the label for the selected value
            self.options
                .iter()
                .find(|opt| opt.value == *selected)
                .map(|opt| opt.label.clone())
                .unwrap_or_else(|| selected.clone())
        } else {
            self.placeholder.clone().unwrap_or_else(|| "Select an option...".to_string())
        };

        let mut select = Row::new()
            .s(Width::fill())
            .s(Padding::new().x(padding_x).y(padding_y))
            .s(Borders::all(Border::new().width(1).color(border_color)))
            .s(RoundedCorners::all(6))
            .s(Background::new().color(background_color))
            .s(Align::new().center_y())
            .item(
                El::new()
                    .s(Width::fill())
                    .s(Font::new()
                        .size(font_size)
                        .color(text_color)
                    )
                    .child(Text::new(&display_text))
            )
            .item(
                El::new()
                    .s(Font::new()
                        .size(FONT_SIZE_14)
                        .color("#6b7280") // gray-500
                    )
                    .child(Text::new("▼"))
            );

        // Add interactivity if not disabled
        if !self.disabled {
            select = select.s(Cursor::new(CursorIcon::Pointer));

            if let Some(handler) = self.on_change {
                // Get first option value for demo
                let demo_value = self.options.first()
                    .map(|opt| opt.value.clone())
                    .unwrap_or_else(|| "demo".to_string());

                select = select.on_click(move || {
                    // In a real implementation, this would open a dropdown
                    // For now, just trigger with a demo value
                    handler(demo_value.clone());
                });
            }
        }

        select
    }
}

// Convenience functions
pub fn select() -> SelectBuilder {
    SelectBuilder::new()
}

pub fn select_option(value: impl Into<String>, label: impl Into<String>) -> SelectOption {
    SelectOption::new(value, label)
}

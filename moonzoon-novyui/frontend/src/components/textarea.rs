use zoon::*;
use crate::tokens::*;

// TextArea sizes
#[derive(Debug, Clone, Copy)]
pub enum TextAreaSize {
    Small,   // Smaller padding and font
    Medium,  // Default size
    Large,   // Larger padding and font
}

// TextArea builder
pub struct TextAreaBuilder {
    size: TextAreaSize,
    placeholder: Option<String>,
    value: String,
    disabled: bool,
    required: bool,
    rows: u32,
    on_change: Option<Box<dyn Fn(String)>>,
    on_focus: Option<Box<dyn Fn()>>,
    on_blur: Option<Box<dyn Fn()>>,
}

impl TextAreaBuilder {
    pub fn new() -> Self {
        Self {
            size: TextAreaSize::Medium,
            placeholder: None,
            value: String::new(),
            disabled: false,
            required: false,
            rows: 3,
            on_change: None,
            on_focus: None,
            on_blur: None,
        }
    }

    pub fn size(mut self, size: TextAreaSize) -> Self {
        self.size = size;
        self
    }

    pub fn placeholder(mut self, placeholder: impl Into<String>) -> Self {
        self.placeholder = Some(placeholder.into());
        self
    }

    pub fn value(mut self, value: impl Into<String>) -> Self {
        self.value = value.into();
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

    pub fn rows(mut self, rows: u32) -> Self {
        self.rows = rows;
        self
    }

    pub fn on_change<F>(mut self, handler: F) -> Self
    where
        F: Fn(String) + 'static
    {
        self.on_change = Some(Box::new(handler));
        self
    }

    pub fn on_focus<F>(mut self, handler: F) -> Self
    where
        F: Fn() + 'static
    {
        self.on_focus = Some(Box::new(handler));
        self
    }

    pub fn on_blur<F>(mut self, handler: F) -> Self
    where
        F: Fn() + 'static
    {
        self.on_blur = Some(Box::new(handler));
        self
    }

    pub fn build(self) -> impl Element {
        let (padding_x, padding_y, font_size) = match self.size {
            TextAreaSize::Small => (SPACING_8, SPACING_6, FONT_SIZE_SM),
            TextAreaSize::Medium => (SPACING_12, SPACING_8, FONT_SIZE_BASE),
            TextAreaSize::Large => (SPACING_16, SPACING_12, FONT_SIZE_LG),
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

        // Calculate approximate height based on rows
        let line_height = 20; // Approximate line height in pixels
        let textarea_height = (self.rows * line_height) + (padding_y * 2);

        // Add placeholder or value text
        let display_text = if self.value.is_empty() {
            self.placeholder.as_deref().unwrap_or("")
        } else {
            &self.value
        };

        let mut textarea = El::new()
            .s(Width::fill())
            .s(Height::exact(textarea_height))
            .s(Padding::new().x(padding_x).y(padding_y))
            .s(Borders::all(Border::new().width(1).color(border_color)))
            .s(RoundedCorners::all(6))
            .s(Background::new().color(background_color))
            .s(Font::new()
                .size(font_size)
                .color(text_color)
            )
            .child(Text::new(display_text));

        // Add interactivity if not disabled
        if !self.disabled {
            textarea = textarea.s(Cursor::new(CursorIcon::Text));

            if let Some(handler) = self.on_change {
                textarea = textarea.on_click(move || {
                    // In a real implementation, this would open a text input
                    // For now, just trigger with sample text
                    handler("Sample text input".to_string());
                });
            }
        }

        textarea
    }
}

// Convenience function
pub fn textarea() -> TextAreaBuilder {
    TextAreaBuilder::new()
}

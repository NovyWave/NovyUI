// Input Component
// Research-validated form patterns from ringrev_private

use crate::tokens::*;
use zoon::*;

#[derive(Clone, Copy, Debug, PartialEq)]
pub enum InputSize {
    Small,
    Medium,
    Large,
}

#[derive(Clone, Copy, Debug, PartialEq)]
pub enum InputVariant {
    Default,
    Error,
    Success,
}

pub struct InputBuilder {
    placeholder: String,
    value: String,
    size: InputSize,
    variant: InputVariant,
    disabled: bool,
    required: bool,
    left_icon: Option<&'static str>,
    right_icon: Option<&'static str>,
    on_change: Option<Box<dyn Fn(String)>>,
    on_focus: Option<Box<dyn Fn()>>,
    on_blur: Option<Box<dyn Fn()>>,
}

impl InputBuilder {
    pub fn new() -> Self {
        Self {
            placeholder: String::new(),
            value: String::new(),
            size: InputSize::Medium,
            variant: InputVariant::Default,
            disabled: false,
            required: false,
            left_icon: None,
            right_icon: None,
            on_change: None,
            on_focus: None,
            on_blur: None,
        }
    }

    pub fn placeholder(mut self, placeholder: impl Into<String>) -> Self {
        self.placeholder = placeholder.into();
        self
    }

    pub fn value(mut self, value: impl Into<String>) -> Self {
        self.value = value.into();
        self
    }

    pub fn size(mut self, size: InputSize) -> Self {
        self.size = size;
        self
    }

    pub fn variant(mut self, variant: InputVariant) -> Self {
        self.variant = variant;
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

    pub fn left_icon(mut self, icon: &'static str) -> Self {
        self.left_icon = Some(icon);
        self
    }

    pub fn right_icon(mut self, icon: &'static str) -> Self {
        self.right_icon = Some(icon);
        self
    }

    pub fn on_change<F>(mut self, handler: F) -> Self
    where
        F: Fn(String) + 'static,
    {
        self.on_change = Some(Box::new(handler));
        self
    }

    pub fn on_focus<F>(mut self, handler: F) -> Self
    where
        F: Fn() + 'static,
    {
        self.on_focus = Some(Box::new(handler));
        self
    }

    pub fn on_blur<F>(mut self, handler: F) -> Self
    where
        F: Fn() + 'static,
    {
        self.on_blur = Some(Box::new(handler));
        self
    }

    pub fn build(self) -> impl Element {
        let (focused, _focused_signal) = Mutable::new_and_signal(false);

        // Size-based styling
        let (padding_x, padding_y, font_size) = match self.size {
            InputSize::Small => (SPACING_12, SPACING_6, FONT_SIZE_SM),
            InputSize::Medium => (SPACING_16, SPACING_8, FONT_SIZE_BASE),
            InputSize::Large => (SPACING_20, SPACING_12, FONT_SIZE_LG),
        };

        // Variant-based border colors - using static colors for now
        let border_color = match self.variant {
            InputVariant::Default => "oklch(95% 0.025 255)",
            InputVariant::Error => "oklch(55% 0.16 15)",
            InputVariant::Success => "oklch(55% 0.16 140)",
        };

        TextInput::new()
            .s(Width::fill())
            .s(Padding::new().x(padding_x).y(padding_y))
            .s(RoundedCorners::all(6))
            .s(Font::new().size(font_size))
            .s(Background::new().color_signal(neutral_1()))
            .s(transition_colors())
            .s(Borders::all(
                Border::new()
                    .width(1)
                    .color(border_color)
            ))
            .placeholder(Placeholder::new(&self.placeholder))
            .text(&self.value)
            .label_hidden("Input")
            .on_change(move |new_value| {
                if let Some(handler) = &self.on_change {
                    handler(new_value);
                }
            })
            .on_focus({
                let focused = focused.clone();
                move || {
                    focused.set(true);
                    if let Some(handler) = &self.on_focus {
                        handler();
                    }
                }
            })
            .on_blur({
                let focused = focused.clone();
                move || {
                    focused.set(false);
                    if let Some(handler) = &self.on_blur {
                        handler();
                    }
                }
            })
    }
}

// Convenience function
pub fn input() -> InputBuilder {
    InputBuilder::new()
}

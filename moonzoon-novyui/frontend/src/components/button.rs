// Button Component
// Research-validated pattern with MoonZoon styling and animation

use crate::tokens::*;
use crate::components::icon::*;
use zoon::*;

#[derive(Clone, Copy, Debug, PartialEq)]
pub enum ButtonVariant {
    Primary,
    Secondary,
    Outline,
    Ghost,
    Link,
    Destructive,
}

#[derive(Clone, Copy, Debug, PartialEq)]
pub enum ButtonSize {
    Small,
    Medium,
    Large,
}

pub struct ButtonBuilder {
    label: String,
    variant: ButtonVariant,
    size: ButtonSize,
    disabled: bool,
    loading: bool,
    left_icon: Option<IconBuilder>,
    right_icon: Option<IconBuilder>,
    on_press: Option<Box<dyn Fn()>>,
}

impl ButtonBuilder {
    pub fn new() -> Self {
        Self {
            label: String::new(),
            variant: ButtonVariant::Primary,
            size: ButtonSize::Medium,
            disabled: false,
            loading: false,
            left_icon: None,
            right_icon: None,
            on_press: None,
        }
    }

    pub fn label(mut self, label: impl Into<String>) -> Self {
        self.label = label.into();
        self
    }

    pub fn variant(mut self, variant: ButtonVariant) -> Self {
        self.variant = variant;
        self
    }

    pub fn size(mut self, size: ButtonSize) -> Self {
        self.size = size;
        self
    }

    pub fn disabled(mut self, disabled: bool) -> Self {
        self.disabled = disabled;
        self
    }

    pub fn loading(mut self, loading: bool) -> Self {
        self.loading = loading;
        self
    }

    pub fn left_icon(mut self, icon: IconBuilder) -> Self {
        self.left_icon = Some(icon);
        self
    }

    pub fn right_icon(mut self, icon: IconBuilder) -> Self {
        self.right_icon = Some(icon);
        self
    }

    pub fn on_press<F>(mut self, handler: F) -> Self
    where
        F: Fn() + 'static,
    {
        self.on_press = Some(Box::new(handler));
        self
    }

    pub fn build(self) -> impl Element {
        let (hovered, hovered_signal) = Mutable::new_and_signal(false);
        let (pressed, pressed_signal) = Mutable::new_and_signal(false);

        // Size-based styling
        let (padding_x, padding_y, font_size) = match self.size {
            ButtonSize::Small => (SPACING_12, SPACING_6, FONT_SIZE_SM),
            ButtonSize::Medium => (SPACING_16, SPACING_8, FONT_SIZE_BASE),
            ButtonSize::Large => (SPACING_20, SPACING_12, FONT_SIZE_LG),
        };

        // Variant-based colors - unified signal approach
        let variant = self.variant;
        let bg_color_signal = theme().map(move |t| match (variant, t) {
            (ButtonVariant::Primary, Theme::Light) => "oklch(55% 0.16 250)",
            (ButtonVariant::Primary, Theme::Dark) => "oklch(65% 0.16 250)",
            (ButtonVariant::Secondary, Theme::Light) => "oklch(95% 0.025 255)",
            (ButtonVariant::Secondary, Theme::Dark) => "oklch(18% 0.025 255)",
            (ButtonVariant::Outline, _) => "transparent",
            (ButtonVariant::Ghost, _) => "transparent",
            (ButtonVariant::Link, _) => "transparent",
            (ButtonVariant::Destructive, Theme::Light) => "oklch(55% 0.16 15)",
            (ButtonVariant::Destructive, Theme::Dark) => "oklch(65% 0.16 15)",
        });

        let hover_bg_color_signal = theme().map(move |t| match (variant, t) {
            (ButtonVariant::Primary, Theme::Light) => "oklch(45% 0.20 250)",
            (ButtonVariant::Primary, Theme::Dark) => "oklch(75% 0.20 250)",
            (ButtonVariant::Secondary, Theme::Light) => "oklch(70% 0.025 255)",
            (ButtonVariant::Secondary, Theme::Dark) => "oklch(45% 0.025 255)",
            (ButtonVariant::Outline, Theme::Light) => "oklch(97% 0.025 255)",
            (ButtonVariant::Outline, Theme::Dark) => "oklch(15% 0.025 255)",
            (ButtonVariant::Ghost, Theme::Light) => "oklch(97% 0.025 255)",
            (ButtonVariant::Ghost, Theme::Dark) => "oklch(15% 0.025 255)",
            (ButtonVariant::Link, Theme::Light) => "oklch(97% 0.025 255)",
            (ButtonVariant::Link, Theme::Dark) => "oklch(15% 0.025 255)",
            (ButtonVariant::Destructive, Theme::Light) => "oklch(45% 0.20 15)",
            (ButtonVariant::Destructive, Theme::Dark) => "oklch(75% 0.20 15)",
        });

        let text_color_signal = theme().map(move |t| match (variant, t) {
            (ButtonVariant::Primary, _) => "oklch(100% 0 0)",
            (ButtonVariant::Secondary, Theme::Light) => "oklch(25% 0.025 255)",
            (ButtonVariant::Secondary, Theme::Dark) => "oklch(85% 0.025 255)",
            (ButtonVariant::Outline, Theme::Light) => "oklch(55% 0.16 250)",
            (ButtonVariant::Outline, Theme::Dark) => "oklch(65% 0.16 250)",
            (ButtonVariant::Ghost, Theme::Light) => "oklch(25% 0.025 255)",
            (ButtonVariant::Ghost, Theme::Dark) => "oklch(85% 0.025 255)",
            (ButtonVariant::Link, Theme::Light) => "oklch(55% 0.16 250)",
            (ButtonVariant::Link, Theme::Dark) => "oklch(65% 0.16 250)",
            (ButtonVariant::Destructive, _) => "oklch(100% 0 0)",
        });

        // TODO: Add reactive border colors when MoonZoon supports border signals

        Button::new()
            .s(Padding::new().x(padding_x).y(padding_y))
            .s(RoundedCorners::all(6))
            .s(Font::new().size(font_size).weight(FontWeight::Medium))
            .s(transition_colors())
            .s(Background::new().color_signal(
                map_ref! {
                    let hovered = hovered_signal,
                    let bg_color = bg_color_signal,
                    let hover_bg_color = hover_bg_color_signal =>
                    if *hovered {
                        *hover_bg_color
                    } else {
                        *bg_color
                    }
                }
            ))
            .s(Borders::all(
                Border::new()
                    .width(1)
                    .color("transparent") // TODO: Make reactive when MoonZoon supports it
            ))
            .s(Font::new().color_signal(text_color_signal))
            .s(Cursor::new(CursorIcon::Pointer))
            .on_hovered_change(move |is_hovered| hovered.set(is_hovered))
            .label(&self.label)
            .on_press(move || {
                if let Some(handler) = &self.on_press {
                    handler();
                }
            })
    }
}

// Convenience function for creating buttons
pub fn button() -> ButtonBuilder {
    ButtonBuilder::new()
}

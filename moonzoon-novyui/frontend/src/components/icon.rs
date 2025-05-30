// Icon Component
// Enhanced implementation with SVG support and theming

use crate::tokens::*;
use crate::assets;
use zoon::*;

#[derive(Clone, Copy, Debug, PartialEq)]
pub enum IconSize {
    Small,   // 16px
    Medium,  // 20px
    Large,   // 24px
    XLarge,  // 32px
}

impl IconSize {
    pub fn to_px(self) -> u32 {
        match self {
            IconSize::Small => 16,
            IconSize::Medium => 20,
            IconSize::Large => 24,
            IconSize::XLarge => 32,
        }
    }
}

#[derive(Clone, Copy, Debug, PartialEq)]
pub enum IconColor {
    Current,    // Inherit from parent
    Primary,    // Primary theme color
    Secondary,  // Secondary theme color
    Muted,      // Muted text color
    Success,    // Success color
    Error,      // Error color
    Custom(&'static str), // Custom color value
}

pub struct IconBuilder {
    name: &'static str,
    size: IconSize,
    color: IconColor,
}

impl IconBuilder {
    pub fn new(name: &'static str) -> Self {
        Self {
            name,
            size: IconSize::Medium,
            color: IconColor::Current,
        }
    }

    pub fn size(mut self, size: IconSize) -> Self {
        self.size = size;
        self
    }

    pub fn color(mut self, color: IconColor) -> Self {
        self.color = color;
        self
    }

    pub fn build(self) -> impl Element {
        let size_px = self.size.to_px();
        let icon_url = assets::icon_url(self.name);

        // Get color signal based on IconColor - unified approach
        let color = self.color;
        let color_signal = theme().map(move |t| match (color, t) {
            (IconColor::Current, _) => "currentColor",
            (IconColor::Primary, Theme::Light) => "oklch(55% 0.16 250)",
            (IconColor::Primary, Theme::Dark) => "oklch(65% 0.16 250)",
            (IconColor::Secondary, Theme::Light) => "oklch(25% 0.025 255)",
            (IconColor::Secondary, Theme::Dark) => "oklch(85% 0.025 255)",
            (IconColor::Muted, Theme::Light) => "oklch(70% 0.025 255)",
            (IconColor::Muted, Theme::Dark) => "oklch(45% 0.025 255)",
            (IconColor::Success, Theme::Light) => "oklch(55% 0.16 140)",
            (IconColor::Success, Theme::Dark) => "oklch(65% 0.16 140)",
            (IconColor::Error, Theme::Light) => "oklch(55% 0.16 15)",
            (IconColor::Error, Theme::Dark) => "oklch(65% 0.16 15)",
            (IconColor::Custom(color), _) => color,
        });

        // Use actual SVG icon from assets - simplified approach for now
        El::new()
            .s(Width::exact(size_px))
            .s(Height::exact(size_px))
            .s(Background::new().url(&icon_url))
            .s(Font::new().color_signal(color_signal))
            .child(Text::new("🔗")) // Fallback icon while SVG loading is being implemented
    }
}

// Convenience functions
pub fn icon(name: &'static str) -> IconBuilder {
    IconBuilder::new(name)
}

// Common icon shortcuts
pub fn chevron_down() -> IconBuilder {
    IconBuilder::new("chevron-down")
}

pub fn chevron_up() -> IconBuilder {
    IconBuilder::new("chevron-up")
}

pub fn chevron_left() -> IconBuilder {
    IconBuilder::new("chevron-left")
}

pub fn chevron_right() -> IconBuilder {
    IconBuilder::new("chevron-right")
}

pub fn search() -> IconBuilder {
    IconBuilder::new("search")
}

pub fn close() -> IconBuilder {
    IconBuilder::new("close")
}

pub fn check() -> IconBuilder {
    IconBuilder::new("check")
}

pub fn eye() -> IconBuilder {
    IconBuilder::new("eye")
}

pub fn eye_off() -> IconBuilder {
    IconBuilder::new("eye-off")
}

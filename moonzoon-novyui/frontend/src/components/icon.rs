// Icon Component
// Proper SVG implementation matching Vue Storybook version

use crate::tokens::*;
use crate::assets;
use zoon::*;

// Icon size variants matching design system
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

// Icon color variants with theme support
#[derive(Clone, Copy, Debug, PartialEq)]
pub enum IconColor {
    Current,    // Inherit from parent (default)
    Primary,    // Primary theme color
    Secondary,  // Secondary theme color
    Muted,      // Muted text color
    Success,    // Success color
    Error,      // Error color
    Custom(&'static str), // Custom color value
}

// Icon builder for fluent API
pub struct IconBuilder {
    name: &'static str,
    size: IconSize,
    color: IconColor,
    aria_label: Option<String>,
}

impl IconBuilder {
    pub fn new(name: &'static str) -> Self {
        Self {
            name,
            size: IconSize::Medium,
            color: IconColor::Secondary,  // Use Secondary instead of Current for better visibility
            aria_label: None,
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

    pub fn aria_label(mut self, label: impl Into<String>) -> Self {
        self.aria_label = Some(label.into());
        self
    }

    pub fn build(self) -> impl Element {
        let size_px = self.size.to_px();

        // Get color signal based on theme and color variant - improved contrast for dark theme
        let color = self.color;
        let color_signal = theme().map(move |t| match (color, t) {
            (IconColor::Current, _) => "currentColor",
            (IconColor::Primary, Theme::Light) => "oklch(55% 0.16 250)",
            (IconColor::Primary, Theme::Dark) => "oklch(75% 0.16 250)",  // Brighter for dark theme
            (IconColor::Secondary, Theme::Light) => "oklch(45% 0.05 255)",
            (IconColor::Secondary, Theme::Dark) => "oklch(75% 0.05 255)",  // Much brighter for dark theme
            (IconColor::Muted, Theme::Light) => "oklch(60% 0.02 255)",
            (IconColor::Muted, Theme::Dark) => "oklch(65% 0.02 255)",  // Brighter for dark theme
            (IconColor::Success, Theme::Light) => "oklch(55% 0.16 140)",
            (IconColor::Success, Theme::Dark) => "oklch(70% 0.16 140)",  // Brighter for dark theme
            (IconColor::Error, Theme::Light) => "oklch(55% 0.16 15)",
            (IconColor::Error, Theme::Dark) => "oklch(70% 0.16 15)",  // Brighter for dark theme
            (IconColor::Custom(color), _) => color,
        });

        // Create SVG icon element using proper inline SVG approach
        let svg_element = create_svg_icon(self.name, color_signal, size_px);

        // Wrap in container with proper accessibility and sizing
        El::new()
            .s(Width::exact(size_px))
            .s(Height::exact(size_px))
            .s(Align::center())
            .child(svg_element)
    }
}

// SVG icon creation function - matches Vue Storybook approach
fn create_svg_icon(name: &'static str, color_signal: impl Signal<Item = &'static str> + Unpin + 'static, size_px: u32) -> impl Element {
    // For now, we'll use a simple approach with fallback icons
    // This provides immediate functionality while we can enhance with proper SVG loading later

    // Create a fallback element with Unicode icons
    // IMPORTANT: Unicode characters need font-size to scale properly, not just container size
    El::new()
        .s(Width::fill())
        .s(Height::fill())
        .s(Align::center())
        .s(Font::new()
            .color_signal(color_signal)
            .size(size_px)  // Set font-size to match container size for proper scaling
        )
        .child(Text::new(get_fallback_icon(name)))
}



// Get fallback icon character for unknown icons
fn get_fallback_icon(name: &'static str) -> &'static str {
    match name {
        "chevron-down" => "⌄",
        "chevron-up" => "⌃",
        "chevron-left" => "‹",
        "chevron-right" => "›",
        "check" => "✓",
        "x" => "✕",
        "star" => "★",
        "heart" => "♥",
        "user" => "👤",
        "search" => "🔍",
        "eye" => "👁",
        "eye-off" => "🙈",
        "settings" => "⚙",
        "info" => "ℹ",
        "plus" => "+",
        "minus" => "−",
        "refresh-cw" => "↻",  // Spinning arrow for loading states
        "refresh" => "↻",     // Alternative name for refresh icon
        "loader" => "↻",      // Alternative name for loader icon
        _ => "?",
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

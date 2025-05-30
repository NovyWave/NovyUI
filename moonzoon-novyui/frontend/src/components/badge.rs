// Badge Component
// Small status indicator with various styles and colors

use crate::tokens::*;
use zoon::*;

#[derive(Clone, Copy, Debug, PartialEq)]
pub enum BadgeVariant {
    Default,     // Neutral gray badge
    Primary,     // Primary color badge
    Secondary,   // Secondary color badge
    Success,     // Green success badge
    Warning,     // Yellow warning badge
    Error,       // Red error badge
    Outline,     // Outlined badge
}

#[derive(Clone, Copy, Debug, PartialEq)]
pub enum BadgeSize {
    Small,       // Compact badge
    Medium,      // Standard badge
    Large,       // Larger badge
}

pub struct BadgeBuilder {
    text: String,
    variant: BadgeVariant,
    size: BadgeSize,
    dot: bool,  // Show as dot instead of text
}

impl BadgeBuilder {
    pub fn new(text: impl Into<String>) -> Self {
        Self {
            text: text.into(),
            variant: BadgeVariant::Default,
            size: BadgeSize::Medium,
            dot: false,
        }
    }

    pub fn variant(mut self, variant: BadgeVariant) -> Self {
        self.variant = variant;
        self
    }

    pub fn size(mut self, size: BadgeSize) -> Self {
        self.size = size;
        self
    }

    pub fn dot(mut self) -> Self {
        self.dot = true;
        self
    }

    pub fn build(self) -> impl Element {
        // Size-based styling - Using proper token names
        let (padding_x, padding_y, font_size) = match self.size {
            BadgeSize::Small => (SPACING_6, SPACING_2, FONT_SIZE_12),
            BadgeSize::Medium => (SPACING_8, SPACING_4, FONT_SIZE_14),
            BadgeSize::Large => (SPACING_12, SPACING_6, FONT_SIZE_16),
        };

        // Variant-based colors - using simple static colors to avoid signal issues
        let (bg_color, text_color, border_color) = match self.variant {
            BadgeVariant::Default => ("oklch(95% 0.025 255)", "oklch(25% 0.025 255)", "transparent"),
            BadgeVariant::Primary => ("oklch(55% 0.16 250)", "oklch(100% 0 0)", "transparent"),
            BadgeVariant::Secondary => ("oklch(70% 0.025 255)", "oklch(15% 0.025 255)", "transparent"),
            BadgeVariant::Success => ("oklch(55% 0.16 140)", "oklch(100% 0 0)", "transparent"),
            BadgeVariant::Warning => ("oklch(70% 0.16 80)", "oklch(0% 0 0)", "transparent"),
            BadgeVariant::Error => ("oklch(55% 0.16 15)", "oklch(100% 0 0)", "transparent"),
            BadgeVariant::Outline => ("transparent", "oklch(25% 0.025 255)", "oklch(70% 0.025 255)"),
        };

        // Create badge content - using .unify() to resolve element type mismatch
        if self.dot {
            // Dot badge - just a small circle
            El::new()
                .s(Width::exact(match self.size {
                    BadgeSize::Small => 8,
                    BadgeSize::Medium => 10,
                    BadgeSize::Large => 12,
                }))
                .s(Height::exact(match self.size {
                    BadgeSize::Small => 8,
                    BadgeSize::Medium => 10,
                    BadgeSize::Large => 12,
                }))
                .s(RoundedCorners::all(50))
                .s(Background::new().color(bg_color))
                .unify()
        } else {
            // Text badge
            El::new()
                .s(Padding::new().x(padding_x).y(padding_y))
                .s(RoundedCorners::all(match self.size {
                    BadgeSize::Small => 4,
                    BadgeSize::Medium => 6,
                    BadgeSize::Large => 8,
                }))
                .s(Background::new().color(bg_color))
                .s(Borders::all(
                    Border::new()
                        .width(1)
                        .color(border_color)
                ))
                .s(Font::new()
                    .size(font_size)
                    .weight(FontWeight::Medium)
                    .color(text_color)
                )
                .s(Align::center())
                .s(transition_colors())
                .child(Text::new(&self.text))
                .unify()
        }
    }
}

// Convenience functions
pub fn badge(text: impl Into<String>) -> BadgeBuilder {
    BadgeBuilder::new(text)
}

pub fn dot_badge() -> BadgeBuilder {
    BadgeBuilder::new("").dot()
}

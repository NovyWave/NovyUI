use zoon::*;
use crate::tokens::*;

// Kbd sizes
#[derive(Debug, Clone, Copy)]
pub enum KbdSize {
    Small,   // Smaller padding and font
    Medium,  // Default size
    Large,   // Larger padding and font
}

// Kbd builder
pub struct KbdBuilder {
    size: KbdSize,
    text: String,
}

impl KbdBuilder {
    pub fn new(text: impl Into<String>) -> Self {
        Self {
            size: KbdSize::Medium,
            text: text.into(),
        }
    }

    pub fn size(mut self, size: KbdSize) -> Self {
        self.size = size;
        self
    }

    pub fn build(self) -> impl Element {
        let (padding_x, padding_y, font_size) = match self.size {
            KbdSize::Small => (SPACING_6, SPACING_2, FONT_SIZE_12),
            KbdSize::Medium => (SPACING_8, SPACING_4, FONT_SIZE_14),
            KbdSize::Large => (SPACING_12, SPACING_6, FONT_SIZE_16),
        };

        El::new()
            .s(Padding::new().x(padding_x).y(padding_y))
            .s(Borders::all(Border::new().width(1).color("#d1d5db"))) // gray-300
            .s(RoundedCorners::all(4))
            .s(Background::new().color("#f9fafb")) // gray-50
            .s(Font::new()
                .size(font_size)
                .color("#374151") // gray-700
                .weight(FontWeight::Medium)
            )
            .child(Text::new(&self.text))
    }
}

// Convenience function
pub fn kbd(text: impl Into<String>) -> KbdBuilder {
    KbdBuilder::new(text)
}

// Common keyboard shortcuts
pub fn ctrl_c() -> KbdBuilder {
    kbd("Ctrl+C")
}

pub fn ctrl_v() -> KbdBuilder {
    kbd("Ctrl+V")
}

pub fn ctrl_z() -> KbdBuilder {
    kbd("Ctrl+Z")
}

pub fn ctrl_s() -> KbdBuilder {
    kbd("Ctrl+S")
}

pub fn enter() -> KbdBuilder {
    kbd("Enter")
}

pub fn escape() -> KbdBuilder {
    kbd("Esc")
}

pub fn tab() -> KbdBuilder {
    kbd("Tab")
}

pub fn shift_tab() -> KbdBuilder {
    kbd("Shift+Tab")
}

pub fn arrow_up() -> KbdBuilder {
    kbd("↑")
}

pub fn arrow_down() -> KbdBuilder {
    kbd("↓")
}

pub fn arrow_left() -> KbdBuilder {
    kbd("←")
}

pub fn arrow_right() -> KbdBuilder {
    kbd("→")
}

pub fn cmd_k() -> KbdBuilder {
    kbd("⌘K")
}

pub fn cmd_enter() -> KbdBuilder {
    kbd("⌘Enter")
}

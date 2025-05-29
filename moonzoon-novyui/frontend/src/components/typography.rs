// Typography Components
// Based on NovyUI Vue typography components

use crate::tokens::*;
use zoon::*;

// Heading Components
pub fn h1(text: impl Into<String>) -> impl Element {
    El::new()
        .s(text_4xl())
        .s(font_bold())
        .s(Font::new().color_signal(neutral_12()))
        .child(Text::new(text.into()))
}

pub fn h2(text: impl Into<String>) -> impl Element {
    El::new()
        .s(text_3xl())
        .s(font_bold())
        .s(Font::new().color_signal(neutral_12()))
        .child(Text::new(text.into()))
}

pub fn h3(text: impl Into<String>) -> impl Element {
    El::new()
        .s(text_2xl())
        .s(font_semibold())
        .s(Font::new().color_signal(neutral_12()))
        .child(Text::new(text.into()))
}

pub fn h4(text: impl Into<String>) -> impl Element {
    El::new()
        .s(text_xl())
        .s(font_semibold())
        .s(Font::new().color_signal(neutral_12()))
        .child(Text::new(text.into()))
}

pub fn h5(text: impl Into<String>) -> impl Element {
    El::new()
        .s(text_lg())
        .s(font_medium())
        .s(Font::new().color_signal(neutral_12()))
        .child(Text::new(text.into()))
}

pub fn h6(text: impl Into<String>) -> impl Element {
    El::new()
        .s(text_base())
        .s(font_medium())
        .s(Font::new().color_signal(neutral_12()))
        .child(Text::new(text.into()))
}

// Paragraph Component
pub fn paragraph(text: impl Into<String>) -> impl Element {
    El::new()
        .s(text_base())
        .s(Font::new().color_signal(neutral_11()))
        .child(Text::new(text.into()))
}

// Small Text Component
pub fn small(text: impl Into<String>) -> impl Element {
    El::new()
        .s(text_sm())
        .s(Font::new().color_signal(neutral_6()))
        .child(Text::new(text.into()))
}

// Code Component
pub fn code(text: impl Into<String>) -> impl Element {
    El::new()
        .s(text_sm())
        .s(font_mono())
        .s(Padding::new().x(SPACING_4).y(SPACING_2))
        .s(RoundedCorners::all(4))
        .s(Background::new().color_signal(neutral_2()))
        .s(Font::new().color_signal(neutral_11()))
        .child(Text::new(text.into()))
}

// Lead Text Component (larger paragraph)
pub fn lead(text: impl Into<String>) -> impl Element {
    El::new()
        .s(text_lg())
        .s(Font::new().color_signal(neutral_11()))
        .child(Text::new(text.into()))
}

// Muted Text Component
pub fn muted(text: impl Into<String>) -> impl Element {
    El::new()
        .s(text_sm())
        .s(Font::new().color_signal(neutral_6()))
        .child(Text::new(text.into()))
}

// Typography Token System
// Based on NovyUI Vue typography tokens

use zoon::*;

// Font Families
pub const FONT_FAMILY_SANS: &str = "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
pub const FONT_FAMILY_MONO: &str = "'JetBrains Mono', 'Fira Code', Consolas, 'Courier New', monospace";

// Font Sizes
pub const FONT_SIZE_XS: u32 = 12;
pub const FONT_SIZE_SM: u32 = 14;
pub const FONT_SIZE_BASE: u32 = 16;
pub const FONT_SIZE_LG: u32 = 18;
pub const FONT_SIZE_XL: u32 = 20;
pub const FONT_SIZE_2XL: u32 = 24;
pub const FONT_SIZE_3XL: u32 = 30;
pub const FONT_SIZE_4XL: u32 = 36;

// Line Heights (as u32 for MoonZoon compatibility)
pub const LINE_HEIGHT_TIGHT: u32 = 20;
pub const LINE_HEIGHT_NORMAL: u32 = 24;
pub const LINE_HEIGHT_RELAXED: u32 = 26;

// Font Weights
pub const FONT_WEIGHT_NORMAL: u32 = 400;
pub const FONT_WEIGHT_MEDIUM: u32 = 500;
pub const FONT_WEIGHT_SEMIBOLD: u32 = 600;
pub const FONT_WEIGHT_BOLD: u32 = 700;

// Typography helper functions
pub fn text_xs() -> impl Style<'static> {
    Font::new().size(FONT_SIZE_XS).line_height(LINE_HEIGHT_TIGHT)
}

pub fn text_sm() -> impl Style<'static> {
    Font::new().size(FONT_SIZE_SM).line_height(LINE_HEIGHT_NORMAL)
}

pub fn text_base() -> impl Style<'static> {
    Font::new().size(FONT_SIZE_BASE).line_height(LINE_HEIGHT_NORMAL)
}

pub fn text_lg() -> impl Style<'static> {
    Font::new().size(FONT_SIZE_LG).line_height(LINE_HEIGHT_NORMAL)
}

pub fn text_xl() -> impl Style<'static> {
    Font::new().size(FONT_SIZE_XL).line_height(LINE_HEIGHT_NORMAL)
}

pub fn text_2xl() -> impl Style<'static> {
    Font::new().size(FONT_SIZE_2XL).line_height(LINE_HEIGHT_TIGHT)
}

pub fn text_3xl() -> impl Style<'static> {
    Font::new().size(FONT_SIZE_3XL).line_height(LINE_HEIGHT_TIGHT)
}

pub fn text_4xl() -> impl Style<'static> {
    Font::new().size(FONT_SIZE_4XL).line_height(LINE_HEIGHT_TIGHT)
}

pub fn font_medium() -> impl Style<'static> {
    Font::new().weight(FontWeight::Medium)
}

pub fn font_semibold() -> impl Style<'static> {
    Font::new().weight(FontWeight::SemiBold)
}

pub fn font_bold() -> impl Style<'static> {
    Font::new().weight(FontWeight::Bold)
}

pub fn font_mono() -> impl Style<'static> {
    Font::new().family([FontFamily::new(FONT_FAMILY_MONO)])
}

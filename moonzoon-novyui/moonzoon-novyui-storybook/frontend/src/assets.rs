// Asset Helper Functions for NovyUI MoonZoon Migration
// Provides convenient functions for loading fonts, icons, and patterns

use zoon::*;

// ============================================================================
// FONT HELPERS
// ============================================================================

/// Get the URL for a font file
pub fn font_url(font_name: &str) -> String {
    public_url(&format!("fonts/{}", font_name))
}

/// Load Inter font family
pub fn load_inter_fonts() -> Vec<String> {
    vec![
        font_url("inter-4-normal.woff2"),
        font_url("inter-4-italic-normal.woff2"),
        font_url("inter-5-medium.woff2"),
        font_url("inter-5-italic-medium.woff2"),
        font_url("inter-7-bold.woff2"),
        font_url("inter-7-italic-bold.woff2"),
    ]
}

/// Load FiraCode font family (for code/monospace)
pub fn load_firacode_fonts() -> Vec<String> {
    vec![
        font_url("firacode-4-normal.woff2"),
        font_url("firacode-7-bold.woff2"),
    ]
}

/// Load Audiowide font family (for display/headings)
pub fn load_audiowide_fonts() -> Vec<String> {
    vec![
        font_url("audiowide-4-normal.woff2"),
    ]
}

/// Get CSS font-face declarations for all fonts
pub fn get_font_face_css() -> String {
    r#"
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/inter-4-normal.woff2') format('woff2');
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/inter-4-italic-normal.woff2') format('woff2');
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/inter-5-medium.woff2') format('woff2');
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/inter-5-italic-medium.woff2') format('woff2');
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/inter-7-bold.woff2') format('woff2');
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/inter-7-italic-bold.woff2') format('woff2');
    }
    
    @font-face {
        font-family: 'FiraCode';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/firacode-4-normal.woff2') format('woff2');
    }
    
    @font-face {
        font-family: 'FiraCode';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/firacode-7-bold.woff2') format('woff2');
    }
    
    @font-face {
        font-family: 'Audiowide';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/audiowide-4-normal.woff2') format('woff2');
    }
    "#.to_string()
}

// ============================================================================
// ICON HELPERS
// ============================================================================

/// Get the URL for an icon file
pub fn icon_url(icon_name: &str) -> String {
    public_url(&format!("icons/{}.svg", icon_name))
}

/// Common icon names for easy access
pub mod icons {
    use super::icon_url;
    
    // Navigation icons
    pub fn arrow_down() -> String { icon_url("arrow-down") }
    pub fn arrow_left() -> String { icon_url("arrow-left") }
    pub fn arrow_right() -> String { icon_url("arrow-right") }
    pub fn arrow_up() -> String { icon_url("arrow-up") }
    pub fn chevron_down() -> String { icon_url("chevron-down") }
    pub fn chevron_left() -> String { icon_url("chevron-left") }
    pub fn chevron_right() -> String { icon_url("chevron-right") }
    pub fn chevron_up() -> String { icon_url("chevron-up") }
    
    // Action icons
    pub fn check() -> String { icon_url("check") }
    pub fn plus() -> String { icon_url("plus") }
    pub fn minus() -> String { icon_url("minus") }
    pub fn x() -> String { icon_url("x") }
    pub fn search() -> String { icon_url("search") }
    pub fn copy() -> String { icon_url("copy") }
    pub fn download() -> String { icon_url("download") }
    pub fn upload() -> String { icon_url("upload") }
    
    // UI icons
    pub fn eye() -> String { icon_url("eye") }
    pub fn eye_off() -> String { icon_url("eye-off") }
    pub fn menu() -> String { icon_url("menu") }
    pub fn settings() -> String { icon_url("settings") }
    pub fn info() -> String { icon_url("info") }
    pub fn bell() -> String { icon_url("bell") }
    pub fn user() -> String { icon_url("user") }
    pub fn house() -> String { icon_url("house") }
    
    // Status icons
    pub fn circle_check() -> String { icon_url("circle-check") }
    pub fn circle_alert() -> String { icon_url("circle-alert") }
    pub fn triangle_alert() -> String { icon_url("triangle-alert") }
    pub fn octagon_alert() -> String { icon_url("octagon-alert") }
    
    // File icons
    pub fn file() -> String { icon_url("file") }
    pub fn folder() -> String { icon_url("folder") }
    pub fn image() -> String { icon_url("image") }
}

// ============================================================================
// PATTERN HELPERS
// ============================================================================

/// Get the URL for a pattern file
pub fn pattern_url(pattern_name: &str) -> String {
    public_url(&format!("patterns/{}.svg", pattern_name))
}

/// Available background patterns
pub mod patterns {
    use super::pattern_url;
    
    pub fn hexagons() -> String { pattern_url("hexagons") }
    pub fn jigsaw() -> String { pattern_url("jigsaw") }
    pub fn overcast() -> String { pattern_url("overcast") }
    pub fn topography() -> String { pattern_url("topography") }
    pub fn wiggle() -> String { pattern_url("wiggle") }
}

// ============================================================================
// ASSET PRELOADING
// ============================================================================

/// Preload critical fonts for better performance
pub fn preload_critical_fonts() -> Vec<String> {
    vec![
        font_url("inter-4-normal.woff2"),
        font_url("inter-5-medium.woff2"),
        font_url("inter-7-bold.woff2"),
    ]
}

/// Preload common icons for better performance
pub fn preload_common_icons() -> Vec<String> {
    vec![
        icon_url("chevron-down"),
        icon_url("chevron-up"),
        icon_url("check"),
        icon_url("x"),
        icon_url("search"),
        icon_url("eye"),
        icon_url("eye-off"),
        icon_url("menu"),
    ]
}

/// Check if an asset is available (basic validation)
pub fn is_asset_available(asset_path: &str) -> bool {
    // In a real implementation, this could make a HEAD request
    // For now, we'll assume all assets in our public folder are available
    !asset_path.is_empty()
}

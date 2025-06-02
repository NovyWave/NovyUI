use zoon::*;
use moonzoon_novyui::*;

/// Configuration for story template styling
pub struct StoryTemplateConfig {
    pub section_gap: u32,
    pub frame_padding: u32,
    pub content_padding: u32,
    pub border_radius: u32,
    pub content_border_radius: u32,
}

impl Default for StoryTemplateConfig {
    fn default() -> Self {
        Self {
            section_gap: SPACING_32,
            frame_padding: SPACING_16,
            content_padding: SPACING_16,
            border_radius: 8,
            content_border_radius: 6,
        }
    }
}

/// Creates a responsive row that wraps on mobile - use as a macro
#[macro_export]
macro_rules! responsive_row {
    () => {
        Row::new()
            .multiline()
            .s(Gap::new().x(SPACING_8))
            .s(Gap::new().y(SPACING_8))
    };
}

/// Creates a responsive container that wraps any content with responsive behavior
pub fn responsive_container(content: impl Element) -> impl Element {
    // For now, just return the content as-is since RawStyle doesn't exist
    // The responsive behavior will be handled by using responsive_row! macro
    content
}

/// Creates a standardized story section with title, description, and content
pub fn story_section(title: &str, description: &str, content: impl Element) -> impl Element {
    story_section_with_config(title, description, content, StoryTemplateConfig::default())
}

/// Creates a story section with custom configuration
pub fn story_section_with_config(
    title: &str, 
    description: &str, 
    content: impl Element,
    config: StoryTemplateConfig
) -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_12))
        .s(Align::new().left())
        .s(Padding::all(config.frame_padding))
        .s(Borders::all_signal(story_frame_border()))
        .s(RoundedCorners::all(config.border_radius))
        .s(Background::new().color_signal(story_frame_background()))
        .item(story_header(title, description))
        .item(story_content_frame(content, config))
}

/// Creates the header section with title and description
fn story_header(title: &str, description: &str) -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_4))
        .s(Align::new().left())
        .item(story_title(title))
        .item(story_description(description))
}

/// Creates a standardized story title
pub fn story_title(title: &str) -> impl Element {
    El::new()
        .child(Text::new(title))
        .s(Font::new()
            .size(FONT_SIZE_16)
            .weight(FontWeight::Number(FONT_WEIGHT_6))
            .color_signal(story_title_color())
        )
}

/// Creates a standardized story description
pub fn story_description(description: &str) -> impl Element {
    El::new()
        .child(Text::new(description))
        .s(Font::new()
            .size(FONT_SIZE_14)
            .weight(FontWeight::Number(FONT_WEIGHT_4))
            .color_signal(story_description_color())
        )
}

/// Creates the content frame container
fn story_content_frame(content: impl Element, config: StoryTemplateConfig) -> impl Element {
    El::new()
        .s(Padding::all(config.content_padding))
        .s(Borders::all_signal(story_content_border()))
        .s(RoundedCorners::all(config.content_border_radius))
        .s(Background::new().color_signal(story_content_background()))
        .child(content)
}

/// Creates the main component section container with standardized spacing
pub fn component_section(component_name: &str, description: &str) -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_20))
        .s(Align::new().left())
        .item(
            El::new()
                .child(Text::new(component_name))
                .s(Font::new()
                    .size(FONT_SIZE_32)
                    .weight(FontWeight::Number(FONT_WEIGHT_6))
                    .color_signal(theme().map(|t| match t {
                        Theme::Light => "oklch(15% 0.14 250)", // neutral_9 light
                        Theme::Dark => "oklch(95% 0.14 250)", // neutral_11 dark
                    }))
                )
        )
        .item(small(description))
}

/// Creates a visual separator between component sections
pub fn component_separator() -> impl Element {
    El::new()
        .s(Height::exact(1))
        .s(Width::fill())
        .s(Background::new().color_signal(theme().map(|t| match t {
            Theme::Light => "oklch(90% 0.14 250)", // neutral_3 light
            Theme::Dark => "oklch(20% 0.14 250)", // neutral_4 dark
        })))
        .s(Padding::new().y(SPACING_32))
}

// Theme-aware color functions for consistent styling

fn story_frame_border() -> impl Signal<Item = Border> {
    theme().map(|t| match t {
        Theme::Light => Border::new().width(1).color("oklch(90% 0.14 250)"), // neutral_3 light
        Theme::Dark => Border::new().width(1).color("oklch(20% 0.14 250)"), // neutral_4 dark
    })
}

fn story_frame_background() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(98% 0.01 250)", // primary_1 - subtle blue background
        Theme::Dark => "oklch(20% 0.01 250)", // primary_1 dark - subtle blue background
    })
}

fn story_content_border() -> impl Signal<Item = Border> {
    theme().map(|t| match t {
        Theme::Light => Border::new().width(1).color("oklch(95% 0.14 250)"), // neutral_2 light
        Theme::Dark => Border::new().width(1).color("oklch(15% 0.14 250)"), // neutral_3 dark
    })
}

fn story_content_background() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(95% 0.03 250)", // primary_2 - slightly darker blue background
        Theme::Dark => "oklch(25% 0.03 250)", // primary_2 dark - slightly darker blue background
    })
}

fn story_title_color() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(15% 0.14 250)", // neutral_9 light
        Theme::Dark => "oklch(95% 0.14 250)", // neutral_11 dark
    })
}

fn story_description_color() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(35% 0.14 250)", // neutral_7 light
        Theme::Dark => "oklch(75% 0.14 250)", // neutral_9 dark
    })
}

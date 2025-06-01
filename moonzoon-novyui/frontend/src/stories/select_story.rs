// Select Component Stories
// Complete implementation matching Vue Storybook examples exactly

use zoon::*;
use crate::tokens::*;
use crate::components::*;
use crate::theme::*;

pub fn select_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_24))
        .item(h4("Select Component"))
        .item(small("Complete Select component with dropdown functionality, search, multiple selection, and full Vue Storybook parity."))

        // Default Example
        .item(story_section(
            "Default",
            "Basic select with simple string options.",
            select()
                .placeholder("Select an option...")
                .options(vec![
                    "Option 1",
                    "Option 2",
                    "Option 3",
                    "Option 4",
                    "Option 5",
                ])
                .build()
        ))

        // With Selected Value
        .item(story_section(
            "With Selected Value",
            "Select with a pre-selected value.",
            select()
                .placeholder("Select an option...")
                .selected_value("Option 2")
                .options(vec![
                    "Option 1",
                    "Option 2",
                    "Option 3",
                    "Option 4",
                    "Option 5",
                ])
                .build()
        ))

        // Object Options
        .item(story_section(
            "Object Options",
            "Select using object options with separate values and labels.",
            select()
                .placeholder("Choose a fruit...")
                .options(vec![
                    select_option("apple", "🍎 Apple"),
                    select_option("banana", "🍌 Banana"),
                    select_option("orange", "🍊 Orange"),
                    select_option("grape", "🍇 Grape"),
                    select_option("strawberry", "🍓 Strawberry"),
                ])
                .build()
        ))

        // With Countries
        .item(story_section(
            "With Countries",
            "Select with country options and emojis.",
            select()
                .placeholder("Select a country...")
                .min_width(280) // Wider for country names
                .options(create_country_options())
                .build()
        ))

        // Disabled
        .item(story_section(
            "Disabled",
            "Disabled select component.",
            select()
                .placeholder("Disabled select")
                .selected_value("Option 2")
                .disabled(true)
                .options(vec!["Option 1", "Option 2", "Option 3"])
                .build()
        ))

        // Sizes
        .item(story_section(
            "Sizes",
            "Select components in different sizes: small, medium, and large.",
            Column::new()
                .s(Gap::new().y(SPACING_16))
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .item(
                            El::new()
                                .child(Text::new("Small"))
                                .s(Font::new().size(FONT_SIZE_14).weight(FontWeight::Number(FONT_WEIGHT_5)))
                        )
                        .item(
                            select()
                                .size(SelectSize::Small)
                                .placeholder("Select size...")
                                .options(vec!["Small Option 1", "Small Option 2", "Small Option 3"])
                                .build()
                        )
                )
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .item(
                            El::new()
                                .child(Text::new("Medium (Default)"))
                                .s(Font::new().size(FONT_SIZE_14).weight(FontWeight::Number(FONT_WEIGHT_5)))
                        )
                        .item(
                            select()
                                .size(SelectSize::Medium)
                                .placeholder("Select size...")
                                .options(vec!["Medium Option 1", "Medium Option 2", "Medium Option 3"])
                                .build()
                        )
                )
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .item(
                            El::new()
                                .child(Text::new("Large"))
                                .s(Font::new().size(FONT_SIZE_14).weight(FontWeight::Number(FONT_WEIGHT_5)))
                        )
                        .item(
                            select()
                                .size(SelectSize::Large)
                                .placeholder("Select size...")
                                .options(vec!["Large Option 1", "Large Option 2", "Large Option 3"])
                                .build()
                        )
                )
        ))

        // With Label and Description
        .item(story_section(
            "With Label and Description",
            "Select with proper labeling for enhanced accessibility.",
            select()
                .label("Programming Language")
                .description("Choose your preferred programming language.")
                .placeholder("Select language...")
                .selected_value("rust")
                .min_width(250) // Appropriate width for programming languages
                .options(vec![
                    select_option("javascript", "JavaScript"),
                    select_option("typescript", "TypeScript"),
                    select_option("python", "Python"),
                    select_option("rust", "Rust"),
                    select_option("go", "Go"),
                ])
                .build()
        ))

        // Different Widths
        .item(story_section(
            "Different Widths",
            "Select components with different configurable widths to fit content.",
            Column::new()
                .s(Gap::new().y(SPACING_16))
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .item(
                            El::new()
                                .child(Text::new("Narrow (200px) - For short options"))
                                .s(Font::new().size(FONT_SIZE_14).weight(FontWeight::Number(FONT_WEIGHT_5)))
                        )
                        .item(
                            select()
                                .min_width(200)
                                .placeholder("Size...")
                                .options(vec!["S", "M", "L", "XL"])
                                .build()
                        )
                )
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .item(
                            El::new()
                                .child(Text::new("Medium (320px) - Default width"))
                                .s(Font::new().size(FONT_SIZE_14).weight(FontWeight::Number(FONT_WEIGHT_5)))
                        )
                        .item(
                            select()
                                .placeholder("Select an option...")
                                .options(vec!["Option 1", "Option 2", "Option 3"])
                                .build()
                        )
                )
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .item(
                            El::new()
                                .child(Text::new("Wide (400px) - For longer content"))
                                .s(Font::new().size(FONT_SIZE_14).weight(FontWeight::Number(FONT_WEIGHT_5)))
                        )
                        .item(
                            select()
                                .min_width(400)
                                .placeholder("Select a detailed option...")
                                .options(vec![
                                    "Very detailed option with long description",
                                    "Another comprehensive choice with more text",
                                    "Extended option for demonstration purposes"
                                ])
                                .build()
                        )
                )
        ))


}

// Helper function to create country options
fn create_country_options() -> Vec<SelectOption> {
    vec![
        select_option("us", "🇺🇸 United States"),
        select_option("ca", "🇨🇦 Canada"),
        select_option("uk", "🇬🇧 United Kingdom"),
        select_option("de", "🇩🇪 Germany"),
        select_option("fr", "🇫🇷 France"),
        select_option("jp", "🇯🇵 Japan"),
        select_option("au", "🇦🇺 Australia"),
        select_option("br", "🇧🇷 Brazil"),
        select_option("in", "🇮🇳 India"),
        select_option("cn", "🇨🇳 China"),
    ]
}





// Helper function for creating story sections
fn story_section(title: &str, description: &str, content: impl Element) -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_12))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_4))
                .item(
                    El::new()
                        .child(Text::new(title))
                        .s(Font::new()
                            .size(FONT_SIZE_18)
                            .weight(FontWeight::Number(FONT_WEIGHT_6))
                            .color_signal(theme().map(|t| match t {
                                Theme::Light => "oklch(15% 0.14 250)", // neutral_9 light
                                Theme::Dark => "oklch(95% 0.14 250)", // neutral_11 dark
                            }))
                        )
                )
                .item(
                    El::new()
                        .child(Text::new(description))
                        .s(Font::new()
                            .size(FONT_SIZE_14)
                            .weight(FontWeight::Number(FONT_WEIGHT_4))
                            .color_signal(theme().map(|t| match t {
                                Theme::Light => "oklch(35% 0.14 250)", // neutral_7 light
                                Theme::Dark => "oklch(75% 0.14 250)", // neutral_9 dark
                            }))
                        )
                )
        )
        .item(content)
}

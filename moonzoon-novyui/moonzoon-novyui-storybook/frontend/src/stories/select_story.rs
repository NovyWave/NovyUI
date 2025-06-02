use zoon::*;
use moonzoon_novyui::*;
use crate::stories::template::*;
use crate::responsive_row;

pub fn select_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_32))
        .s(Align::new().left())
        .item(component_section(
            "Select",
            "Complete Select component with dropdown functionality, search, multiple selection, and comprehensive feature set. Essential for forms and data selection with keyboard navigation support."
        ))

        // Default Example
        .item(story_section(
            "Default",
            "Basic select with simple string options.",
            select()
                .placeholder("Select an option...")
                .min_width(280)
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
                .min_width(280)
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
                .min_width(280)
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
                .min_width(280)
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
                .min_width(280)
                .options(vec!["Option 1", "Option 2", "Option 3"])
                .build()
        ))

        // Sizes
        .item(story_section(
            "Sizes",
            "Select components in different sizes: small, medium, and large.",
            responsive_row!()
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .item(small("Small"))
                        .item(
                            select()
                                .size(SelectSize::Small)
                                .placeholder("Select size...")
                                .min_width(200)
                                .options(vec!["Small Option 1", "Small Option 2", "Small Option 3"])
                                .build()
                        )
                )
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .item(small("Medium (Default)"))
                        .item(
                            select()
                                .size(SelectSize::Medium)
                                .placeholder("Select size...")
                                .min_width(200)
                                .options(vec!["Medium Option 1", "Medium Option 2", "Medium Option 3"])
                                .build()
                        )
                )
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .item(small("Large"))
                        .item(
                            select()
                                .size(SelectSize::Large)
                                .placeholder("Select size...")
                                .min_width(200)
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
                .min_width(280)
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
            responsive_row!()
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .item(small("Narrow - For short options"))
                        .item(
                            select()
                                .min_width(120)
                                .placeholder("Size...")
                                .options(vec!["S", "M", "L", "XL"])
                                .build()
                        )
                )
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .item(small("Medium - Default width"))
                        .item(
                            select()
                                .placeholder("Select an option...")
                                .min_width(200)
                                .options(vec!["Option 1", "Option 2", "Option 3"])
                                .build()
                        )
                )
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .item(small("Wide - For longer content"))
                        .item(
                            select()
                                .min_width(200)
                                .placeholder("Select detailed option...")
                                .options(vec![
                                    "Detailed option with description",
                                    "Comprehensive choice with text",
                                    "Extended option for demo"
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

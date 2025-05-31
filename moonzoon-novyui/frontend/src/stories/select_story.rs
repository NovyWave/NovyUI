use zoon::*;
use crate::tokens::*;
use crate::components::*;

pub fn select_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Select"))
        .item(small("Different sizes:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(
                    select()
                        .size(SelectSize::Small)
                        .label("Small Select")
                        .placeholder("Choose option...")
                        .options(vec![
                            select_option("small1", "Small Option 1"),
                            select_option("small2", "Small Option 2"),
                        ])
                        .build()
                )
                .item(
                    select()
                        .size(SelectSize::Medium)
                        .label("Medium Select")
                        .placeholder("Choose option...")
                        .options(vec![
                            select_option("medium1", "Medium Option 1"),
                            select_option("medium2", "Medium Option 2"),
                        ])
                        .build()
                )
                .item(
                    select()
                        .size(SelectSize::Large)
                        .label("Large Select")
                        .placeholder("Choose option...")
                        .options(vec![
                            select_option("large1", "Large Option 1"),
                            select_option("large2", "Large Option 2"),
                        ])
                        .build()
                )
        )
        .item(small("Different states:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(
                    select()
                        .label("Default")
                        .placeholder("Choose an option...")
                        .options(vec![
                            select_option("option1", "Option 1"),
                            select_option("option2", "Option 2"),
                            select_option("option3", "Option 3"),
                        ])
                        .build()
                )
                .item(
                    select()
                        .label("With Selection")
                        .placeholder("Choose language...")
                        .selected_value("rust")
                        .options(vec![
                            select_option("rust", "Rust"),
                            select_option("javascript", "JavaScript"),
                            select_option("python", "Python"),
                            select_option("go", "Go"),
                        ])
                        .build()
                )
                .item(
                    select()
                        .label("Disabled")
                        .placeholder("Disabled select")
                        .disabled(true)
                        .options(vec![
                            select_option("disabled1", "Disabled Option 1"),
                            select_option("disabled2", "Disabled Option 2"),
                        ])
                        .build()
                )
                .item(
                    select()
                        .label("Required")
                        .placeholder("Required select")
                        .required(true)
                        .options(vec![
                            select_option("req1", "Required Option 1"),
                            select_option("req2", "Required Option 2"),
                        ])
                        .build()
                )
                .item(
                    select()
                        .label("Error State")
                        .placeholder("Select with error")
                        .error(true)
                        .options(vec![
                            select_option("error1", "Error Option 1"),
                            select_option("error2", "Error Option 2"),
                        ])
                        .build()
                )
        )
        .item(small("With descriptions:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(
                    select()
                        .label("Country")
                        .description("Select your country of residence")
                        .placeholder("Choose country...")
                        .options(vec![
                            select_option("us", "United States"),
                            select_option("ca", "Canada"),
                            select_option("uk", "United Kingdom"),
                            select_option("de", "Germany"),
                            select_option("fr", "France"),
                        ])
                        .build()
                )
                .item(
                    select()
                        .label("Theme Preference")
                        .description("Choose your preferred color theme")
                        .placeholder("Select theme...")
                        .selected_value("auto")
                        .options(vec![
                            select_option("light", "Light Theme"),
                            select_option("dark", "Dark Theme"),
                            select_option("auto", "Auto (System)"),
                        ])
                        .build()
                )
        )
        .item(small("Interactive examples (click to cycle through options):"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(
                    select()
                        .label("Programming Language")
                        .description("Click to cycle through available languages")
                        .placeholder("Select language...")
                        .options(vec![
                            select_option("rust", "Rust 🦀"),
                            select_option("typescript", "TypeScript"),
                            select_option("python", "Python 🐍"),
                            select_option("go", "Go"),
                            select_option("kotlin", "Kotlin"),
                        ])
                        .build()
                )
                .item(
                    select()
                        .label("Priority Level")
                        .description("Click to cycle through priority levels")
                        .placeholder("Select priority...")
                        .options(vec![
                            select_option("low", "🟢 Low Priority"),
                            select_option("medium", "🟡 Medium Priority"),
                            select_option("high", "🟠 High Priority"),
                            select_option("urgent", "🔴 Urgent"),
                        ])
                        .build()
                )
        )
        .item(small("Form example:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .s(Padding::all(SPACING_16))
                .s(Borders::all_signal(theme().map(|t| match t {
                    Theme::Light => Border::new().width(1).color("oklch(85% 0.14 250)"), // neutral_4 light
                    Theme::Dark => Border::new().width(1).color("oklch(25% 0.14 250)"), // neutral_4 dark
                })))
                .s(RoundedCorners::all(8))
                .s(Background::new().color_signal(theme().map(|t| match t {
                    Theme::Light => "oklch(98% 0.14 250)", // neutral_1 light
                    Theme::Dark => "oklch(8% 0.14 250)", // neutral_2 dark
                })))
                .item(
                    El::new()
                        .child(Text::new("User Preferences"))
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
                    select()
                        .label("Language")
                        .description("Choose your preferred language")
                        .placeholder("Select language...")
                        .required(true)
                        .options(vec![
                            select_option("en", "English"),
                            select_option("es", "Español"),
                            select_option("fr", "Français"),
                            select_option("de", "Deutsch"),
                            select_option("ja", "日本語"),
                        ])
                        .build()
                )
                .item(
                    select()
                        .label("Timezone")
                        .description("Select your timezone")
                        .placeholder("Choose timezone...")
                        .options(vec![
                            select_option("utc", "UTC"),
                            select_option("est", "Eastern Time (EST)"),
                            select_option("pst", "Pacific Time (PST)"),
                            select_option("cet", "Central European Time (CET)"),
                            select_option("jst", "Japan Standard Time (JST)"),
                        ])
                        .build()
                )
                .item(
                    select()
                        .label("Notification Frequency")
                        .description("How often would you like to receive notifications?")
                        .placeholder("Select frequency...")
                        .selected_value("daily")
                        .options(vec![
                            select_option("realtime", "Real-time"),
                            select_option("hourly", "Hourly"),
                            select_option("daily", "Daily"),
                            select_option("weekly", "Weekly"),
                            select_option("never", "Never"),
                        ])
                        .build()
                )
        )
}

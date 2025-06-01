use zoon::*;
use crate::tokens::*;
use crate::components::*;
use crate::components::icon::IconName;
// use crate::components::switch::LabelPosition;


// Default story - Simple unchecked switch (no label)
pub fn switch_default() -> impl Element {
    El::new()
        .s(Align::new().left())
        .child(switch().show_icons(false).build())
}

// Checked story - Simple checked switch (no label)
pub fn switch_checked() -> impl Element {
    El::new()
        .s(Align::new().left())
        .child(switch().checked(true).show_icons(false).build())
}

// With Label story - Switch with label "Enable notifications"
pub fn switch_with_label() -> impl Element {
    El::new()
        .s(Align::new().left())
        .child(
            switch()
                .label("Enable notifications")
                .show_icons(false)
                .build()
        )
}

// With Description story - Checked switch with label and description
pub fn switch_with_description() -> impl Element {
    El::new()
        .s(Align::new().left())
        .child(
            switch()
                .label("Dark mode")
                .description("Switch to dark theme for better viewing in low light conditions.")
                .checked(true)
                .show_icons(false)
                .build()
        )
}

// Disabled story - Disabled unchecked switch with label
pub fn switch_disabled() -> impl Element {
    El::new()
        .s(Align::new().left())
        .child(
            switch()
                .label("Disabled switch")
                .disabled(true)
                .show_icons(false)
                .build()
        )
}

// Disabled Checked story - Disabled checked switch with label
pub fn switch_disabled_checked() -> impl Element {
    El::new()
        .s(Align::new().left())
        .child(
            switch()
                .label("Disabled checked")
                .checked(true)
                .disabled(true)
                .show_icons(false)
                .build()
        )
}

// Left Label story - Switch with label positioned on left side
pub fn switch_left_label() -> impl Element {
    El::new()
        .s(Align::new().left())
        .child(
            switch()
                .label("Label on left")
                .checked(true)
                .show_icons(false)
                // .label_position(LabelPosition::Left)
                .build()
        )
}

// With Icons story - Checked switch with track icons and label
pub fn switch_with_icons() -> impl Element {
    El::new()
        .s(Align::new().left())
        .child(
            switch()
                .label("Visibility toggle")
                .checked(true)
                .show_icons(true)
                .icons(IconName::Eye, IconName::EyeOff)
                .build()
        )
}

// With Thumb Icon story - Unchecked switch with thumb icon and label
pub fn switch_with_thumb_icon() -> impl Element {
    El::new()
        .s(Align::new().left())
        .child(
            switch()
                .label("Settings switch")
                .show_icons(false) // No track icons
                .thumb_icon(IconName::Settings)
                .build()
        )
}

// Sizes story - Three switches showing different sizes with clickable labels
pub fn switch_sizes() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_24))
        .s(Align::new().left())
        .item(
            El::new()
                .s(Align::new().left())
                .child(
                    switch()
                        .size(SwitchSize::Small)
                        .label("Small")
                        .show_icons(false)
                        .build()
                )
        )
        .item(
            El::new()
                .s(Align::new().left())
                .child(
                    switch()
                        .size(SwitchSize::Medium)
                        .label("Medium")
                        .checked(true)
                        .show_icons(false)
                        .build()
                )
        )
        .item(
            El::new()
                .s(Align::new().left())
                .child(
                    switch()
                        .size(SwitchSize::Large)
                        .label("Large")
                        .show_icons(false)
                        .build()
                )
        )
}

// Sizes With Icons story - All three sizes with both track and thumb icons
pub fn switch_sizes_with_icons() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_24))
        .s(Align::new().left())
        .item(
            El::new()
                .s(Align::new().left())
                .child(
                    switch()
                        .size(SwitchSize::Small)
                        .label("Small with track icons")
                        .checked(true)
                        .show_icons(true)
                        .icons(IconName::Eye, IconName::EyeOff)
                        .thumb_icon(IconName::Settings)
                        .build()
                )
        )
        .item(
            El::new()
                .s(Align::new().left())
                .child(
                    switch()
                        .size(SwitchSize::Medium)
                        .label("Medium with thumb icon")
                        .show_icons(true)
                        .icons(IconName::Eye, IconName::EyeOff)
                        .thumb_icon(IconName::Settings)
                        .build()
                )
        )
        .item(
            El::new()
                .s(Align::new().left())
                .child(
                    switch()
                        .size(SwitchSize::Large)
                        .label("Large with both icons")
                        .checked(true)
                        .show_icons(true)
                        .icons(IconName::Eye, IconName::EyeOff)
                        .thumb_icon(IconName::Settings)
                        .build()
                )
        )
}

// Interactive story - Multiple interactive switches with labels and descriptions
pub fn switch_interactive() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_20))
        .s(Align::new().left())
        .s(Width::exact(400))
        .item(
            El::new()
                .s(Align::new().left())
                .child(
                    switch()
                        .label("Push notifications")
                        .description("Receive notifications about important updates and messages.")
                        .checked(true)
                        .show_icons(false)
                        .build()
                )
        )
        .item(
            El::new()
                .s(Align::new().left())
                .child(
                    switch()
                        .label("Dark mode")
                        .description("Switch to dark theme for better viewing in low light.")
                        .show_icons(false)
                        .build()
                )
        )
        .item(
            El::new()
                .s(Align::new().left())
                .child(
                    switch()
                        .label("Auto-save")
                        .description("Automatically save your work every few minutes.")
                        .checked(true)
                        .show_icons(false)
                        .build()
                )
        )
        .item(
            El::new()
                .s(Align::new().left())
                .child(
                    switch()
                        .label("Analytics")
                        .description("Help us improve by sharing anonymous usage data.")
                        .show_icons(false)
                        .build()
                )
        )
}

// Settings Panel story - Settings panel with grouped switches
pub fn switch_settings_panel() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_20))
        .s(Padding::all(SPACING_24))
        .s(Width::exact(400))
        .s(Borders::all_signal(theme().map(|t| match t {
            Theme::Light => Border::new().width(1).color("oklch(85% 0.14 250)"), // neutral_3 light
            Theme::Dark => Border::new().width(1).color("oklch(25% 0.14 250)"), // neutral_4 dark
        })))
        .s(RoundedCorners::all(8))
        .s(Background::new().color_signal(theme().map(|t| match t {
            Theme::Light => "oklch(98% 0.01 250)", // primary_1 - subtle blue background
            Theme::Dark => "oklch(20% 0.01 250)", // primary_1 dark - subtle blue background
        })))
        .item(
            El::new()
                .child(Text::new("Settings"))
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
            Column::new()
                .s(Gap::new().y(SPACING_16))
                .s(Align::new().left())
                .item(
                    El::new()
                        .child(Text::new("Notifications"))
                        .s(Font::new()
                            .size(FONT_SIZE_16)
                            .weight(FontWeight::Number(FONT_WEIGHT_6))
                            .color_signal(theme().map(|t| match t {
                                Theme::Light => "oklch(15% 0.14 250)", // neutral_9 light
                                Theme::Dark => "oklch(95% 0.14 250)", // neutral_11 dark
                            }))
                        )
                )
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_16))
                        .s(Align::new().left())
                        .item(
                            El::new()
                                .s(Align::new().left())
                                .child(
                                    switch()
                                        .label("Email notifications")
                                        .description("Receive notifications via email")
                                        .checked(true)
                                        .show_icons(false)
                                        .build()
                                )
                        )
                        .item(
                            El::new()
                                .s(Align::new().left())
                                .child(
                                    switch()
                                        .label("Push notifications")
                                        .description("Receive push notifications on your device")
                                        .show_icons(false)
                                        .build()
                                )
                        )
                        .item(
                            El::new()
                                .s(Align::new().left())
                                .child(
                                    switch()
                                        .label("SMS notifications")
                                        .description("Receive notifications via text message")
                                        .show_icons(false)
                                        .build()
                                )
                        )
                        .item(
                            El::new()
                                .s(Align::new().left())
                                .child(
                                    switch()
                                        .label("Marketing emails")
                                        .description("Receive promotional and marketing emails")
                                        .show_icons(false)
                                        .build()
                                )
                        )
                )
        )
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_16))
                .s(Align::new().left())
                .item(
                    El::new()
                        .child(Text::new("Security & Privacy"))
                        .s(Font::new()
                            .size(FONT_SIZE_16)
                            .weight(FontWeight::Number(FONT_WEIGHT_6))
                            .color_signal(theme().map(|t| match t {
                                Theme::Light => "oklch(15% 0.14 250)", // neutral_9 light
                                Theme::Dark => "oklch(95% 0.14 250)", // neutral_11 dark
                            }))
                        )
                )
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_16))
                        .s(Align::new().left())
                        .item(
                            El::new()
                                .s(Align::new().left())
                                .child(
                                    switch()
                                        .label("Two-factor authentication")
                                        .description("Add an extra layer of security to your account")
                                        .checked(true)
                                        .show_icons(false)
                                        .build()
                                )
                        )
                        .item(
                            El::new()
                                .s(Align::new().left())
                                .child(
                                    switch()
                                        .label("Public profile")
                                        .description("Make your profile visible to other users")
                                        .show_icons(false)
                                        .build()
                                )
                        )
                )
        )
}

// Form Integration story - Form with switches and validation
// Note: This is a simplified version since current Switch component doesn't support reactive signals
pub fn switch_form_integration() -> impl Element {

    Column::new()
        .s(Gap::new().y(SPACING_20))
        .s(Padding::all(SPACING_24))
        .s(Width::exact(400))
        .s(Borders::all_signal(theme().map(|t| match t {
            Theme::Light => Border::new().width(1).color("oklch(85% 0.14 250)"), // neutral_3 light
            Theme::Dark => Border::new().width(1).color("oklch(25% 0.14 250)"), // neutral_4 dark
        })))
        .s(RoundedCorners::all(8))
        .s(Background::new().color_signal(theme().map(|t| match t {
            Theme::Light => "oklch(98% 0.01 250)", // primary_1 - subtle blue background
            Theme::Dark => "oklch(20% 0.01 250)", // primary_1 dark - subtle blue background
        })))
        .item(
            El::new()
                .child(Text::new("Account Setup"))
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
            Column::new()
                .s(Gap::new().y(SPACING_16))
                .s(Align::new().left())
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_8))
                        .s(Align::new().left())
                        .item(
                            El::new()
                                .child(Text::new("Email"))
                                .s(Font::new()
                                    .size(FONT_SIZE_14)
                                    .weight(FontWeight::Number(FONT_WEIGHT_5))
                                    .color_signal(theme().map(|t| match t {
                                        Theme::Light => "oklch(15% 0.14 250)", // neutral_9 light
                                        Theme::Dark => "oklch(95% 0.14 250)", // neutral_11 dark
                                    }))
                                )
                        )
                        .item(
                            input()
                                .placeholder("Enter your email")
                                .build()
                        )
                )
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_8))
                        .s(Align::new().left())
                        .item(
                            El::new()
                                .child(Text::new("Password"))
                                .s(Font::new()
                                    .size(FONT_SIZE_14)
                                    .weight(FontWeight::Number(FONT_WEIGHT_5))
                                    .color_signal(theme().map(|t| match t {
                                        Theme::Light => "oklch(15% 0.14 250)", // neutral_9 light
                                        Theme::Dark => "oklch(95% 0.14 250)", // neutral_11 dark
                                    }))
                                )
                        )
                        .item(
                            input()
                                .placeholder("Enter your password")
                                .build()
                        )
                )
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_16))
                        .s(Align::new().left())
                        .item(
                            El::new()
                                .s(Align::new().left())
                                .child(
                                    switch()
                                        .label("I agree to the Terms of Service")
                                        .description("Required to create an account")
                                        .required(true)
                                        .show_icons(false)
                                        .build()
                                )
                        )
                        .item(
                            El::new()
                                .s(Align::new().left())
                                .child(
                                    switch()
                                        .label("Subscribe to newsletter")
                                        .description("Get updates about new features and tips")
                                        .checked(true)
                                        .show_icons(false)
                                        .build()
                                )
                        )
                        .item(
                            El::new()
                                .s(Align::new().left())
                                .child(
                                    switch()
                                        .label("Enable notifications")
                                        .description("Receive important account notifications")
                                        .show_icons(false)
                                        .build()
                                )
                        )
                )
                .item(
                    button()
                        .label("Create Account")
                        .variant(ButtonVariant::Primary)
                        .size(ButtonSize::Medium)
                        .disabled(true) // Disabled until form is valid
                        .on_press(|| {
                            // Handle form submission
                        })
                        .build()
                )
        )
}

// Main showcase function that displays all Switch stories
pub fn switch_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_32))
        .s(Align::new().left())
        .item(h4("Switch Component Stories"))
        .item(small("Interactive toggle switches with customizable sizes, icons, labels, and states. Perfect for settings panels, forms, and user preferences."))

        // Basic stories
        .item(story_section("Default", "Simple unchecked switch", switch_default()))
        .item(story_section("Checked", "Simple checked switch", switch_checked()))
        .item(story_section("With Label", "Switch with label text", switch_with_label()))
        .item(story_section("With Description", "Switch with label and description", switch_with_description()))

        // State stories
        .item(story_section("Disabled", "Disabled unchecked switch", switch_disabled()))
        .item(story_section("Disabled Checked", "Disabled checked switch", switch_disabled_checked()))

        // Layout and styling stories
        .item(story_section("Left Label", "Switch with label positioned on the left side", switch_left_label()))
        .item(story_section("With Icons", "Switch with track icons", switch_with_icons()))
        .item(story_section("With Thumb Icon", "Switch with thumb icon (simulated)", switch_with_thumb_icon()))
        .item(story_section("Sizes", "Different switch sizes", switch_sizes()))
        .item(story_section("Sizes With Icons", "All switch sizes with icons", switch_sizes_with_icons()))

        // Complex stories
        .item(story_section("Interactive", "Multiple interactive switches", switch_interactive()))
        .item(story_section("Settings Panel", "Grouped switches in settings panel", switch_settings_panel()))
        .item(story_section("Form Integration", "Switches in form context", switch_form_integration()))
}

fn story_section(title: &str, description: &str, content: impl Element) -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_12))
        .s(Align::new().left())
        .s(Padding::all(SPACING_16))
        .s(Borders::all_signal(theme().map(|t| match t {
            Theme::Light => Border::new().width(1).color("oklch(90% 0.14 250)"), // neutral_3 light
            Theme::Dark => Border::new().width(1).color("oklch(20% 0.14 250)"), // neutral_4 dark
        })))
        .s(RoundedCorners::all(8))
        .s(Background::new().color_signal(theme().map(|t| match t {
            Theme::Light => "oklch(98% 0.01 250)", // primary_1 - subtle blue background
            Theme::Dark => "oklch(20% 0.01 250)", // primary_1 dark - subtle blue background
        })))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_4))
                .s(Align::new().left())
                .item(
                    El::new()
                        .child(Text::new(title))
                        .s(Font::new()
                            .size(FONT_SIZE_16)
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
        .item(
            El::new()
                .s(Padding::all(SPACING_16))
                .s(Borders::all_signal(theme().map(|t| match t {
                    Theme::Light => Border::new().width(1).color("oklch(95% 0.14 250)"), // neutral_2 light
                    Theme::Dark => Border::new().width(1).color("oklch(15% 0.14 250)"), // neutral_3 dark
                })))
                .s(RoundedCorners::all(6))
                .s(Background::new().color_signal(theme().map(|t| match t {
                    Theme::Light => "oklch(95% 0.03 250)", // primary_2 - slightly darker blue background
                    Theme::Dark => "oklch(25% 0.03 250)", // primary_2 dark - slightly darker blue background
                })))
                .child(content)
        )
}

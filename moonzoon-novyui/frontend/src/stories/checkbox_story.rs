use zoon::*;
use crate::tokens::*;
use crate::components::*;

pub fn checkbox_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Checkbox"))
        .item(small("Different sizes:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_16))
                .s(Align::new().left())
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .s(Align::new().left())
                        .item(checkbox().size(CheckboxSize::Small).label("Small").build())
                        .item(small("20px"))
                )
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .s(Align::new().left())
                        .item(checkbox().size(CheckboxSize::Medium).label("Medium").build())
                        .item(small("24px"))
                )
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .s(Align::new().left())
                        .item(checkbox().size(CheckboxSize::Large).label("Large").build())
                        .item(small("28px"))
                )
        )
        .item(small("Different states:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .s(Align::new().left())
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(checkbox().label("Unchecked").build())
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(checkbox().label("Checked").checked(true).build())
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(checkbox().label("Indeterminate").state(CheckboxState::Indeterminate).build())
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(checkbox().label("Disabled unchecked").disabled(true).build())
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(checkbox().label("Disabled checked").checked(true).disabled(true).build())
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(checkbox().label("Disabled indeterminate").state(CheckboxState::Indeterminate).disabled(true).build())
                )
        )
        .item(small("With descriptions:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .s(Align::new().left())
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            checkbox()
                                .label("Marketing emails")
                                .description("Receive updates about new features and promotions")
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            checkbox()
                                .label("Security notifications")
                                .description("Get notified about important security updates")
                                .checked(true)
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            checkbox()
                                .label("Newsletter subscription")
                                .description("Weekly digest of the latest news and articles")
                                .disabled(true)
                                .build()
                        )
                )
        )
        .item(small("Required and error states:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .s(Align::new().left())
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            checkbox()
                                .label("Terms and Conditions")
                                .description("You must accept the terms and conditions to continue")
                                .required(true)
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            checkbox()
                                .label("Privacy Policy")
                                .description("Please review and accept our privacy policy")
                                .required(true)
                                .error(true)
                                .build()
                        )
                )
        )
        .item(small("Form example:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .s(Align::new().left())
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
                        .child(Text::new("Account Preferences"))
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
                        .s(Align::new().left())
                        .child(
                            checkbox()
                                .label("Email notifications")
                                .description("Receive email notifications for important updates")
                                .checked(true)
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            checkbox()
                                .label("SMS notifications")
                                .description("Receive SMS notifications for urgent matters")
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            checkbox()
                                .label("Push notifications")
                                .description("Receive push notifications on your mobile device")
                                .checked(true)
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            checkbox()
                                .label("Marketing communications")
                                .description("Receive promotional emails and special offers")
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            checkbox()
                                .label("Data sharing")
                                .description("Allow anonymous usage data to help improve our service")
                                .state(CheckboxState::Indeterminate)
                                .build()
                        )
                )
        )
        .item(small("Select All Pattern:"))
        .item(select_all_pattern_example())
}

fn select_all_pattern_example() -> impl Element {
    // For now, create a simple static example to demonstrate the indeterminate state
    // TODO: Implement full signal-based functionality later

    Column::new()
        .s(Gap::new().y(SPACING_12))
        .s(Align::new().left())
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
                .child(Text::new("Select All Pattern"))
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
                .child(Text::new("Select all pattern with indeterminate state."))
                .s(Font::new()
                    .size(FONT_SIZE_14)
                    .color_signal(theme().map(|t| match t {
                        Theme::Light => "oklch(45% 0.14 250)", // neutral_5 light
                        Theme::Dark => "oklch(55% 0.14 250)", // neutral_5 dark
                    }))
                )
        )
        .item(
            // Select All checkbox (indeterminate state)
            El::new()
                .s(Align::new().left())
                .child(
                    CheckboxBuilder::new()
                        .label("Select All")
                        .state(CheckboxState::Indeterminate)
                        .build()
                )
        )
        .item(
            // Individual items
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .s(Align::new().left())
                .s(Padding::new().left(SPACING_16)) // Indent the individual items
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            CheckboxBuilder::new()
                                .label("Item 1")
                                .checked(true)
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            CheckboxBuilder::new()
                                .label("Item 2")
                                .checked(false)
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            CheckboxBuilder::new()
                                .label("Item 3")
                                .checked(true)
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            CheckboxBuilder::new()
                                .label("Item 4")
                                .checked(false)
                                .build()
                        )
                )
        )
        .item(
            // Selected count display
            El::new()
                .child(Text::new("Selected: 2 items"))
                .s(Font::new()
                    .size(FONT_SIZE_14)
                    .weight(FontWeight::Number(FONT_WEIGHT_5))
                    .color_signal(theme().map(|t| match t {
                        Theme::Light => "oklch(35% 0.14 250)", // neutral_6 light
                        Theme::Dark => "oklch(65% 0.14 250)", // neutral_6 dark
                    }))
                )
        )
}

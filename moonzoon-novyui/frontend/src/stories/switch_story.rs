use zoon::*;
use crate::tokens::*;
use crate::components::*;

pub fn switch_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Switch"))
        .item(small("Different sizes:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_16))
                .s(Align::new().left())
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .s(Align::new().left())
                        .item(switch().size(SwitchSize::Small).label("Small").build())
                        .item(small("32x20px"))
                )
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .s(Align::new().left())
                        .item(switch().size(SwitchSize::Medium).label("Medium").build())
                        .item(small("44x24px"))
                )
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .s(Align::new().left())
                        .item(switch().size(SwitchSize::Large).label("Large").build())
                        .item(small("52x28px"))
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
                        .child(switch().label("Unchecked").build())
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(switch().label("Checked").checked(true).build())
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(switch().label("Disabled unchecked").disabled(true).build())
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(switch().label("Disabled checked").checked(true).disabled(true).build())
                )
        )
        .item(small("With and without icons:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .s(Align::new().left())
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(switch().label("With icons (default)").checked(true).build())
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(switch().label("Without icons").checked(true).show_icons(false).build())
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
                            switch()
                                .label("Dark mode")
                                .description("Switch between light and dark themes")
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            switch()
                                .label("Notifications")
                                .description("Receive push notifications for important updates")
                                .checked(true)
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            switch()
                                .label("Auto-save")
                                .description("Automatically save your work every few minutes")
                                .disabled(true)
                                .build()
                        )
                )
        )
        .item(small("Required switches:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .s(Align::new().left())
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            switch()
                                .label("Terms and Conditions")
                                .description("You must accept the terms to continue")
                                .required(true)
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            switch()
                                .label("Privacy Policy")
                                .description("Accept our privacy policy")
                                .required(true)
                                .checked(true)
                                .build()
                        )
                )
        )
        .item(small("Settings panel example:"))
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
                        .child(Text::new("Notification Settings"))
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
                            switch()
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
                            switch()
                                .label("SMS notifications")
                                .description("Receive SMS notifications for urgent matters")
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            switch()
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
                            switch()
                                .label("Marketing emails")
                                .description("Receive promotional emails and special offers")
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            switch()
                                .label("Weekly digest")
                                .description("Get a weekly summary of your activity")
                                .checked(true)
                                .show_icons(false)
                                .build()
                        )
                )
        )
}

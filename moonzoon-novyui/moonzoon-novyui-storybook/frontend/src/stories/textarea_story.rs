use zoon::*;
use moonzoon_novyui::*;



pub fn textarea_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("TextArea"))
        .item(small("Different sizes:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(textarea().size(TextAreaSize::Small).placeholder("Small textarea").build())
                .item(textarea().size(TextAreaSize::Medium).placeholder("Medium textarea").build())
                .item(textarea().size(TextAreaSize::Large).placeholder("Large textarea").build())
        )
        .item(small("Different states:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(textarea().placeholder("Enter your message...").build())
                .item(textarea().value("This textarea has some content").build())
                .item(textarea().disabled(true).placeholder("Disabled textarea").build())
                .item(textarea().readonly(true).value("Read-only textarea content").build())
                .item(textarea().required(true).placeholder("Required textarea").build())
        )
        .item(small("With labels:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(
                    textarea()
                        .label("Message")
                        .placeholder("Enter your message...")
                        .required(true)
                        .build()
                )
                .item(
                    textarea()
                        .label("Description")
                        .placeholder("Optional description...")
                        .value("This field has some content")
                        .build()
                )
        )
        .item(small("Error state:"))
        .item(
            textarea()
                .label("Feedback")
                .placeholder("Please provide feedback...")
                .value("This content has an error")
                .error_message("This field contains invalid content")
                .build()
        )
        .item(small("Different row counts:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(
                    textarea()
                        .label("Short message")
                        .placeholder("Brief message...")
                        .rows(2)
                        .build()
                )
                .item(
                    textarea()
                        .label("Long description")
                        .placeholder("Detailed description...")
                        .rows(6)
                        .build()
                )
        )
        .item(small("Form example:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(
                    textarea()
                        .label("Comments")
                        .placeholder("Please share your thoughts...")
                        .required(true)
                        .rows(4)
                        .build()
                )
                .item(
                    textarea()
                        .label("Additional notes")
                        .placeholder("Any additional information...")
                        .value("This field has some existing content that can be edited.")
                        .rows(3)
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
                        .s(Font::new()
                            .size(FONT_SIZE_18)
                            .weight(FontWeight::Number(FONT_WEIGHT_6))
                            .color_signal(theme().map(|t| match t {
                                Theme::Light => "oklch(15% 0.14 250)", // neutral_9 light
                                Theme::Dark => "oklch(95% 0.14 250)", // neutral_11 dark
                            }))
                        )
                        .child("Contact Form")
                )
                .item(
                    textarea()
                        .label("Subject")
                        .placeholder("Enter subject...")
                        .required(true)
                        .rows(2)
                        .build()
                )
                .item(
                    textarea()
                        .label("Message")
                        .placeholder("Enter your message...")
                        .required(true)
                        .rows(6)
                        .build()
                )
                .item(
                    textarea()
                        .label("Additional Notes")
                        .placeholder("Any additional information (optional)...")
                        .size(TextAreaSize::Small)
                        .rows(3)
                        .build()
                )
        )
        .item(small("Interactive example:"))
        .item(
            textarea()
                .placeholder("Type something here...")
                .build()
        )
}

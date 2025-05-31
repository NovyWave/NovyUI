use zoon::*;
use crate::tokens::*;
use crate::components::*;

pub fn pattern_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Patterns"))
        .item(small("Form patterns:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .s(Width::exact(400))
                .item(
                    input()
                        .label("Email")
                        .placeholder("Enter your email...")
                        .required(true)
                        .left_icon(IconName::Mail)
                        .input_kind(InputKind::Email)
                        .build()
                )
                .item(
                    input()
                        .label("Password")
                        .placeholder("Enter your password...")
                        .required(true)
                        .left_icon(IconName::Lock)
                        .input_kind(InputKind::Password)
                        .build()
                )
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_12))
                        .item(
                            button()
                                .label("Sign In")
                                .variant(ButtonVariant::Primary)
                                .on_press(|| {})
                                .build()
                        )
                        .item(
                            button()
                                .label("Cancel")
                                .variant(ButtonVariant::Ghost)
                                .on_press(|| {})
                                .build()
                        )
                )
        )
        .item(small("Status indicators:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .s(Align::new().center_y())
                        .item(badge("Online").variant(BadgeVariant::Success).left_icon(IconName::Check).build())
                        .item(small("User is online"))
                )
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .s(Align::new().center_y())
                        .item(badge("Offline").variant(BadgeVariant::Default).left_icon(IconName::X).build())
                        .item(small("User is offline"))
                )
        )
        .item(small("Interactive elements:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_8))
                        .item(small("Switches:"))
                        .item(
                            Row::new()
                                .s(Gap::new().x(SPACING_8))
                                .s(Align::new().center_y())
                                .item(switch().checked(true).build())
                                .item(small("Enable notifications"))
                        )
                        .item(
                            Row::new()
                                .s(Gap::new().x(SPACING_8))
                                .s(Align::new().center_y())
                                .item(switch().checked(false).build())
                                .item(small("Dark mode"))
                        )
                )
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_8))
                        .item(small("Checkboxes:"))
                        .item(
                            Row::new()
                                .s(Gap::new().x(SPACING_8))
                                .s(Align::new().center_y())
                                .item(checkbox().checked(true).build())
                                .item(small("Accept terms"))
                        )
                        .item(
                            Row::new()
                                .s(Gap::new().x(SPACING_8))
                                .s(Align::new().center_y())
                                .item(checkbox().checked(false).build())
                                .item(small("Subscribe to newsletter"))
                        )
                )
        )
}

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
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().center_y())
                .item(checkbox().size(CheckboxSize::Small).build())
                .item(checkbox().size(CheckboxSize::Medium).build())
                .item(checkbox().size(CheckboxSize::Large).build())
        )
        .item(small("Different states:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .item(checkbox().checked(false).build())
                .item(checkbox().checked(true).build())
                .item(checkbox().disabled(true).build())
                .item(checkbox().checked(true).disabled(true).build())
        )
        .item(small("With labels:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .item(checkbox().label("Accept terms and conditions").build())
                .item(checkbox().label("Subscribe to newsletter").checked(true).build())
                .item(checkbox().label("Disabled option").disabled(true).build())
        )
        .item(small("Interactive (click to toggle):"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .item(checkbox().label("Click me!").on_change(|_checked| {
                    // In a real app, you'd update state here
                }).build())
                .item(checkbox().label("Or click me!").checked(true).on_change(|_checked| {
                    // In a real app, you'd update state here
                }).build())
        )
}

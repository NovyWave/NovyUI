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
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().center_y())
                .item(switch().size(SwitchSize::Small).build())
                .item(switch().size(SwitchSize::Medium).build())
                .item(switch().size(SwitchSize::Large).build())
        )
        .item(small("Different states:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().center_y())
                .item(switch().checked(false).build())
                .item(switch().checked(true).build())
                .item(switch().disabled(true).build())
                .item(switch().checked(true).disabled(true).build())
        )
        .item(small("Interactive (click to toggle):"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().center_y())
                .item(switch().on_change(|_checked| {
                    // In a real app, you'd update state here
                }).build())
                .item(switch().checked(true).on_change(|_checked| {
                    // In a real app, you'd update state here
                }).build())
        )
}

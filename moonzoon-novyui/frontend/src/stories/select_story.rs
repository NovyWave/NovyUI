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
                .item(select().size(SelectSize::Small).placeholder("Small select").build())
                .item(select().size(SelectSize::Medium).placeholder("Medium select").build())
                .item(select().size(SelectSize::Large).placeholder("Large select").build())
        )
        .item(small("Different states:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(select().placeholder("Choose an option...").build())
                .item(select().placeholder("Language").selected_value("Rust").build())
                .item(select().placeholder("Disabled select").disabled(true).build())
                .item(select().placeholder("Required select").required(true).build())
        )
        .item(small("Interactive (click to simulate selection):"))
        .item(
            select()
                .placeholder("Click to select...")
                .on_change(|value| {
                    // In a real app, you'd update state here
                })
                .build()
        )
}

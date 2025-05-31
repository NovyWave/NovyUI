use zoon::*;
use crate::tokens::*;
use crate::components::*;

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
                .item(textarea().required(true).placeholder("Required textarea").build())
        )
        .item(small("Different row counts:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(textarea().rows(2).placeholder("2 rows").build())
                .item(textarea().rows(4).placeholder("4 rows").build())
                .item(textarea().rows(6).placeholder("6 rows").build())
        )
        .item(small("Interactive (click to simulate input):"))
        .item(
            textarea()
                .placeholder("Click me to simulate input")
                .on_change(|_text| {
                    // In a real app, you'd update state here
                })
                .build()
        )
}

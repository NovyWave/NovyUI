use zoon::*;
use crate::tokens::*;
use crate::components::*;

pub fn icon_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Icons"))
        .item(small("Different sizes:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().left())
                .item(star().size(IconSize::Small).build())
                .item(star().size(IconSize::Medium).build())
                .item(star().size(IconSize::Large).build())
                .item(star().size(IconSize::XLarge).build())
        )
        .item(small("Different colors:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().left())
                .item(heart().color(IconColor::Primary).build())
                .item(heart().color(IconColor::Secondary).build())
                .item(heart().color(IconColor::Success).build())
                .item(heart().color(IconColor::Error).build())
                .item(heart().color(IconColor::Muted).build())
        )
        .item(small("Common icons:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().left())
                .item(search().build())
                .item(x().build())
                .item(check().build())
                .item(eye().build())
                .item(eye_off().build())
        )
        .item(small("Chevron icons:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().left())
                .item(chevron_up().build())
                .item(chevron_down().build())
                .item(chevron_left().build())
                .item(chevron_right().build())
        )
        .item(small("Custom color:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().left())
                .item(star().color(IconColor::Custom("#ff8a80")).build())  // Light red
                .item(star().color(IconColor::Custom("#80cbc4")).build())  // Light teal
                .item(star().color(IconColor::Custom("#81c784")).build())  // Light green
                .item(star().color(IconColor::Custom("#ffb74d")).build())  // Light orange
        )
        .item(small("Usage in context:"))
        .item(
            El::new()
                .s(Align::new().left())
                .child(
                    button()
                        .variant(ButtonVariant::Outline)
                        .size(ButtonSize::Medium)
                        .left_icon("search")
                        .label("Search for items")
                        .build()
                )
        )
}

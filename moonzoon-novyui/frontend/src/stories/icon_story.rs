use zoon::*;
use crate::tokens::*;
use crate::components::*;
use crate::stories::template::*;

pub fn icon_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_32))
        .s(Align::new().left())
        .item(component_section(
            "Icon",
            "Scalable vector icons with multiple sizes, colors, and semantic variants. Essential for visual communication and interface clarity throughout the application."
        ))

        // Size stories
        .item(story_section("Sizes", "Four available icon sizes for different interface contexts",
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().left())
                .item(star().size(IconSize::Small).build())
                .item(star().size(IconSize::Medium).build())
                .item(star().size(IconSize::Large).build())
                .item(star().size(IconSize::XLarge).build())
        ))

        // Color stories
        .item(story_section("Colors", "Semantic color variants for different contexts and states",
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().left())
                .item(heart().color(IconColor::Primary).build())
                .item(heart().color(IconColor::Secondary).build())
                .item(heart().color(IconColor::Success).build())
                .item(heart().color(IconColor::Error).build())
                .item(heart().color(IconColor::Muted).build())
        ))

        // Common icons stories
        .item(story_section("Common Icons", "Frequently used icons for basic interface actions",
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().left())
                .item(search().build())
                .item(x().build())
                .item(check().build())
                .item(eye().build())
                .item(eye_off().build())
        ))

        // Chevron stories
        .item(story_section("Chevron Icons", "Directional icons for navigation and disclosure",
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().left())
                .item(chevron_up().build())
                .item(chevron_down().build())
                .item(chevron_left().build())
                .item(chevron_right().build())
        ))

        // Custom color stories
        .item(story_section("Custom Colors", "Icons with custom color values for special cases",
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().left())
                .item(star().color(IconColor::Custom("#ff8a80")).build())  // Light red
                .item(star().color(IconColor::Custom("#80cbc4")).build())  // Light teal
                .item(star().color(IconColor::Custom("#81c784")).build())  // Light green
                .item(star().color(IconColor::Custom("#ffb74d")).build())  // Light orange
        ))

        // Usage in context stories
        .item(story_section("Usage in Context", "Icons integrated within other components",
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
        ))
}

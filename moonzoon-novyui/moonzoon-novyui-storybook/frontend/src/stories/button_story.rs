use zoon::*;
use moonzoon_novyui::*;
use crate::stories::template::*;
use crate::responsive_row;

pub fn button_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_32))
        .s(Align::new().left())
        .item(component_section(
            "Button",
            "Interactive buttons with multiple variants, sizes, states, and icon support. Essential for user actions, forms, and navigation throughout the interface."
        ))

        // Basic variant stories
        .item(story_section("Basic Variants", "Primary button variants for different contexts",
            responsive_row!()
                .item(
                    button()
                        .label("Primary")
                        .variant(ButtonVariant::Primary)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Secondary")
                        .variant(ButtonVariant::Secondary)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Outline")
                        .variant(ButtonVariant::Outline)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Ghost")
                        .variant(ButtonVariant::Ghost)
                        .on_press(|| {})
                        .build()
                )
        ))

        // Additional variant stories
        .item(story_section("Additional Variants", "Specialized button variants for specific use cases",
            responsive_row!()
                .item(
                    button()
                        .label("Link")
                        .variant(ButtonVariant::Link)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Destructive")
                        .variant(ButtonVariant::Destructive)
                        .on_press(|| {})
                        .build()
                )
        ))

        // Size stories
        .item(story_section("Sizes", "Three available sizes for different interface contexts",
            responsive_row!()
                .item(
                    button()
                        .label("Small")
                        .size(ButtonSize::Small)
                        .variant(ButtonVariant::Primary)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Medium")
                        .size(ButtonSize::Medium)
                        .variant(ButtonVariant::Primary)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Large")
                        .size(ButtonSize::Large)
                        .variant(ButtonVariant::Primary)
                        .on_press(|| {})
                        .build()
                )
        ))

        // Icon stories
        .item(story_section("With Icons", "Buttons enhanced with left and right icons",
            responsive_row!()
                .item(
                    button()
                        .label("Save")
                        .left_icon("check")
                        .variant(ButtonVariant::Primary)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Delete")
                        .left_icon("x")
                        .variant(ButtonVariant::Destructive)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Next")
                        .right_icon("chevron-right")
                        .variant(ButtonVariant::Secondary)
                        .on_press(|| {})
                        .build()
                )
        ))

        // Disabled stories
        .item(story_section("Disabled", "Buttons in disabled state across different variants",
            responsive_row!()
                .item(
                    button()
                        .label("Disabled Primary")
                        .variant(ButtonVariant::Primary)
                        .disabled(true)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Disabled Secondary")
                        .variant(ButtonVariant::Secondary)
                        .disabled(true)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Disabled Outline")
                        .variant(ButtonVariant::Outline)
                        .disabled(true)
                        .on_press(|| {})
                        .build()
                )
        ))

        // Loading stories
        .item(story_section("Loading", "Buttons showing loading states with spinners",
            responsive_row!()
                .item(
                    button()
                        .label("Loading...")
                        .variant(ButtonVariant::Primary)
                        .loading(true)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Saving")
                        .left_icon("check")
                        .variant(ButtonVariant::Secondary)
                        .loading(true)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .variant(ButtonVariant::Ghost)
                        .loading(true)
                        .on_press(|| {})
                        .build()
                )
        ))

        // Icon-only stories
        .item(story_section("Icon Only", "Compact buttons with only icons for toolbar usage",
            responsive_row!()
                .item(
                    button()
                        .left_icon("search")
                        .variant(ButtonVariant::Ghost)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .left_icon("settings")
                        .variant(ButtonVariant::Outline)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .left_icon("plus")
                        .variant(ButtonVariant::Primary)
                        .on_press(|| {})
                        .build()
                )
        ))
}

use zoon::*;
use crate::tokens::*;
use crate::components::*;

fn removable_badges_demo() -> impl Element {
    use zoon::*;

    // Create mutable state for each badge
    let badge1_visible = Mutable::new(true);
    let badge2_visible = Mutable::new(true);
    let badge3_visible = Mutable::new(true);

    Row::new()
        .s(Gap::new().x(SPACING_8))
        .s(Align::new().left())
        .item_signal(badge1_visible.signal().map(clone!((badge1_visible) move |visible| {
            if visible {
                Some(
                    badge("Removable")
                        .variant(BadgeVariant::Primary)
                        .removable()
                        .on_remove(clone!((badge1_visible) move || {
                            badge1_visible.set(false);
                        }))
                        .build()
                )
            } else {
                None
            }
        })))
        .item_signal(badge2_visible.signal().map(clone!((badge2_visible) move |visible| {
            if visible {
                Some(
                    badge("Tag")
                        .variant(BadgeVariant::Secondary)
                        .removable()
                        .on_remove(clone!((badge2_visible) move || {
                            badge2_visible.set(false);
                        }))
                        .build()
                )
            } else {
                None
            }
        })))
        .item_signal(badge3_visible.signal().map(clone!((badge3_visible) move |visible| {
            if visible {
                Some(
                    badge("Filter")
                        .variant(BadgeVariant::Outline)
                        .removable()
                        .on_remove(clone!((badge3_visible) move || {
                            badge3_visible.set(false);
                        }))
                        .build()
                )
            } else {
                None
            }
        })))
}

pub fn badge_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Badge"))
        .item(small("Different variants:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_8))
                .s(Align::new().left())
                .item(badge("Default").variant(BadgeVariant::Default).build())
                .item(badge("Primary").variant(BadgeVariant::Primary).build())
                .item(badge("Secondary").variant(BadgeVariant::Secondary).build())
                .item(badge("Success").variant(BadgeVariant::Success).build())
                .item(badge("Warning").variant(BadgeVariant::Warning).build())
                .item(badge("Error").variant(BadgeVariant::Error).build())
                .item(badge("Outline").variant(BadgeVariant::Outline).build())
        )
        .item(small("Different sizes:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_8))
                .s(Align::new().left())
                .item(badge("Small").size(BadgeSize::Small).variant(BadgeVariant::Primary).build())
                .item(badge("Medium").size(BadgeSize::Medium).variant(BadgeVariant::Primary).build())
                .item(badge("Large").size(BadgeSize::Large).variant(BadgeVariant::Primary).build())
        )
        .item(small("With icons:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_8))
                .s(Align::new().left())
                .item(badge("Success").variant(BadgeVariant::Success).left_icon(IconName::Check).build())
                .item(badge("Warning").variant(BadgeVariant::Warning).left_icon(IconName::TriangleAlert).build())
                .item(badge("Error").variant(BadgeVariant::Error).left_icon(IconName::X).build())
                .item(badge("With Icons").variant(BadgeVariant::Primary).left_icon(IconName::Star).right_icon(IconName::ChevronRight).build())
        )
        .item(small("Removable badges:"))
        .item(removable_badges_demo())
        .item(small("Status badges:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_8))
                .s(Align::new().left())
                .item(badge("Completed").variant(BadgeVariant::Success).left_icon(IconName::Check).build())
                .item(badge("Warning").variant(BadgeVariant::Warning).left_icon(IconName::TriangleAlert).build())
                .item(badge("Error").variant(BadgeVariant::Error).left_icon(IconName::CircleAlert).build())
                .item(badge("Info").variant(BadgeVariant::Primary).left_icon(IconName::Info).build())
                .item(badge("Draft").variant(BadgeVariant::Default).left_icon(IconName::Pencil).build())
        )
        .item(small("Additional examples:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_8))
                .s(Align::new().left())
                .item(badge("New").variant(BadgeVariant::Primary).build())
                .item(badge("Beta").variant(BadgeVariant::Warning).build())
                .item(badge("Deprecated").variant(BadgeVariant::Error).build())
                .item(badge("Stable").variant(BadgeVariant::Success).build())
        )
}

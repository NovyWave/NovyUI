use zoon::*;
use moonzoon_novyui::*;



pub fn card_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Card"))
        .item(small("Different variants:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_16))
                .item(card().variant(CardVariant::Default).build())
                .item(card().variant(CardVariant::Elevated).build())
                .item(card().variant(CardVariant::Outlined).build())
                .item(card().variant(CardVariant::Filled).build())
        )
        .item(small("Different sizes:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_16))
                .item(card().size(CardSize::Small).build())
                .item(card().size(CardSize::Medium).build())
                .item(card().size(CardSize::Large).build())
        )
        .item(small("Clickable card:"))
        .item(
            card()
                .variant(CardVariant::Outlined)
                .clickable(true)
                .build()
        )
}

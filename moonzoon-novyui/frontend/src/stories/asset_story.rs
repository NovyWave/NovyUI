use zoon::*;
use crate::tokens::*;
use crate::components::*;
use crate::assets::*;

pub fn asset_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Assets"))
        .item(small("Logo assets:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_16))
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_8))
                        .item(small("Light Logo"))
                        .item(
                            El::new()
                                .s(Width::exact(120))
                                .s(Height::exact(60))
                                .s(Background::new().color_signal(neutral_2()))
                                .s(Borders::all_signal(neutral_4().map(|color| Border::new().width(1).color(color))))
                                .s(RoundedCorners::all(4))
                                .s(Align::center())
                                .child(small("Logo Light"))
                        )
                )
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_8))
                        .item(small("Dark Logo"))
                        .item(
                            El::new()
                                .s(Width::exact(120))
                                .s(Height::exact(60))
                                .s(Background::new().color_signal(neutral_11()))
                                .s(Borders::all_signal(neutral_8().map(|color| Border::new().width(1).color(color))))
                                .s(RoundedCorners::all(4))
                                .s(Align::center())
                                .child(
                                    El::new()
                                        .s(Font::new().color_signal(neutral_1()).size(12))
                                        .child(Text::new("Logo Dark"))
                                )
                        )
                )
        )
        .item(small("Icon assets:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .item(
                    El::new()
                        .s(Width::exact(32))
                        .s(Height::exact(32))
                        .s(Background::new().color_signal(primary_6()))
                        .s(RoundedCorners::all(4))
                        .s(Align::center())
                        .child(
                            El::new()
                                .s(Font::new().color(white()).size(12))
                                .child(Text::new("🎨"))
                        )
                )
                .item(
                    El::new()
                        .s(Width::exact(32))
                        .s(Height::exact(32))
                        .s(Background::new().color_signal(success_7()))
                        .s(RoundedCorners::all(4))
                        .s(Align::center())
                        .child(
                            El::new()
                                .s(Font::new().color(white()).size(12))
                                .child(Text::new("✓"))
                        )
                )
                .item(
                    El::new()
                        .s(Width::exact(32))
                        .s(Height::exact(32))
                        .s(Background::new().color_signal(error_7()))
                        .s(RoundedCorners::all(4))
                        .s(Align::center())
                        .child(
                            El::new()
                                .s(Font::new().color(white()).size(12))
                                .child(Text::new("✗"))
                        )
                )
        )
        .item(small("Placeholder images:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_16))
                .item(
                    El::new()
                        .s(Width::exact(100))
                        .s(Height::exact(100))
                        .s(Background::new().color_signal(neutral_3()))
                        .s(Borders::all_signal(neutral_4().map(|color| Border::new().width(1).color(color))))
                        .s(RoundedCorners::all(8))
                        .s(Align::center())
                        .child(small("100x100"))
                )
                .item(
                    El::new()
                        .s(Width::exact(150))
                        .s(Height::exact(100))
                        .s(Background::new().color_signal(neutral_3()))
                        .s(Borders::all_signal(neutral_4().map(|color| Border::new().width(1).color(color))))
                        .s(RoundedCorners::all(8))
                        .s(Align::center())
                        .child(small("150x100"))
                )
        )
}

use zoon::*;
use moonzoon_novyui::*;



pub fn list_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("List"))
        .item(small("Simple list:"))
        .item(
            list()
                .item("First item")
                .item("Second item")
                .item("Third item")
                .build()
        )
        .item(small("Another list:"))
        .item(
            list()
                .item("Home")
                .item("Settings")
                .item("Profile")
                .item("About")
                .build()
        )
}

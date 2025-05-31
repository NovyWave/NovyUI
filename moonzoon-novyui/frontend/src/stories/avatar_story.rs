use zoon::*;
use crate::tokens::*;
use crate::components::*;

pub fn avatar_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Avatar"))
        .item(small("Different sizes:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().center_y())
                .item(avatar("John Doe").size(AvatarSize::Small).build())
                .item(avatar("Jane Smith").size(AvatarSize::Medium).build())
                .item(avatar("Bob Wilson").size(AvatarSize::Large).build())
                .item(avatar("Alice Brown").size(AvatarSize::XLarge).build())
        )
        .item(small("With icons:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().center_y())
                .item(avatar("User").icon("👤").size(AvatarSize::Small).build())
                .item(avatar("Admin").icon("👑").size(AvatarSize::Medium).build())
                .item(avatar("Guest").icon("👻").size(AvatarSize::Large).build())
                .item(avatar("Bot").icon("🤖").size(AvatarSize::XLarge).build())
        )
        .item(small("Different names:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().center_y())
                .item(avatar("A").build())
                .item(avatar("AB").build())
                .item(avatar("Alice Bob").build())
                .item(avatar("Very Long Name").build())
        )
}

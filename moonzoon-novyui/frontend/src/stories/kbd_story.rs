use zoon::*;
use crate::tokens::*;
use crate::components::*;

pub fn kbd_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Kbd (Keyboard Shortcuts)"))
        .item(small("Different sizes:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_8))
                .s(Align::new().center_y())
                .item(kbd("Ctrl+C").size(KbdSize::Small).build())
                .item(kbd("Ctrl+V").size(KbdSize::Medium).build())
                .item(kbd("Ctrl+Z").size(KbdSize::Large).build())
        )
        .item(small("Common shortcuts:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_8))
                .s(Align::new().center_y())
                .item(ctrl_c().build())
                .item(ctrl_v().build())
                .item(ctrl_s().build())
                .item(enter().build())
                .item(escape().build())
        )
        .item(small("Arrow keys:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_8))
                .s(Align::new().center_y())
                .item(arrow_up().build())
                .item(arrow_down().build())
                .item(arrow_left().build())
                .item(arrow_right().build())
        )
        .item(small("Mac shortcuts:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_8))
                .s(Align::new().center_y())
                .item(cmd_k().build())
                .item(cmd_enter().build())
        )
        .item(small("Usage example:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_8))
                .s(Align::new().center_y())
                .item(small("Press"))
                .item(cmd_k().build())
                .item(small("to open command palette"))
        )
}

use zoon::*;
use crate::tokens::*;
use crate::components::*;
use crate::stories::template::*;

pub fn kbd_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_32))
        .s(Align::new().left())
        .item(component_section(
            "Kbd",
            "Keyboard key indicators for displaying shortcuts, hotkeys, and key combinations. Essential for documentation, tutorials, and accessibility guidance."
        ))

        // Size stories
        .item(story_section("Sizes", "Three available sizes with visual comparison",
            Row::new()
                .s(Gap::new().x(SPACING_16))
                .s(Align::new().left())
                .item(El::new().s(Align::new().left()).child(kbd("Ctrl").size(KbdSize::Small).build()))
                .item(small("Small"))
                .item(El::new().s(Align::new().left()).child(kbd("Ctrl").size(KbdSize::Medium).build()))
                .item(small("Medium (default)"))
                .item(El::new().s(Align::new().left()).child(kbd("Ctrl").size(KbdSize::Large).build()))
                .item(small("Large"))
        ))

        // Variant stories
        .item(story_section("Variants", "Different visual styles for various contexts",
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_16))
                        .s(Align::new().left())
                        .item(El::new().s(Align::new().left()).child(kbd("Ctrl").variant(KbdVariant::Default).build()))
                        .item(small("Default - Physical keyboard key style"))
                )
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_16))
                        .s(Align::new().left())
                        .item(El::new().s(Align::new().left()).child(kbd("Ctrl").variant(KbdVariant::Outlined).build()))
                        .item(small("Outlined - Simple border style"))
                )
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_16))
                        .s(Align::new().left())
                        .item(El::new().s(Align::new().left()).child(kbd("Ctrl").variant(KbdVariant::Solid).build()))
                        .item(small("Solid - High contrast style"))
                )
        ))

        // Common shortcuts stories
        .item(story_section("Common Shortcuts", "Frequently used keyboard shortcuts",
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .s(Align::new().left())
                        .item(El::new().s(Align::new().left()).child(ctrl_c().build()))
                        .item(small("Copy"))
                )
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .s(Align::new().left())
                        .item(El::new().s(Align::new().left()).child(ctrl_v().build()))
                        .item(small("Paste"))
                )
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .s(Align::new().left())
                        .item(El::new().s(Align::new().left()).child(ctrl_s().build()))
                        .item(small("Save"))
                )
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .s(Align::new().left())
                        .item(El::new().s(Align::new().left()).child(ctrl_z().build()))
                        .item(small("Undo"))
                )
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .s(Align::new().left())
                        .item(El::new().s(Align::new().left()).child(enter().build()))
                        .item(small("Confirm"))
                )
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .s(Align::new().left())
                        .item(El::new().s(Align::new().left()).child(escape().build()))
                        .item(small("Cancel"))
                )
        ))

        // Navigation stories
        .item(story_section("Navigation Keys", "Essential keys for interface navigation",
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .s(Align::new().left())
                        .item(El::new().s(Align::new().left()).child(tab().build()))
                        .item(small("Next field"))
                )
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .s(Align::new().left())
                        .item(El::new().s(Align::new().left()).child(shift_tab().build()))
                        .item(small("Previous field"))
                )
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .s(Align::new().left())
                        .item(
                            Row::new()
                                .s(Gap::new().x(SPACING_4))
                                .s(Align::new().left())
                                .item(El::new().s(Align::new().left()).child(arrow_up().build()))
                                .item(El::new().s(Align::new().left()).child(arrow_down().build()))
                                .item(El::new().s(Align::new().left()).child(arrow_left().build()))
                                .item(El::new().s(Align::new().left()).child(arrow_right().build()))
                        )
                        .item(small("Arrow navigation"))
                )
        ))

        // Mac-specific stories
        .item(story_section("Mac-Specific Keys", "macOS command key combinations",
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .s(Align::new().left())
                        .item(El::new().s(Align::new().left()).child(cmd_k().build()))
                        .item(small("Command palette"))
                )
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .s(Align::new().left())
                        .item(El::new().s(Align::new().left()).child(cmd_enter().build()))
                        .item(small("Quick submit"))
                )
        ))

        // Key combinations stories
        .item(story_section("Key Combinations", "Complex multi-key shortcuts",
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .s(Align::new().left())
                        .item(El::new().s(Align::new().left()).child(kbd("Ctrl+Shift+P").build()))
                        .item(small("Command palette"))
                )
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .s(Align::new().left())
                        .item(El::new().s(Align::new().left()).child(kbd("Alt+F4").build()))
                        .item(small("Close window"))
                )
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .s(Align::new().left())
                        .item(El::new().s(Align::new().left()).child(kbd("Ctrl+Alt+Del").build()))
                        .item(small("Task manager"))
                )
        ))

        // Custom keys stories
        .item(story_section("Custom Keys", "Function keys and special characters",
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .s(Align::new().left())
                        .item(El::new().s(Align::new().left()).child(kbd("F1").build()))
                        .item(small("Help"))
                )
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .s(Align::new().left())
                        .item(El::new().s(Align::new().left()).child(kbd("Space").build()))
                        .item(small("Play/Pause"))
                )
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .s(Align::new().left())
                        .item(El::new().s(Align::new().left()).child(kbd("Del").build()))
                        .item(small("Delete"))
                )
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .s(Align::new().left())
                        .item(El::new().s(Align::new().left()).child(kbd("Home").build()))
                        .item(small("Go to beginning"))
                )
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .s(Align::new().left())
                        .item(El::new().s(Align::new().left()).child(kbd("End").build()))
                        .item(small("Go to end"))
                )
        ))

        // Size comparison stories
        .item(story_section("Size Comparison", "Visual comparison of all sizes",
            Row::new()
                .s(Gap::new().x(SPACING_16))
                .s(Align::new().left())
                .item(El::new().s(Align::new().left()).child(kbd("Ctrl+C").size(KbdSize::Small).variant(KbdVariant::Default).build()))
                .item(El::new().s(Align::new().left()).child(kbd("Ctrl+C").size(KbdSize::Medium).variant(KbdVariant::Default).build()))
                .item(El::new().s(Align::new().left()).child(kbd("Ctrl+C").size(KbdSize::Large).variant(KbdVariant::Default).build()))
        ))

        // Variant comparison stories
        .item(story_section("Variant Comparison", "Visual comparison of all variants",
            Row::new()
                .s(Gap::new().x(SPACING_16))
                .s(Align::new().left())
                .item(El::new().s(Align::new().left()).child(kbd("Enter").variant(KbdVariant::Default).build()))
                .item(El::new().s(Align::new().left()).child(kbd("Enter").variant(KbdVariant::Outlined).build()))
                .item(El::new().s(Align::new().left()).child(kbd("Enter").variant(KbdVariant::Solid).build()))
        ))
}

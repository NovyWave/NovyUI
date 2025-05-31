use zoon::*;

mod tokens;
mod components;
mod assets;
mod stories;

use tokens::*;
use components::*;
use components::icon::{moon, sun};
use stories::*;

fn main() {
    start_app("app", root);
}

fn root() -> impl Element {
    Column::new()
        .s(Width::fill())
        .s(Height::screen())    // Height::fill() => Height::screen()
        .s(Scrollbars::both())  // This one is important - enables proper scrolling
        .s(Background::new().color_signal(
            theme().map(|t| match t {
                Theme::Light => "oklch(99% 0.025 255)",  // neutral_1 light - same as Storybook
                Theme::Dark => "oklch(18% 0.035 255)",   // neutral_2 dark - better dark background
            })
        ))
        .s(Font::new().family([
            FontFamily::new("Inter"),
            FontFamily::new("system-ui"),
            FontFamily::new("sans-serif"),
        ]))
        .item(header())
        .item(component_showcase())
}

fn header() -> impl Element {
    Row::new()
        .s(Padding::all(SPACING_32))
        .s(Gap::both(SPACING_32))
        .item(header_title())
        .item(theme_toggle())
}

fn header_title() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h1("NovyUI for MoonZoon"))
        .item(paragraph("Type-safe design system components for MoonZoon"))
}

fn theme_toggle() -> impl Element {
    Row::new()
        .s(Gap::new().x(SPACING_16))
        .s(Align::new().center_y().right())
        .item(small("Theme:"))
        .item(theme_button())
}

fn theme_button() -> impl Element {
    // Create a custom theme button that shows current theme state
    El::new()
        .s(Cursor::new(CursorIcon::Pointer))
        .s(Padding::new().x(SPACING_12).y(SPACING_8))
        .s(Gap::new().x(SPACING_8))
        .s(RoundedCorners::all(6))
        .s(transition_colors())
        .s(Background::new().color_signal(
            theme().map(|t| match t {
                Theme::Light => "oklch(99% 0.025 255)",  // neutral_1 light
                Theme::Dark => "oklch(30% 0.045 255)",   // neutral_3 dark
            })
        ))
        .s(Outline::with_signal_self(
            theme().map(|t| match t {
                Theme::Light => Outline::outer().color("oklch(88% 0.055 255)").width(1),  // neutral_4 light
                Theme::Dark => Outline::outer().color("oklch(45% 0.065 255)").width(1),   // neutral_5 dark
            })
        ))
        .s(Font::new().size(14).weight(FontWeight::Medium))
        .child(
            Row::new()
                .s(Gap::new().x(SPACING_8))
                .s(Align::new().center_y())
                .item_signal(
                    theme().map(|t| match t {
                        Theme::Light => sun().size(IconSize::Small).color(IconColor::Secondary).build(),
                        Theme::Dark => moon().size(IconSize::Small).color(IconColor::Secondary).build(),
                    })
                )
                .item_signal(
                    theme().map(|t| {
                        let text = match t {
                            Theme::Light => "Light",
                            Theme::Dark => "Dark",
                        };
                        El::new()
                            .s(Font::new().color_signal(
                                theme().map(|theme| match theme {
                                    Theme::Light => "oklch(35% 0.08 255)",  // neutral_11 light
                                    Theme::Dark => "oklch(90% 0.04 255)",   // neutral_11 dark
                                })
                            ))
                            .child(Text::new(text))
                    })
                )
        )
        .on_click(|| toggle_theme())
}

fn component_showcase() -> impl Element {
    Column::new()
        .s(Padding::all(SPACING_32))
        .s(Height::fill())
        .s(Scrollbars::both())
        .s(Gap::new().y(SPACING_56))
        .item(h3("Component Showcase"))
        .item(icon_examples())
        .item(button_examples())
        .item(input_examples())
        .item(badge_examples())
        // .item(card_examples())      // Temporarily hidden
        .item(list_examples())
        // .item(avatar_examples())    // Temporarily hidden
        .item(switch_examples())
        .item(checkbox_examples())
        .item(textarea_examples())
        .item(kbd_examples())
        .item(accordion_examples())
        .item(select_examples())
        // .item(alert_examples())     // Temporarily hidden
        .item(treeview_examples())
        // .item(fileinput_examples())  // Temporarily hidden
        // .item(asset_examples())     // Temporarily hidden
        // .item(pattern_examples())   // Temporarily hidden
        // .item(token_examples())     // Temporarily hidden
        .item(typography_examples())
}


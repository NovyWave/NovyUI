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
    Column::new()
        .s(Padding::all(SPACING_32))
        .s(Gap::new().y(SPACING_24))
        .item(
            Row::new()
                .s(Gap::both(SPACING_32))
                .item(header_title())
                .item(theme_toggle())
        )
        .item(navigation_bar())
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

fn navigation_bar() -> impl Element {
    let components = vec![
        ("Accordion", "accordion"),
        ("Badge", "badge"),
        ("Buttons", "buttons"),
        ("Checkbox", "checkbox"),
        ("Icons", "icons"),
        ("Inputs", "inputs"),
        ("Kbd", "kbd"),
        ("List", "list"),
        ("Select", "select"),
        ("Switch", "switch"),
        ("TextArea", "textarea"),
        ("TreeView", "treeview"),
        ("Typography", "typography"),
    ];

    Row::new()
        .s(Gap::new().x(SPACING_8).y(SPACING_8))
        .s(Padding::new().y(SPACING_16))
        .multiline()
        .s(Align::new().center_y())
        .items(components.into_iter().map(|(name, id)| {
            nav_button(name, id)
        }))
}

fn nav_button(name: &str, target_id: &str) -> impl Element {
    let target_id = target_id.to_string();

    button()
        .label(name)
        .variant(ButtonVariant::Ghost)
        .size(ButtonSize::Small)
        .on_press(move || {
            scroll_to_element(&target_id);
        })
        .build()
}

fn scroll_to_element(element_id: &str) {
    // Use web_sys to scroll to the element
    if let Some(window) = web_sys::window() {
        if let Some(document) = window.document() {
            if let Some(element) = document.get_element_by_id(element_id) {
                // Use the simpler scroll_into_view method
                element.scroll_into_view();
            }
        }
    }
}

fn component_showcase() -> impl Element {
    Column::new()
        .s(Padding::all(SPACING_32))
        .s(Height::fill())
        .s(Scrollbars::both())
        .s(Gap::new().y(SPACING_56))
        .item(h3("Component Showcase"))
        .item(component_section("accordion", accordion_examples()))
        // .item(alert_examples())     // Temporarily hidden
        // .item(asset_examples())     // Temporarily hidden
        // .item(avatar_examples())    // Temporarily hidden
        .item(component_section("badge", badge_examples()))
        .item(component_section("buttons", button_examples()))
        // .item(card_examples())      // Temporarily hidden
        .item(component_section("checkbox", checkbox_examples()))
        // .item(fileinput_examples())  // Temporarily hidden
        .item(component_section("icons", icon_examples()))
        .item(component_section("inputs", input_examples()))
        .item(component_section("kbd", kbd_examples()))
        .item(component_section("list", list_examples()))
        // .item(pattern_examples())   // Temporarily hidden
        .item(component_section("select", select_examples()))
        .item(component_section("switch", switch_examples()))
        .item(component_section("textarea", textarea_examples()))
        // .item(token_examples())     // Temporarily hidden
        .item(component_section("treeview", treeview_examples()))
        .item(component_section("typography", typography_examples()))
}

fn component_section(id: &str, content: impl Element) -> impl Element {
    El::new()
        .s(Width::fill())
        .id(id)
        .child(content)
}


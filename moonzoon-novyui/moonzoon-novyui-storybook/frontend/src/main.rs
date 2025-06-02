use zoon::*;
use moonzoon_novyui::*;

mod assets;
mod stories;
mod router;
mod store;

use stories::*;
use router::*;
use store::*;

// Viewport control for scrolling
pub static VIEWPORT_Y: Lazy<Mutable<i32>> = Lazy::new(|| Mutable::new(0));

// Viewport width control for responsive design
pub static VIEWPORT_WIDTH: Lazy<Mutable<i32>> = Lazy::new(|| Mutable::new(1200));

fn main() {
    // Initialize the router
    router();
    
    // Initialize viewport width tracking
    init_viewport_width_tracking();
    
    start_app("app", root);
}

fn init_viewport_width_tracking() {
    use web_sys::wasm_bindgen::prelude::*;
    use web_sys::wasm_bindgen::JsCast;

    // Set initial viewport width
    if let Some(window) = web_sys::window() {
        let width = window.inner_width().unwrap().as_f64().unwrap() as i32;
        VIEWPORT_WIDTH.set(width);
    }

    // Listen for window resize events
    if let Some(window) = web_sys::window() {
        let closure = Closure::wrap(Box::new(move || {
            if let Some(window) = web_sys::window() {
                let width = window.inner_width().unwrap().as_f64().unwrap() as i32;
                VIEWPORT_WIDTH.set(width);
            }
        }) as Box<dyn FnMut()>);

        let _ = window.add_event_listener_with_callback("resize", closure.as_ref().unchecked_ref());
        closure.forget(); // Prevent cleanup to keep the event listener alive
    }
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
        .item(main_content())
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
        .item(
            El::new()
                .s(Cursor::new(CursorIcon::Pointer))
                .on_click(|| {
                    navigate_to_component(ComponentPage::All);
                })
                .child(h1("NovyUI for MoonZoon"))
        )
        .item_signal(
            // Hide subtitle when viewport width is smaller than 660px
            VIEWPORT_WIDTH.signal().map(|width| {
                if width >= 660 {
                    Some(paragraph("Type-safe design system components for MoonZoon"))
                } else {
                    None
                }
            })
        )
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
                        Theme::Light => icon(IconName::Sun).size(IconSize::Small).color(IconColor::Secondary).build(),
                        Theme::Dark => icon(IconName::Moon).size(IconSize::Small).color(IconColor::Secondary).build(),
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
        ("Badge", ComponentPage::Badge),
        ("Buttons", ComponentPage::Button),
        ("Checkbox", ComponentPage::Checkbox),
        ("Icons", ComponentPage::Icon),
        ("Inputs", ComponentPage::Input),
        ("Kbd", ComponentPage::Kbd),
        ("Select", ComponentPage::Select),
        ("Switch", ComponentPage::Switch),
        ("TreeView", ComponentPage::TreeView),
        ("Typography", ComponentPage::Typography),
    ];

    Row::new()
        .s(Gap::new().x(SPACING_8).y(SPACING_8))
        .s(Padding::new().y(SPACING_16))
        .multiline()
        .s(Align::new().center_y())
        .items(components.into_iter().map(|(name, component_page)| {
            nav_button(name, component_page)
        }))
}

fn nav_button(name: &str, component_page: ComponentPage) -> impl Element {
    button()
        .label(name)
        .variant(ButtonVariant::Ghost)
        .size(ButtonSize::Small)
        .on_press(move || {
            navigate_to_component(component_page);
        })
        .build()
}



fn main_content() -> impl Element {
    El::new()
        .s(Padding::all(SPACING_32))
        .s(Height::fill())
        .s(Scrollbars::both())
        .viewport_y_signal(VIEWPORT_Y.signal())
        .child_signal(
            store().current_component.signal().map(|component_page| {
                match component_page {
                    ComponentPage::All => all_components_view().unify(),
                    ComponentPage::Badge => badge_examples().unify(),
                    ComponentPage::Button => button_examples().unify(),
                    ComponentPage::Checkbox => checkbox_examples().unify(),
                    ComponentPage::Icon => icon_examples().unify(),
                    ComponentPage::Input => input_examples().unify(),
                    ComponentPage::Kbd => kbd_examples().unify(),
                    ComponentPage::Select => select_examples().unify(),
                    ComponentPage::Switch => switch_examples().unify(),
                    ComponentPage::TreeView => treeview_examples().unify(),
                    ComponentPage::Typography => typography_examples().unify(),
                }
            })
        )
}

fn all_components_view() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_150))
        .item(badge_examples())
        .item(button_examples())
        .item(checkbox_examples())
        .item(icon_examples())
        .item(input_examples())
        .item(kbd_examples())
        .item(select_examples())
        .item(switch_examples())
        .item(treeview_examples())
        .item(typography_examples())
}




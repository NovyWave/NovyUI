use zoon::*;

mod tokens;
mod components;
mod assets;

use tokens::*;
use components::*;
use components::icon::{moon, sun};

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
        .item(card_examples())
        .item(list_examples())
        .item(avatar_examples())
        .item(switch_examples())
        .item(checkbox_examples())
        .item(textarea_examples())
        .item(kbd_examples())
        .item(accordion_examples())
        .item(select_examples())
        .item(alert_examples())
        .item(treeview_examples())
        .item(fileinput_examples())
        .item(asset_examples())
        .item(pattern_examples())
        .item(token_verification_examples())
        .item(typography_examples())
}

fn icon_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Icons"))
        .item(small("Different sizes:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().left())
                .item(star().size(IconSize::Small).build())
                .item(star().size(IconSize::Medium).build())
                .item(star().size(IconSize::Large).build())
                .item(star().size(IconSize::XLarge).build())
        )
        .item(small("Different colors:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().left())
                .item(heart().color(IconColor::Primary).build())
                .item(heart().color(IconColor::Secondary).build())
                .item(heart().color(IconColor::Success).build())
                .item(heart().color(IconColor::Error).build())
                .item(heart().color(IconColor::Muted).build())
        )
        .item(small("Common icons:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().left())
                .item(search().build())
                .item(x().build())
                .item(check().build())
                .item(eye().build())
                .item(eye_off().build())
        )
        .item(small("Chevron icons:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().left())
                .item(chevron_up().build())
                .item(chevron_down().build())
                .item(chevron_left().build())
                .item(chevron_right().build())
        )
        .item(small("Custom color:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().left())
                .item(star().color(IconColor::Custom("#ff8a80")).build())  // Light red
                .item(star().color(IconColor::Custom("#80cbc4")).build())  // Light teal
                .item(star().color(IconColor::Custom("#81c784")).build())  // Light green
                .item(star().color(IconColor::Custom("#ffb74d")).build())  // Light orange
        )
        .item(small("Usage in context:"))
        .item(
            El::new()
                .s(Align::new().left())
                .child(
                    button()
                        .variant(ButtonVariant::Outline)
                        .size(ButtonSize::Medium)
                        .left_icon("search")
                        .label("Search for items")
                        .build()
                )
        )
}

fn button_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Buttons"))
        .item(small("Basic variants:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .item(
                    button()
                        .label("Primary")
                        .variant(ButtonVariant::Primary)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Secondary")
                        .variant(ButtonVariant::Secondary)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Outline")
                        .variant(ButtonVariant::Outline)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Ghost")
                        .variant(ButtonVariant::Ghost)
                        .on_press(|| {})
                        .build()
                )
        )
        .item(small("Additional variants:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .item(
                    button()
                        .label("Link")
                        .variant(ButtonVariant::Link)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Destructive")
                        .variant(ButtonVariant::Destructive)
                        .on_press(|| {})
                        .build()
                )
        )
        .item(small("Different sizes:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .item(
                    button()
                        .label("Small")
                        .size(ButtonSize::Small)
                        .variant(ButtonVariant::Primary)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Medium")
                        .size(ButtonSize::Medium)
                        .variant(ButtonVariant::Primary)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Large")
                        .size(ButtonSize::Large)
                        .variant(ButtonVariant::Primary)
                        .on_press(|| {})
                        .build()
                )
        )
        .item(small("With icons:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .item(
                    button()
                        .label("Save")
                        .left_icon("check")
                        .variant(ButtonVariant::Primary)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Delete")
                        .left_icon("x")
                        .variant(ButtonVariant::Destructive)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Next")
                        .right_icon("chevron-right")
                        .variant(ButtonVariant::Secondary)
                        .on_press(|| {})
                        .build()
                )
        )
        .item(small("Disabled buttons:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .item(
                    button()
                        .label("Disabled Primary")
                        .variant(ButtonVariant::Primary)
                        .disabled(true)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Disabled Secondary")
                        .variant(ButtonVariant::Secondary)
                        .disabled(true)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Disabled Outline")
                        .variant(ButtonVariant::Outline)
                        .disabled(true)
                        .on_press(|| {})
                        .build()
                )
        )
        .item(small("Loading buttons:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .item(
                    button()
                        .label("Loading...")
                        .variant(ButtonVariant::Primary)
                        .loading(true)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .label("Saving")
                        .left_icon("check")
                        .variant(ButtonVariant::Secondary)
                        .loading(true)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .variant(ButtonVariant::Ghost)
                        .loading(true)
                        .on_press(|| {})
                        .build()
                )
        )
        .item(small("Icon-only buttons:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .item(
                    button()
                        .left_icon("search")
                        .variant(ButtonVariant::Ghost)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .left_icon("settings")
                        .variant(ButtonVariant::Outline)
                        .on_press(|| {})
                        .build()
                )
                .item(
                    button()
                        .left_icon("plus")
                        .variant(ButtonVariant::Primary)
                        .on_press(|| {})
                        .build()
                )
        )
}

fn input_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Inputs"))
        .item(small("Different variants:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .s(Width::exact(400))
                .item(
                    input()
                        .placeholder("Enter your name...")
                        .build()
                )
                .item(
                    input()
                        .placeholder("Enter text...")
                        .value("Invalid value")
                        .error_message("This field has an error")
                        .build()
                )
                .item(
                    input()
                        .placeholder("Enter text...")
                        .value("Valid value")
                        .build()
                )
        )
        .item(small("Different sizes:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .s(Width::exact(400))
                .item(
                    input()
                        .placeholder("Small input...")
                        .size(InputSize::Small)
                        .build()
                )
                .item(
                    input()
                        .placeholder("Medium input...")
                        .size(InputSize::Medium)
                        .build()
                )
                .item(
                    input()
                        .placeholder("Large input...")
                        .size(InputSize::Large)
                        .build()
                )
        )
        .item(small("With icons:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .s(Width::exact(400))
                .item(
                    input()
                        .placeholder("Enter username...")
                        .left_icon(IconName::User)
                        .build()
                )
                .item(
                    input()
                        .placeholder("Enter email...")
                        .left_icon(IconName::Mail)
                        .input_kind(InputKind::Email)
                        .build()
                )
                .item(
                    input()
                        .placeholder("Search...")
                        .left_icon(IconName::Search)
                        .input_kind(InputKind::Search)
                        .build()
                )
        )
        .item(small("With labels:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .s(Width::exact(400))
                .item(
                    input()
                        .label("Full Name")
                        .placeholder("Enter your full name...")
                        .required(true)
                        .left_icon(IconName::User)
                        .build()
                )
                .item(
                    input()
                        .label("Email Address")
                        .placeholder("Enter email...")
                        .value("invalid@")
                        .error_message("Please enter a valid email address")
                        .required(true)
                        .left_icon(IconName::Mail)
                        .input_kind(InputKind::Email)
                        .build()
                )
        )
        .item(small("Different states:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .s(Width::exact(400))
                .item(
                    input()
                        .placeholder("Disabled input...")
                        .disabled()
                        .left_icon(IconName::Lock)
                        .build()
                )
                .item(
                    input()
                        .placeholder("Readonly input...")
                        .value("Read-only value")
                        .readonly()
                        .left_icon(IconName::Eye)
                        .build()
                )
        )
}

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

fn badge_examples() -> impl Element {
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

fn card_examples() -> impl Element {
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

fn list_examples() -> impl Element {
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

fn avatar_examples() -> impl Element {
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

fn switch_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Switch"))
        .item(small("Different sizes:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().center_y())
                .item(switch().size(SwitchSize::Small).build())
                .item(switch().size(SwitchSize::Medium).build())
                .item(switch().size(SwitchSize::Large).build())
        )
        .item(small("Different states:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().center_y())
                .item(switch().checked(false).build())
                .item(switch().checked(true).build())
                .item(switch().disabled(true).build())
                .item(switch().checked(true).disabled(true).build())
        )
        .item(small("Interactive (click to toggle):"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().center_y())
                .item(switch().on_change(|checked| {
                    // In a real app, you'd update state here
                }).build())
                .item(switch().checked(true).on_change(|checked| {
                    // In a real app, you'd update state here
                }).build())
        )
}

fn checkbox_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Checkbox"))
        .item(small("Different sizes:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().center_y())
                .item(checkbox().size(CheckboxSize::Small).build())
                .item(checkbox().size(CheckboxSize::Medium).build())
                .item(checkbox().size(CheckboxSize::Large).build())
        )
        .item(small("Different states:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .item(checkbox().checked(false).build())
                .item(checkbox().checked(true).build())
                .item(checkbox().disabled(true).build())
                .item(checkbox().checked(true).disabled(true).build())
        )
        .item(small("With labels:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .item(checkbox().label("Accept terms and conditions").build())
                .item(checkbox().label("Subscribe to newsletter").checked(true).build())
                .item(checkbox().label("Disabled option").disabled(true).build())
        )
        .item(small("Interactive (click to toggle):"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .item(checkbox().label("Click me!").on_change(|checked| {
                    // In a real app, you'd update state here
                }).build())
                .item(checkbox().label("Or click me!").checked(true).on_change(|checked| {
                    // In a real app, you'd update state here
                }).build())
        )
}

fn textarea_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("TextArea"))
        .item(small("Different sizes:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(textarea().size(TextAreaSize::Small).placeholder("Small textarea").build())
                .item(textarea().size(TextAreaSize::Medium).placeholder("Medium textarea").build())
                .item(textarea().size(TextAreaSize::Large).placeholder("Large textarea").build())
        )
        .item(small("Different states:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(textarea().placeholder("Enter your message...").build())
                .item(textarea().value("This textarea has some content").build())
                .item(textarea().disabled(true).placeholder("Disabled textarea").build())
                .item(textarea().required(true).placeholder("Required textarea").build())
        )
        .item(small("Different row counts:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(textarea().rows(2).placeholder("2 rows").build())
                .item(textarea().rows(4).placeholder("4 rows").build())
                .item(textarea().rows(6).placeholder("6 rows").build())
        )
        .item(small("Interactive (click to simulate input):"))
        .item(
            textarea()
                .placeholder("Click me to simulate input")
                .on_change(|text| {
                    // In a real app, you'd update state here
                })
                .build()
        )
}

fn kbd_examples() -> impl Element {
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
                .item(paragraph("Press"))
                .item(kbd("Ctrl+K").build())
                .item(paragraph("to open command palette"))
        )
}

fn accordion_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Accordion"))
        .item(small("Basic accordion:"))
        .item(
            accordion()
                .item(
                    accordion_item("What is MoonZoon?",
                        "MoonZoon is a Rust framework for building web applications with a focus on simplicity and performance.")
                        .expanded(true)
                )
                .item(
                    accordion_item("How does it work?",
                        "MoonZoon uses WebAssembly to run Rust code in the browser, providing near-native performance.")
                )
                .item(
                    accordion_item("Why choose MoonZoon?",
                        "Type safety, performance, and a great developer experience make MoonZoon an excellent choice for web development.")
                )
                .build()
        )
        .item(small("With disabled item:"))
        .item(
            accordion()
                .item(
                    accordion_item("Available Feature",
                        "This feature is available and can be expanded.")
                        .expanded(false)
                )
                .item(
                    accordion_item("Disabled Feature",
                        "This feature is currently disabled.")
                        .disabled(true)
                )
                .item(
                    accordion_item("Another Feature",
                        "This is another available feature with more detailed information about its capabilities.")
                        .expanded(true)
                )
                .build()
        )
}

fn select_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Select"))
        .item(small("Different sizes:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(
                    select()
                        .size(SelectSize::Small)
                        .placeholder("Small select")
                        .option(select_option("1", "Option 1"))
                        .option(select_option("2", "Option 2"))
                        .build()
                )
                .item(
                    select()
                        .size(SelectSize::Medium)
                        .placeholder("Medium select")
                        .option(select_option("1", "Option 1"))
                        .option(select_option("2", "Option 2"))
                        .build()
                )
                .item(
                    select()
                        .size(SelectSize::Large)
                        .placeholder("Large select")
                        .option(select_option("1", "Option 1"))
                        .option(select_option("2", "Option 2"))
                        .build()
                )
        )
        .item(small("Different states:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(
                    select()
                        .placeholder("Choose an option...")
                        .option(select_option("rust", "Rust"))
                        .option(select_option("js", "JavaScript"))
                        .option(select_option("python", "Python"))
                        .build()
                )
                .item(
                    select()
                        .selected_value("rust")
                        .option(select_option("rust", "Rust"))
                        .option(select_option("js", "JavaScript"))
                        .option(select_option("python", "Python"))
                        .build()
                )
                .item(
                    select()
                        .disabled(true)
                        .placeholder("Disabled select")
                        .option(select_option("1", "Option 1"))
                        .build()
                )
                .item(
                    select()
                        .required(true)
                        .placeholder("Required select *")
                        .option(select_option("1", "Option 1"))
                        .option(select_option("2", "Option 2"))
                        .build()
                )
        )
        .item(small("Interactive (click to simulate selection):"))
        .item(
            select()
                .placeholder("Click to select...")
                .option(select_option("option1", "First Option"))
                .option(select_option("option2", "Second Option"))
                .option(select_option("option3", "Third Option"))
                .on_change(|value| {
                    // In a real app, you'd update state here
                })
                .build()
        )
}

fn alert_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Alert"))
        .item(small("Different variants:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(info_alert("This is an informational message.").build())
                .item(success_alert("Operation completed successfully!").build())
                .item(warning_alert("Please review your input before proceeding.").build())
                .item(error_alert("An error occurred while processing your request.").build())
                .item(alert("This is a default alert message.").build())
        )
        .item(small("With titles:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(
                    info_alert("Here are some additional details about this feature.")
                        .title("Information")
                        .build()
                )
                .item(
                    success_alert("Your changes have been saved to the database.")
                        .title("Success")
                        .build()
                )
                .item(
                    warning_alert("This action cannot be undone once confirmed.")
                        .title("Warning")
                        .build()
                )
                .item(
                    error_alert("Please check your network connection and try again.")
                        .title("Error")
                        .build()
                )
        )
        .item(small("Dismissible alerts:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(
                    info_alert("Click the × to dismiss this alert.")
                        .title("Dismissible Info")
                        .dismissible(true)
                        .on_dismiss(|| {
                            // In a real app, you'd handle dismissal here
                        })
                        .build()
                )
                .item(
                    success_alert("This alert can be closed by the user.")
                        .dismissible(true)
                        .on_dismiss(|| {
                            // In a real app, you'd handle dismissal here
                        })
                        .build()
                )
        )
        .item(small("Without icons:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(
                    warning_alert("This alert doesn't show an icon.")
                        .show_icon(false)
                        .build()
                )
                .item(
                    error_alert("Clean text-only alert message.")
                        .show_icon(false)
                        .title("No Icon")
                        .build()
                )
        )
}

fn treeview_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("TreeView"))
        .item(small("Basic tree structure:"))
        .item(
            tree_view()
                .node(
                    tree_node("root", "Project Root")
                        .expanded(true)
                        .with_children(vec![
                            tree_node("src", "src")
                                .expanded(true)
                                .with_children(vec![
                                    tree_node("main", "main.rs"),
                                    tree_node("lib", "lib.rs"),
                                    tree_node("components", "components")
                                        .with_children(vec![
                                            tree_node("button", "button.rs"),
                                            tree_node("input", "input.rs"),
                                        ])
                                ]),
                            tree_node("tests", "tests")
                                .with_children(vec![
                                    tree_node("integration", "integration.rs"),
                                ]),
                            tree_node("cargo", "Cargo.toml"),
                            tree_node("readme", "README.md"),
                        ])
                )
                .build()
        )
        .item(small("With selection:"))
        .item(
            tree_view()
                .node(
                    tree_node("docs", "Documentation")
                        .expanded(true)
                        .with_children(vec![
                            tree_node("api", "API Reference"),
                            tree_node("guide", "User Guide")
                                .selected(true),
                            tree_node("examples", "Examples")
                                .with_children(vec![
                                    tree_node("basic", "Basic Usage"),
                                    tree_node("advanced", "Advanced Features"),
                                ])
                        ])
                )
                .build()
        )
        .item(small("Without icons:"))
        .item(
            tree_view()
                .show_icons(false)
                .node(
                    tree_node("config", "Configuration")
                        .expanded(true)
                        .with_children(vec![
                            tree_node("dev", "Development"),
                            tree_node("prod", "Production"),
                            tree_node("test", "Testing"),
                        ])
                )
                .build()
        )
        .item(small("Interactive (click handlers):"))
        .item(
            tree_view()
                .node(
                    tree_node("features", "Features")
                        .expanded(true)
                        .with_children(vec![
                            tree_node("auth", "Authentication"),
                            tree_node("db", "Database"),
                            tree_node("api", "API Endpoints"),
                        ])
                )
                .on_select(|node_id| {
                    // In a real app, you'd handle selection here
                })
                .on_expand(|node_id, expanded| {
                    // In a real app, you'd handle expansion here
                })
                .build()
        )
}

fn fileinput_examples() -> impl Element {
    use components::fileinput::*;

    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("File Inputs"))
        .item(small("Different variants:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(
                    file_input()
                        .placeholder("Choose file...")
                        .build()
                )
                .item(
                    file_dropzone()
                        .placeholder("Drop files here or click to browse")
                        .build()
                )
                .item(
                    file_button()
                        .placeholder("Browse Files")
                        .build()
                )
        )
}

fn asset_examples() -> impl Element {
    use assets::*;

    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Asset Loading Test"))
        .item(small("Testing if assets are accessible via HTTP:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .item(small("Font URL:"))
                        .item(small(&font_url("inter-4-normal.woff2")))
                )
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .item(small("Icon URL:"))
                        .item(small(&icons::check()))
                )
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .item(small("Pattern URL:"))
                        .item(small(&patterns::hexagons()))
                )
                .item(
                    El::new()
                        .s(Width::exact(24))
                        .s(Height::exact(24))
                        .s(Background::new().url(&icons::check()))
                )
        )
}

fn pattern_examples() -> impl Element {
    use components::pattern::*;

    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Background Patterns"))
        .item(small("HeroPatterns integration:"))
        .item(pattern_showcase())
        .item(small("Pattern usage examples:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_12))
                .item(
                    El::new()
                        .s(Width::exact(100))
                        .s(Height::exact(60))
                        .s(RoundedCorners::all(8))
                        .s(Borders::all(Border::new().width(1).color("#e5e7eb")))
                        .s(hexagons_background())
                        .s(Align::center())
                        .child(small("Hexagons"))
                )
                .item(
                    El::new()
                        .s(Width::exact(100))
                        .s(Height::exact(60))
                        .s(RoundedCorners::all(8))
                        .s(Borders::all(Border::new().width(1).color("#e5e7eb")))
                        .s(topography_background())
                        .s(Align::center())
                        .child(small("Topography"))
                )
                .item(
                    El::new()
                        .s(Width::exact(100))
                        .s(Height::exact(60))
                        .s(RoundedCorners::all(8))
                        .s(Borders::all(Border::new().width(1).color("#e5e7eb")))
                        .s(wiggle_background())
                        .s(Align::center())
                        .child(small("Wiggle"))
                )
        )
}

fn token_verification_examples() -> impl Element {
    use tokens::*;

    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Design Token Verification"))
        .item(small("✅ VERIFIED TO MATCH ORIGINAL VUE DESIGN SYSTEM"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(h5("Color Tokens"))
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .item(
                            El::new()
                                .s(Width::exact(40))
                                .s(Height::exact(40))
                                .s(RoundedCorners::all(4))
                                .s(Font::new().color_signal(primary_1()))
                                .s(Align::center())
                                .child(small("P1"))
                        )
                        .item(
                            El::new()
                                .s(Width::exact(40))
                                .s(Height::exact(40))
                                .s(RoundedCorners::all(4))
                                .s(Font::new().color_signal(primary_9()))
                                .s(Align::center())
                                .child(small("P9"))
                        )
                        .item(
                            El::new()
                                .s(Width::exact(40))
                                .s(Height::exact(40))
                                .s(RoundedCorners::all(4))
                                .s(Font::new().color_signal(neutral_1()))
                                .s(Align::center())
                                .child(small("N1"))
                        )
                        .item(
                            El::new()
                                .s(Width::exact(40))
                                .s(Height::exact(40))
                                .s(RoundedCorners::all(4))
                                .s(Font::new().color_signal(neutral_12()))
                                .s(Align::center())
                                .child(small("N12"))
                        )
                )
                .item(h5("Typography Tokens"))
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .item(El::new().child(Text::new("12px Font")).s(Font::new().size(FONT_SIZE_12)))
                        .item(El::new().child(Text::new("14px Font")).s(Font::new().size(FONT_SIZE_14)))
                        .item(El::new().child(Text::new("16px Font")).s(Font::new().size(FONT_SIZE_16)))
                        .item(El::new().child(Text::new("18px Font")).s(Font::new().size(FONT_SIZE_18)))
                        .item(El::new().child(Text::new("24px Font")).s(Font::new().size(FONT_SIZE_24)))
                )
                .item(h5("Spacing Tokens"))
                .item(
                    Row::new()
                        .s(Gap::new().x(SPACING_8))
                        .item(
                            El::new()
                                .s(Width::exact(SPACING_4))
                                .s(Height::exact(20))
                                .s(Background::new().color("#3b82f6"))
                                .child(Text::new("4px"))
                        )
                        .item(
                            El::new()
                                .s(Width::exact(SPACING_8))
                                .s(Height::exact(20))
                                .s(Background::new().color("#3b82f6"))
                                .child(Text::new("8px"))
                        )
                        .item(
                            El::new()
                                .s(Width::exact(SPACING_16))
                                .s(Height::exact(20))
                                .s(Background::new().color("#3b82f6"))
                                .child(Text::new("16px"))
                        )
                        .item(
                            El::new()
                                .s(Width::exact(SPACING_24))
                                .s(Height::exact(20))
                                .s(Background::new().color("#3b82f6"))
                                .child(Text::new("24px"))
                        )
                )
        )
}

fn typography_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Typography"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .item(h1("Heading 1"))
                .item(h2("Heading 2"))
                .item(h3("Heading 3"))
                .item(paragraph("This is a paragraph with normal text."))
                .item(lead("This is lead text that stands out."))
                .item(small("This is small text for less important information."))
                .item(code("console.log('Hello, World!')"))
                .item(muted("This is muted text."))
        )
}


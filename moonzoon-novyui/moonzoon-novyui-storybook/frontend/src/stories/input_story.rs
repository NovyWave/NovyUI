use zoon::*;
use moonzoon_novyui::*;
use crate::stories::template::*;

pub fn input_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_32))
        .s(Align::new().left())
        .item(component_section(
            "Input",
            "Versatile text input components with multiple variants, sizes, icons, and validation states. Essential for forms, search, and data entry with full accessibility support."
        ))

        // Basic variant stories
        .item(story_section("Basic Variants", "Standard input states including default, error, and valid",
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
        ))

        // Size stories
        .item(story_section("Sizes", "Three available input sizes for different interface contexts",
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
        ))

        // Left icon stories
        .item(story_section("With Left Icons", "Inputs enhanced with contextual left-side icons",
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
        ))

        // Label stories
        .item(story_section("With Labels", "Inputs with built-in labels and validation states",
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
        ))

        // Right icon stories
        .item(story_section("With Right Icons", "Inputs with action or status icons on the right side",
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .s(Width::exact(400))
                .item(
                    input()
                        .placeholder("Enter amount...")
                        .right_icon(IconName::ArrowRight)
                        .build()
                )
                .item(
                    input()
                        .placeholder("Select date...")
                        .right_icon(IconName::Calendar)
                        .build()
                )
                .item(
                    input()
                        .placeholder("Enter URL...")
                        .right_icon(IconName::ExternalLink)
                        .input_kind(InputKind::Url)
                        .build()
                )
        ))

        // Interactive search stories
        .item(story_section("Search with Clear", "Interactive search input with clear button functionality",
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .s(Width::exact(400))
                .item(search_input_example())
        ))

        // Password stories
        .item(story_section("Password with Toggle", "Password input with visibility toggle and cursor preservation",
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .s(Width::exact(400))
                .item(password_input_example())
        ))

        // State stories
        .item(story_section("Input States", "Disabled and readonly input states",
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
        ))
}

// Interactive search input with clear button functionality
fn search_input_example() -> impl Element {
    let search_value = Mutable::new(String::new());

    // Custom search input container with clear button
    Row::new()
        .s(Width::fill())
        .s(Height::exact(44)) // Medium size
        .s(Padding::new().x(SPACING_12).y(SPACING_6))
        .s(Gap::new().x(SPACING_8))
        .s(Align::new().center_y())
        .s(RoundedCorners::all(4))
        .s(transition_colors())
        .s(Background::new().color_signal(
            theme().map(|t| match t {
                Theme::Light => "oklch(99% 0.025 255)", // neutral_1 light
                Theme::Dark => "oklch(12% 0.025 255)", // neutral_1 dark
            })
        ))
        .s(Outline::with_signal_self(
            theme().map(|t| match t {
                Theme::Light => Outline::inner().width(1).color("oklch(90% 0.05 250)"), // neutral_3 light
                Theme::Dark => Outline::inner().width(1).color("oklch(30% 0.05 250)"), // neutral_3 dark
            })
        ))
        .s(Shadows::with_signal(
            theme().map(|t| match t {
                Theme::Light => vec![
                    Shadow::new().inner().y(2).x(0).blur(4).spread(0).color("rgba(0, 0, 0, 0.12)"),
                    Shadow::new().inner().y(1).x(0).blur(2).spread(0).color("rgba(0, 0, 0, 0.18)"),
                    Shadow::new().inner().y(0).x(1).blur(2).spread(0).color("rgba(0, 0, 0, 0.08)"),
                ],
                Theme::Dark => vec![
                    Shadow::new().inner().y(-2).x(0).blur(4).spread(0).color("rgba(255, 255, 255, 0.25)"),
                    Shadow::new().inner().y(-1).x(0).blur(2).spread(0).color("rgba(255, 255, 255, 0.35)"),
                    Shadow::new().inner().y(0).x(-1).blur(2).spread(0).color("rgba(255, 255, 255, 0.2)"),
                ],
            })
        ))
        .item(
            icon_str("search")
                .size(IconSize::Medium)
                .color(IconColor::Secondary)
                .build()
        )
        .item(
            TextInput::new()
                .s(Width::fill())
                .s(Height::fill())
                .s(Font::new()
                    .size(FONT_SIZE_16)
                    .weight(FontWeight::Number(FONT_WEIGHT_5))
                    .color_signal(theme().map(|t| match t {
                        Theme::Light => "oklch(30% 0.07 255)", // neutral_9 light
                        Theme::Dark => "oklch(96% 0.035 255)", // neutral_10 dark
                    }))
                )
                .s(Background::new().color("transparent"))
                .s(Borders::new())
                .placeholder(
                    Placeholder::new("Search...")
                        .s(Font::new().color_signal(theme().map(|t| match t {
                            Theme::Light => "oklch(35% 0.14 250)", // primary_9 light
                            Theme::Dark => "oklch(85% 0.14 250)", // primary_9 dark
                        })))
                )
                .text_signal(search_value.signal_cloned())
                .label_hidden("Search")
                .on_change({
                    let search_value = search_value.clone();
                    move |new_value| {
                        search_value.set(new_value);
                    }
                })
        )
        .item_signal(
            search_value.signal_cloned().map(move |value| {
                if value.is_empty() {
                    None
                } else {
                    Some(
                        El::new()
                            .s(Cursor::new(CursorIcon::Pointer))
                            .s(Padding::all(SPACING_2))
                            .s(RoundedCorners::all(2))
                            .s(transition_colors())
                            .s(Background::new().color_signal(
                                theme().map(|t| match t {
                                    Theme::Light => "transparent",
                                    Theme::Dark => "transparent",
                                })
                            ))
                            .child(
                                icon_str("x")
                                    .size(IconSize::Small)
                                    .color(IconColor::Secondary)
                                    .build()
                            )
                            .on_click({
                                let search_value = search_value.clone();
                                move || {
                                    search_value.set(String::new());
                                }
                            })
                    )
                }
            })
        )
}

// Interactive password input with eye toggle functionality and cursor position preservation
fn password_input_example() -> impl Element {
    let password_value = Mutable::new(String::new());
    let show_password = Mutable::new(false);

    // Store reference to the input element for cursor position management
    let input_element_ref: Mutable<Option<web_sys::HtmlInputElement>> = Mutable::new(None);

    // Custom password input container with eye toggle
    Row::new()
        .s(Width::fill())
        .s(Height::exact(44)) // Medium size
        .s(Padding::new().x(SPACING_12).y(SPACING_6))
        .s(Gap::new().x(SPACING_8))
        .s(Align::new().center_y())
        .s(RoundedCorners::all(4))
        .s(transition_colors())
        .s(Background::new().color_signal(
            theme().map(|t| match t {
                Theme::Light => "oklch(99% 0.025 255)", // neutral_1 light
                Theme::Dark => "oklch(12% 0.025 255)", // neutral_1 dark
            })
        ))
        .s(Outline::with_signal_self(
            theme().map(|t| match t {
                Theme::Light => Outline::inner().width(1).color("oklch(90% 0.05 250)"), // neutral_3 light
                Theme::Dark => Outline::inner().width(1).color("oklch(30% 0.05 250)"), // neutral_3 dark
            })
        ))
        .s(Shadows::with_signal(
            theme().map(|t| match t {
                Theme::Light => vec![
                    Shadow::new().inner().y(2).x(0).blur(4).spread(0).color("rgba(0, 0, 0, 0.12)"),
                    Shadow::new().inner().y(1).x(0).blur(2).spread(0).color("rgba(0, 0, 0, 0.18)"),
                    Shadow::new().inner().y(0).x(1).blur(2).spread(0).color("rgba(0, 0, 0, 0.08)"),
                ],
                Theme::Dark => vec![
                    Shadow::new().inner().y(-2).x(0).blur(4).spread(0).color("rgba(255, 255, 255, 0.25)"),
                    Shadow::new().inner().y(-1).x(0).blur(2).spread(0).color("rgba(255, 255, 255, 0.35)"),
                    Shadow::new().inner().y(0).x(-1).blur(2).spread(0).color("rgba(255, 255, 255, 0.2)"),
                ],
            })
        ))
        .item(
            icon_str("lock")
                .size(IconSize::Medium)
                .color(IconColor::Secondary)
                .build()
        )
        .item(
            TextInput::new()
                .s(Width::fill())
                .s(Height::fill())
                .s(Font::new()
                    .size(FONT_SIZE_16)
                    .weight(FontWeight::Number(FONT_WEIGHT_5))
                    .color_signal(theme().map(|t| match t {
                        Theme::Light => "oklch(30% 0.07 255)", // neutral_9 light
                        Theme::Dark => "oklch(96% 0.035 255)", // neutral_10 dark
                    }))
                )
                .s(Background::new().color("transparent"))
                .s(Borders::new())
                .placeholder(
                    Placeholder::new("Enter password...")
                        .s(Font::new().color_signal(theme().map(|t| match t {
                            Theme::Light => "oklch(35% 0.14 250)", // primary_9 light
                            Theme::Dark => "oklch(85% 0.14 250)", // primary_9 dark
                        })))
                )
                .text_signal(password_value.signal_cloned())
                .input_type(
                    InputType::password().mask_signal(
                        show_password.signal().map(|show| !show)
                    )
                )
                .label_hidden("Password")
                .after_insert({
                    let input_element_ref = input_element_ref.clone();
                    move |dom_element: web_sys::HtmlInputElement| {
                        // Store reference to the input element for cursor position management
                        input_element_ref.set(Some(dom_element));
                    }
                })
                .on_change({
                    let password_value = password_value.clone();
                    move |new_value| {
                        password_value.set(new_value);
                    }
                })
        )
        .item(
            El::new()
                .s(Cursor::new(CursorIcon::Pointer))
                .s(Padding::all(SPACING_2))
                .s(RoundedCorners::all(2))
                .s(transition_colors())
                .s(Background::new().color_signal(
                    theme().map(|t| match t {
                        Theme::Light => "transparent",
                        Theme::Dark => "transparent",
                    })
                ))
                .child_signal(
                    show_password.signal().map(|show| {
                        if show {
                            icon_str("eye-off")
                                .size(IconSize::Medium)
                                .color(IconColor::Secondary)
                                .build()
                        } else {
                            icon_str("eye")
                                .size(IconSize::Medium)
                                .color(IconColor::Secondary)
                                .build()
                        }
                    })
                )
                .on_click({
                    let show_password = show_password.clone();
                    let input_element_ref = input_element_ref.clone();
                    move || {
                        // Store current cursor position before toggling
                        let (current_start, current_end) = if let Some(input_element) = input_element_ref.get_cloned() {
                            (
                                input_element.selection_start().unwrap_or(Some(0)).unwrap_or(0),
                                input_element.selection_end().unwrap_or(Some(0)).unwrap_or(0),
                            )
                        } else {
                            (0, 0)
                        };

                        // Toggle password visibility
                        show_password.update(|show| !show);

                        // Restore cursor position after the DOM updates
                        if let Some(input_element) = input_element_ref.get_cloned() {
                            // Use requestAnimationFrame and setTimeout for proper timing (matching Vue implementation)
                            let window = web_sys::window().unwrap();
                            let input_element_for_closure = input_element.clone();
                            let restore_cursor = Closure::wrap(Box::new(move || {
                                let input_element = input_element_for_closure.clone();
                                let window = web_sys::window().unwrap();
                                let restore_position = Closure::wrap(Box::new(move || {
                                    let _ = input_element.focus();

                                    // Try to restore cursor position
                                    let _ = input_element.set_selection_range(current_start, current_end);
                                }) as Box<dyn FnMut()>);

                                let _ = window.set_timeout_with_callback_and_timeout_and_arguments_0(
                                    restore_position.as_ref().unchecked_ref(),
                                    0
                                );
                                restore_position.forget(); // Prevent cleanup
                            }) as Box<dyn FnMut()>);

                            let _ = window.request_animation_frame(restore_cursor.as_ref().unchecked_ref());
                            restore_cursor.forget(); // Prevent cleanup
                        }
                    }
                })
        )
}

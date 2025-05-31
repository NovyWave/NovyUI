use zoon::*;
use crate::tokens::*;
use crate::components::*;

pub fn checkbox_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Checkbox"))
        .item(small("Different sizes:"))
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_16))
                .s(Align::new().left())
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .s(Align::new().left())
                        .item(checkbox().size(CheckboxSize::Small).label("Small").build())
                        .item(small("20px"))
                )
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .s(Align::new().left())
                        .item(checkbox().size(CheckboxSize::Medium).label("Medium").build())
                        .item(small("24px"))
                )
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_4))
                        .s(Align::new().left())
                        .item(checkbox().size(CheckboxSize::Large).label("Large").build())
                        .item(small("28px"))
                )
        )
        .item(small("Different states:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .s(Align::new().left())
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(checkbox().label("Unchecked").build())
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(checkbox().label("Checked").checked(true).build())
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(interactive_indeterminate_checkbox("Indeterminate"))
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(checkbox().label("Disabled unchecked").disabled(true).build())
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(checkbox().label("Disabled checked").checked(true).disabled(true).build())
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(checkbox().label("Disabled indeterminate").state(CheckboxState::Indeterminate).disabled(true).build())
                )
        )
        .item(small("With descriptions:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .s(Align::new().left())
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            checkbox()
                                .label("Marketing emails")
                                .description("Receive updates about new features and promotions")
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            checkbox()
                                .label("Security notifications")
                                .description("Get notified about important security updates")
                                .checked(true)
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            checkbox()
                                .label("Newsletter subscription")
                                .description("Weekly digest of the latest news and articles")
                                .disabled(true)
                                .build()
                        )
                )
        )
        .item(small("Required and error states:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .s(Align::new().left())
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            checkbox()
                                .label("Terms and Conditions")
                                .description("You must accept the terms and conditions to continue")
                                .required(true)
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            checkbox()
                                .label("Privacy Policy")
                                .description("Please review and accept our privacy policy")
                                .required(true)
                                .error(true)
                                .build()
                        )
                )
        )
        .item(small("Form example:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .s(Align::new().left())
                .s(Padding::all(SPACING_16))
                .s(Borders::all_signal(theme().map(|t| match t {
                    Theme::Light => Border::new().width(1).color("oklch(90% 0.14 250)"), // neutral_3 light
                    Theme::Dark => Border::new().width(1).color("oklch(35% 0.14 250)"), // neutral_4 dark
                })))
                .s(RoundedCorners::all(8))
                .s(Background::new().color_signal(theme().map(|t| match t {
                    Theme::Light => "oklch(98% 0.01 250)", // neutral_1 light - blue tint instead of green
                    Theme::Dark => "oklch(8% 0.14 250)", // neutral_2 dark - keep original
                })))
                .item(
                    El::new()
                        .child(Text::new("Account Preferences"))
                        .s(Font::new()
                            .size(FONT_SIZE_18)
                            .weight(FontWeight::Number(FONT_WEIGHT_6))
                            .color_signal(theme().map(|t| match t {
                                Theme::Light => "oklch(15% 0.14 250)", // neutral_9 light
                                Theme::Dark => "oklch(95% 0.14 250)", // neutral_11 dark
                            }))
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            checkbox()
                                .label("Email notifications")
                                .description("Receive email notifications for important updates")
                                .checked(true)
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            checkbox()
                                .label("SMS notifications")
                                .description("Receive SMS notifications for urgent matters")
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            checkbox()
                                .label("Push notifications")
                                .description("Receive push notifications on your mobile device")
                                .checked(true)
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            checkbox()
                                .label("Marketing communications")
                                .description("Receive promotional emails and special offers")
                                .build()
                        )
                )
                .item(
                    El::new()
                        .s(Align::new().left())
                        .child(
                            interactive_indeterminate_checkbox_with_description(
                                "Data sharing",
                                "Allow anonymous usage data to help improve our service"
                            )
                        )
                )
        )
        .item(small("Select All Pattern:"))
        .item(select_all_pattern_example())
}

fn select_all_pattern_example() -> impl Element {
    // Create reactive signals for each individual checkbox
    let item1_checked = Mutable::new(true);
    let item2_checked = Mutable::new(false);
    let item3_checked = Mutable::new(true);
    let item4_checked = Mutable::new(false);

    // Compute the "Select All" state based on individual items
    let select_all_state = map_ref! {
        let item1 = item1_checked.signal(),
        let item2 = item2_checked.signal(),
        let item3 = item3_checked.signal(),
        let item4 = item4_checked.signal() =>
        {
            let checked_count = [*item1, *item2, *item3, *item4].iter().filter(|&&x| x).count();
            match checked_count {
                0 => CheckboxState::Unchecked,
                4 => CheckboxState::Checked,
                _ => CheckboxState::Indeterminate,
            }
        }
    };

    // Compute the selected count for status display
    let selected_count = map_ref! {
        let item1 = item1_checked.signal(),
        let item2 = item2_checked.signal(),
        let item3 = item3_checked.signal(),
        let item4 = item4_checked.signal() =>
        {
            [*item1, *item2, *item3, *item4].iter().filter(|&&x| x).count()
        }
    };

    // Create the "Select All" click handler
    let select_all_handler = {
        let item1_checked = item1_checked.clone();
        let item2_checked = item2_checked.clone();
        let item3_checked = item3_checked.clone();
        let item4_checked = item4_checked.clone();

        move || {
            // Determine the current state and toggle appropriately
            let checked_count = [
                item1_checked.get(),
                item2_checked.get(),
                item3_checked.get(),
                item4_checked.get()
            ].iter().filter(|&&x| x).count();

            match checked_count {
                4 => {
                    // If all are checked, uncheck all
                    item1_checked.set(false);
                    item2_checked.set(false);
                    item3_checked.set(false);
                    item4_checked.set(false);
                }
                0 => {
                    // If none are checked, check all
                    item1_checked.set(true);
                    item2_checked.set(true);
                    item3_checked.set(true);
                    item4_checked.set(true);
                }
                _ => {
                    // If some are checked (indeterminate), complete the selection by checking all
                    item1_checked.set(true);
                    item2_checked.set(true);
                    item3_checked.set(true);
                    item4_checked.set(true);
                }
            }
        }
    };

    Column::new()
        .s(Gap::new().y(SPACING_12))
        .s(Align::new().left())
        .s(Padding::all(SPACING_16))
        .s(Borders::all_signal(theme().map(|t| match t {
            Theme::Light => Border::new().width(1).color("oklch(85% 0.14 250)"), // neutral_4 light
            Theme::Dark => Border::new().width(1).color("oklch(25% 0.14 250)"), // neutral_4 dark
        })))
        .s(RoundedCorners::all(8))
        .s(Background::new().color_signal(theme().map(|t| match t {
            Theme::Light => "oklch(98% 0.01 250)", // neutral_1 light - blue tint instead of green
            Theme::Dark => "oklch(8% 0.14 250)", // neutral_2 dark - keep original
        })))
        .item(
            El::new()
                .child(Text::new("Select All Pattern"))
                .s(Font::new()
                    .size(FONT_SIZE_18)
                    .weight(FontWeight::Number(FONT_WEIGHT_6))
                    .color_signal(theme().map(|t| match t {
                        Theme::Light => "oklch(15% 0.14 250)", // neutral_9 light
                        Theme::Dark => "oklch(95% 0.14 250)", // neutral_11 dark
                    }))
                )
        )
        .item(
            El::new()
                .child(Text::new("Fully interactive select all pattern with signal-based state management."))
                .s(Font::new()
                    .size(FONT_SIZE_14)
                    .color_signal(theme().map(|t| match t {
                        Theme::Light => "oklch(45% 0.14 250)", // neutral_5 light
                        Theme::Dark => "oklch(55% 0.14 250)", // neutral_5 dark
                    }))
                )
        )
        .item(
            // "Select All" checkbox with reactive state
            El::new()
                .s(Align::new().left())
                .child_signal(select_all_state.map({
                    let select_all_handler = select_all_handler.clone();
                    move |state| {
                        // Create a clickable row that includes both checkbox and label
                        Row::new()
                            .s(Gap::new().x(SPACING_8))
                            .s(Cursor::new(CursorIcon::Pointer))
                            .item(
                                CheckboxBuilder::new()
                                    .state(state)
                                    .build()
                            )
                            .item(
                                El::new()
                                    .child(Text::new("Select All"))
                                    .s(Font::new()
                                        .size(FONT_SIZE_16)
                                        .weight(FontWeight::Number(FONT_WEIGHT_4))
                                        .color_signal(theme().map(|t| match t {
                                            Theme::Light => "oklch(15% 0.14 250)", // neutral_9 light
                                            Theme::Dark => "oklch(95% 0.14 250)", // neutral_11 dark
                                        }))
                                    )
                                    .s(Cursor::new(CursorIcon::Pointer))
                            )
                            .on_click({
                                let handler = select_all_handler.clone();
                                move || handler()
                            })
                    }
                }))
        )
        .item(
            // Individual items with reactive states
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .s(Align::new().left())
                .s(Padding::new().left(SPACING_16)) // Indent the individual items
                .item({
                    let item1_checked = item1_checked.clone();
                    El::new()
                        .s(Align::new().left())
                        .child(
                            Row::new()
                                .s(Gap::new().x(SPACING_8))
                                .s(Cursor::new(CursorIcon::Pointer))
                                .item_signal(item1_checked.signal().map(move |checked| {
                                    CheckboxBuilder::new()
                                        .checked(checked)
                                        .build()
                                }))
                                .item(
                                    El::new()
                                        .child(Text::new("Item 1"))
                                        .s(Font::new()
                                            .size(FONT_SIZE_16)
                                            .weight(FontWeight::Number(FONT_WEIGHT_4))
                                            .color_signal(theme().map(|t| match t {
                                                Theme::Light => "oklch(15% 0.14 250)", // neutral_9 light
                                                Theme::Dark => "oklch(95% 0.14 250)", // neutral_11 dark
                                            }))
                                        )
                                        .s(Cursor::new(CursorIcon::Pointer))
                                )
                                .on_click({
                                    let item1_checked = item1_checked.clone();
                                    move || item1_checked.update(|current| !current)
                                })
                        )
                })
                .item({
                    let item2_checked = item2_checked.clone();
                    El::new()
                        .s(Align::new().left())
                        .child(
                            Row::new()
                                .s(Gap::new().x(SPACING_8))
                                .s(Cursor::new(CursorIcon::Pointer))
                                .item_signal(item2_checked.signal().map(move |checked| {
                                    CheckboxBuilder::new()
                                        .checked(checked)
                                        .build()
                                }))
                                .item(
                                    El::new()
                                        .child(Text::new("Item 2"))
                                        .s(Font::new()
                                            .size(FONT_SIZE_16)
                                            .weight(FontWeight::Number(FONT_WEIGHT_4))
                                            .color_signal(theme().map(|t| match t {
                                                Theme::Light => "oklch(15% 0.14 250)", // neutral_9 light
                                                Theme::Dark => "oklch(95% 0.14 250)", // neutral_11 dark
                                            }))
                                        )
                                        .s(Cursor::new(CursorIcon::Pointer))
                                )
                                .on_click({
                                    let item2_checked = item2_checked.clone();
                                    move || item2_checked.update(|current| !current)
                                })
                        )
                })
                .item({
                    let item3_checked = item3_checked.clone();
                    El::new()
                        .s(Align::new().left())
                        .child(
                            Row::new()
                                .s(Gap::new().x(SPACING_8))
                                .s(Cursor::new(CursorIcon::Pointer))
                                .item_signal(item3_checked.signal().map(move |checked| {
                                    CheckboxBuilder::new()
                                        .checked(checked)
                                        .build()
                                }))
                                .item(
                                    El::new()
                                        .child(Text::new("Item 3"))
                                        .s(Font::new()
                                            .size(FONT_SIZE_16)
                                            .weight(FontWeight::Number(FONT_WEIGHT_4))
                                            .color_signal(theme().map(|t| match t {
                                                Theme::Light => "oklch(15% 0.14 250)", // neutral_9 light
                                                Theme::Dark => "oklch(95% 0.14 250)", // neutral_11 dark
                                            }))
                                        )
                                        .s(Cursor::new(CursorIcon::Pointer))
                                )
                                .on_click({
                                    let item3_checked = item3_checked.clone();
                                    move || item3_checked.update(|current| !current)
                                })
                        )
                })
                .item({
                    let item4_checked = item4_checked.clone();
                    El::new()
                        .s(Align::new().left())
                        .child(
                            Row::new()
                                .s(Gap::new().x(SPACING_8))
                                .s(Cursor::new(CursorIcon::Pointer))
                                .item_signal(item4_checked.signal().map(move |checked| {
                                    CheckboxBuilder::new()
                                        .checked(checked)
                                        .build()
                                }))
                                .item(
                                    El::new()
                                        .child(Text::new("Item 4"))
                                        .s(Font::new()
                                            .size(FONT_SIZE_16)
                                            .weight(FontWeight::Number(FONT_WEIGHT_4))
                                            .color_signal(theme().map(|t| match t {
                                                Theme::Light => "oklch(15% 0.14 250)", // neutral_9 light
                                                Theme::Dark => "oklch(95% 0.14 250)", // neutral_11 dark
                                            }))
                                        )
                                        .s(Cursor::new(CursorIcon::Pointer))
                                )
                                .on_click({
                                    let item4_checked = item4_checked.clone();
                                    move || item4_checked.update(|current| !current)
                                })
                        )
                })
        )
        .item(
            // Dynamic status text
            El::new()
                .child_signal(selected_count.map(|count| {
                    let text = match count {
                        0 => "None selected".to_string(),
                        1 => "1 item selected".to_string(),
                        n => format!("{} items selected", n),
                    };
                    Text::new(&text)
                }))
                .s(Font::new()
                    .size(FONT_SIZE_14)
                    .weight(FontWeight::Number(FONT_WEIGHT_5))
                    .color_signal(theme().map(|t| match t {
                        Theme::Light => "oklch(35% 0.14 250)", // neutral_6 light
                        Theme::Dark => "oklch(65% 0.14 250)", // neutral_6 dark
                    }))
                )
        )
}

// Helper function to create an interactive indeterminate checkbox
fn interactive_indeterminate_checkbox(label: &str) -> impl Element {
    // Create a signal to track the checkbox state
    // Start with indeterminate state
    let checkbox_state = Mutable::new(CheckboxState::Indeterminate);

    // Create the click handler with improved UX pattern
    let click_handler = {
        let checkbox_state = checkbox_state.clone();

        move || {
            let current_state = checkbox_state.get();
            match current_state {
                CheckboxState::Indeterminate => {
                    // Indeterminate → Checked (improved UX pattern)
                    checkbox_state.set(CheckboxState::Checked);
                }
                CheckboxState::Checked => {
                    // Checked → Unchecked
                    checkbox_state.set(CheckboxState::Unchecked);
                }
                CheckboxState::Unchecked => {
                    // Unchecked → Checked
                    checkbox_state.set(CheckboxState::Checked);
                }
            }
        }
    };

    // Create a clickable row that includes both checkbox and label
    Row::new()
        .s(Gap::new().x(SPACING_8))
        .s(Cursor::new(CursorIcon::Pointer))
        .item_signal(checkbox_state.signal().map(move |state| {
            match state {
                CheckboxState::Indeterminate => {
                    CheckboxBuilder::new()
                        .state(CheckboxState::Indeterminate)
                        .build()
                }
                CheckboxState::Checked => {
                    CheckboxBuilder::new()
                        .checked(true)
                        .build()
                }
                CheckboxState::Unchecked => {
                    CheckboxBuilder::new()
                        .checked(false)
                        .build()
                }
            }
        }))
        .item(
            El::new()
                .child(Text::new(label))
                .s(Font::new()
                    .size(FONT_SIZE_16)
                    .weight(FontWeight::Number(FONT_WEIGHT_4))
                    .color_signal(theme().map(|t| match t {
                        Theme::Light => "oklch(15% 0.14 250)", // neutral_9 light
                        Theme::Dark => "oklch(95% 0.14 250)", // neutral_11 dark
                    }))
                )
                .s(Cursor::new(CursorIcon::Pointer))
        )
        .on_click(move || click_handler())
}

// Helper function to create an interactive indeterminate checkbox with description
fn interactive_indeterminate_checkbox_with_description(label: &str, description: &str) -> impl Element {
    // Create a signal to track the checkbox state
    // Start with indeterminate state
    let checkbox_state = Mutable::new(CheckboxState::Indeterminate);

    // Create the click handler with improved UX pattern
    let click_handler = {
        let checkbox_state = checkbox_state.clone();

        move || {
            let current_state = checkbox_state.get();
            match current_state {
                CheckboxState::Indeterminate => {
                    // Indeterminate → Checked (improved UX pattern)
                    checkbox_state.set(CheckboxState::Checked);
                }
                CheckboxState::Checked => {
                    // Checked → Unchecked
                    checkbox_state.set(CheckboxState::Unchecked);
                }
                CheckboxState::Unchecked => {
                    // Unchecked → Checked
                    checkbox_state.set(CheckboxState::Checked);
                }
            }
        }
    };

    // Create a clickable element that includes checkbox, label, and description
    El::new()
        .s(Cursor::new(CursorIcon::Pointer))
        .child_signal(checkbox_state.signal().map({
            let label = label.to_string();
            let description = description.to_string();
            move |state| {
                match state {
                    CheckboxState::Indeterminate => {
                        CheckboxBuilder::new()
                            .state(CheckboxState::Indeterminate)
                            .label(&label)
                            .description(&description)
                            .build()
                    }
                    CheckboxState::Checked => {
                        CheckboxBuilder::new()
                            .checked(true)
                            .label(&label)
                            .description(&description)
                            .build()
                    }
                    CheckboxState::Unchecked => {
                        CheckboxBuilder::new()
                            .checked(false)
                            .label(&label)
                            .description(&description)
                            .build()
                    }
                }
            }
        }))
        .on_click(move || click_handler())
}

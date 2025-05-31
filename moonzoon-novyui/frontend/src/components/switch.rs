use zoon::*;
use crate::tokens::*;
use crate::theme::*;

// Switch sizes
#[derive(Debug, Clone, Copy)]
pub enum SwitchSize {
    Small,   // 32x20px
    Medium,  // 44x24px
    Large,   // 52x28px
}

impl SwitchSize {
    pub fn track_width(self) -> u32 {
        match self {
            SwitchSize::Small => 32,
            SwitchSize::Medium => 44,
            SwitchSize::Large => 52,
        }
    }

    pub fn track_height(self) -> u32 {
        match self {
            SwitchSize::Small => 20,
            SwitchSize::Medium => 24,
            SwitchSize::Large => 28,
        }
    }

    pub fn thumb_size(self) -> u32 {
        match self {
            SwitchSize::Small => 16,
            SwitchSize::Medium => 20,
            SwitchSize::Large => 24,
        }
    }

    pub fn font_size(self) -> u32 {
        match self {
            SwitchSize::Small => FONT_SIZE_12,
            SwitchSize::Medium => FONT_SIZE_12,
            SwitchSize::Large => FONT_SIZE_14,
        }
    }
}

// Switch builder
pub struct SwitchBuilder {
    size: SwitchSize,
    checked: bool,
    disabled: bool,
    label: Option<String>,
    description: Option<String>,
    show_icons: bool,
    required: bool,
}

impl SwitchBuilder {
    pub fn new() -> Self {
        Self {
            size: SwitchSize::Medium,
            checked: false,
            disabled: false,
            label: None,
            description: None,
            show_icons: true,
            required: false,
        }
    }

    pub fn size(mut self, size: SwitchSize) -> Self {
        self.size = size;
        self
    }

    pub fn checked(mut self, checked: bool) -> Self {
        self.checked = checked;
        self
    }

    pub fn disabled(mut self, disabled: bool) -> Self {
        self.disabled = disabled;
        self
    }

    pub fn label(mut self, label: impl Into<String>) -> Self {
        self.label = Some(label.into());
        self
    }

    pub fn description(mut self, description: impl Into<String>) -> Self {
        self.description = Some(description.into());
        self
    }

    pub fn show_icons(mut self, show_icons: bool) -> Self {
        self.show_icons = show_icons;
        self
    }

    pub fn required(mut self, required: bool) -> Self {
        self.required = required;
        self
    }

    pub fn build(self) -> impl Element {
        let checked = Mutable::new(self.checked);
        let checked_signal = checked.signal();
        let checked_clone = checked.clone();
        let focused = Mutable::new(false);
        let focused_signal = focused.signal();

        let track_width = self.size.track_width();
        let track_height = self.size.track_height();
        let thumb_size = self.size.thumb_size();
        let font_size = self.size.font_size();
        let track_radius = track_height / 2;
        let thumb_radius = thumb_size / 2;
        let disabled = self.disabled;
        let show_icons = self.show_icons;

        // Calculate thumb position (2px padding from edges)
        let thumb_padding = 2;
        let thumb_travel = track_width - thumb_size - (thumb_padding * 2);

        // Create the switch track
        let switch_track = El::new()
            .s(Width::exact(track_width))
            .s(Height::exact(track_height))
            .s(RoundedCorners::all(track_radius))
            .s(Cursor::new(if disabled {
                CursorIcon::NotAllowed
            } else {
                CursorIcon::Pointer
            }))
            .s(Background::new().color_signal(theme().map(move |t| {
                let checked_state = checked.get();
                if disabled {
                    match t {
                        Theme::Light => "oklch(85% 0.14 250)", // neutral_4 light
                        Theme::Dark => "oklch(25% 0.14 250)", // neutral_4 dark
                    }
                } else if checked_state {
                    match t {
                        Theme::Light => "oklch(55% 0.22 250)", // primary_7 light
                        Theme::Dark => "oklch(65% 0.22 250)", // primary_7 dark
                    }
                } else {
                    match t {
                        Theme::Light => "oklch(75% 0.14 250)", // neutral_5 light
                        Theme::Dark => "oklch(35% 0.14 250)", // neutral_5 dark
                    }
                }
            })))
            .s(Borders::all_signal(theme().map(move |t| {
                let focused_state = focused.get();
                if focused_state && !disabled {
                    match t {
                        Theme::Light => Border::new().width(2).color("oklch(55% 0.22 250)"), // primary_7 light
                        Theme::Dark => Border::new().width(2).color("oklch(65% 0.22 250)"), // primary_7 dark
                    }
                } else {
                    Border::new().width(0).color("transparent")
                }
            })))
            .child(
                // Combined track with icons and thumb
                Row::new()
                    .s(Width::fill())
                    .s(Height::fill())
                    .s(Align::new().center_y())
                    .s(Padding::all(thumb_padding))
                    .item_signal(checked_signal.map(move |is_checked| {
                        if is_checked {
                            // Thumb on the right
                            Row::new()
                                .s(Width::fill())
                                .s(Align::new().center_y())
                                .item_signal(always(show_icons).map(move |show| {
                                    if show {
                                        Some(
                                            El::new()
                                                .child(Text::new("✓"))
                                                .s(Font::new()
                                                    .size(font_size)
                                                    .weight(FontWeight::Number(FONT_WEIGHT_6))
                                                    .color_signal(theme().map(move |t| {
                                                        if disabled {
                                                            match t {
                                                                Theme::Light => "oklch(45% 0.14 250)", // neutral_5 light
                                                                Theme::Dark => "oklch(55% 0.14 250)", // neutral_5 dark
                                                            }
                                                        } else {
                                                            match t {
                                                                Theme::Light => "oklch(98% 0.14 250)", // neutral_1 light
                                                                Theme::Dark => "oklch(8% 0.14 250)", // neutral_2 dark
                                                            }
                                                        }
                                                    }))
                                                )
                                        )
                                    } else {
                                        None
                                    }
                                }))
                                .item(El::new().s(Width::fill())) // Spacer
                                .item(
                                    El::new()
                                        .s(Width::exact(thumb_size))
                                        .s(Height::exact(thumb_size))
                                        .s(RoundedCorners::all(thumb_radius))
                                        .s(Background::new().color_signal(theme().map(move |t| {
                                            if disabled {
                                                match t {
                                                    Theme::Light => "oklch(65% 0.14 250)", // neutral_6 light
                                                    Theme::Dark => "oklch(45% 0.14 250)", // neutral_6 dark
                                                }
                                            } else {
                                                match t {
                                                    Theme::Light => "oklch(98% 0.14 250)", // neutral_1 light
                                                    Theme::Dark => "oklch(95% 0.14 250)", // neutral_11 dark
                                                }
                                            }
                                        })))
                                )
                        } else {
                            // Thumb on the left
                            Row::new()
                                .s(Width::fill())
                                .s(Align::new().center_y())
                                .item(
                                    El::new()
                                        .s(Width::exact(thumb_size))
                                        .s(Height::exact(thumb_size))
                                        .s(RoundedCorners::all(thumb_radius))
                                        .s(Background::new().color_signal(theme().map(move |t| {
                                            if disabled {
                                                match t {
                                                    Theme::Light => "oklch(65% 0.14 250)", // neutral_6 light
                                                    Theme::Dark => "oklch(45% 0.14 250)", // neutral_6 dark
                                                }
                                            } else {
                                                match t {
                                                    Theme::Light => "oklch(98% 0.14 250)", // neutral_1 light
                                                    Theme::Dark => "oklch(95% 0.14 250)", // neutral_11 dark
                                                }
                                            }
                                        })))
                                )
                                .item(El::new().s(Width::fill())) // Spacer
                                .item_signal(always(show_icons).map(move |show| {
                                    if show {
                                        Some(
                                            El::new()
                                                .child(Text::new("✕"))
                                                .s(Font::new()
                                                    .size(font_size)
                                                    .weight(FontWeight::Number(FONT_WEIGHT_6))
                                                    .color_signal(theme().map(move |t| {
                                                        if disabled {
                                                            match t {
                                                                Theme::Light => "oklch(45% 0.14 250)", // neutral_5 light
                                                                Theme::Dark => "oklch(55% 0.14 250)", // neutral_5 dark
                                                            }
                                                        } else {
                                                            match t {
                                                                Theme::Light => "oklch(35% 0.14 250)", // neutral_7 light
                                                                Theme::Dark => "oklch(75% 0.14 250)", // neutral_9 dark
                                                            }
                                                        }
                                                    }))
                                                )
                                        )
                                    } else {
                                        None
                                    }
                                }))
                        }
                    }))
            )
            .on_click({
                move || {
                    if !disabled {
                        checked_clone.update(|current| !current);
                    }
                }
            });

        // Build the complete component
        if let Some(label_text) = &self.label {
            let mut items = Vec::new();

            // Main row with switch and label
            let main_row = Row::new()
                .s(Gap::new().x(SPACING_12))
                .s(Align::new().top())
                .item(switch_track)
                .item(
                    Column::new()
                        .s(Gap::new().y(SPACING_2))
                        .item(
                            Row::new()
                                .s(Gap::new().x(SPACING_4))
                                .item(
                                    El::new()
                                        .child(Text::new(label_text))
                                        .s(Font::new()
                                            .size(FONT_SIZE_16)
                                            .weight(FontWeight::Number(FONT_WEIGHT_4))
                                            .color_signal(theme().map(move |t| {
                                                if disabled {
                                                    match t {
                                                        Theme::Light => "oklch(45% 0.14 250)", // neutral_5 light
                                                        Theme::Dark => "oklch(55% 0.14 250)", // neutral_5 dark
                                                    }
                                                } else {
                                                    match t {
                                                        Theme::Light => "oklch(15% 0.14 250)", // neutral_9 light
                                                        Theme::Dark => "oklch(95% 0.14 250)", // neutral_11 dark
                                                    }
                                                }
                                            }))
                                        )
                                )
                                .item_signal(always(self.required).map(|required| {
                                    if required {
                                        Some(
                                            El::new()
                                                .child(Text::new("*"))
                                                .s(Font::new()
                                                    .size(FONT_SIZE_16)
                                                    .weight(FontWeight::Number(FONT_WEIGHT_5))
                                                    .color_signal(theme().map(|t| match t {
                                                        Theme::Light => "oklch(50% 0.21 30)", // error_7 light
                                                        Theme::Dark => "oklch(70% 0.21 30)", // error_7 dark
                                                    }))
                                                )
                                        )
                                    } else {
                                        None
                                    }
                                }))
                        )
                        .item_signal(always(self.description.clone()).map(move |desc| {
                            desc.map(|description| {
                                El::new()
                                    .child(Text::new(&description))
                                    .s(Font::new()
                                        .size(FONT_SIZE_14)
                                        .weight(FontWeight::Number(FONT_WEIGHT_4))
                                        .color_signal(theme().map(move |t| {
                                            if disabled {
                                                match t {
                                                    Theme::Light => "oklch(45% 0.14 250)", // neutral_5 light
                                                    Theme::Dark => "oklch(55% 0.14 250)", // neutral_5 dark
                                                }
                                            } else {
                                                match t {
                                                    Theme::Light => "oklch(35% 0.14 250)", // neutral_7 light
                                                    Theme::Dark => "oklch(75% 0.14 250)", // neutral_9 dark
                                                }
                                            }
                                        }))
                                    )
                            })
                        }))
                );

            items.push(main_row.unify());

            Column::new()
                .s(Gap::new().y(SPACING_4))
                .items(items)
                .unify()
        } else {
            switch_track.unify()
        }
    }
}

// Convenience function
pub fn switch() -> SwitchBuilder {
    SwitchBuilder::new()
}

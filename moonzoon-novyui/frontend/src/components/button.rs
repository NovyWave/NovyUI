// Button Component
// Research-validated pattern with MoonZoon styling and animation

use crate::tokens::*;
use crate::components::icon::*;
use zoon::*;
use futures_signals::signal::always;

#[derive(Clone, Copy, Debug, PartialEq)]
pub enum ButtonVariant {
    Primary,
    Secondary,
    Outline,
    Ghost,
    Link,
    Destructive,
}

#[derive(Clone, Copy, Debug, PartialEq)]
pub enum ButtonSize {
    Small,
    Medium,
    Large,
}

pub struct ButtonBuilder {
    label: Option<String>,
    variant: ButtonVariant,
    size: ButtonSize,
    disabled: bool,
    loading: bool,
    left_icon: Option<&'static str>,
    right_icon: Option<&'static str>,
    left_icon_aria_label: Option<String>,
    right_icon_aria_label: Option<String>,
    on_press: Option<Box<dyn Fn()>>,
    min_width: Option<u32>,
}

impl ButtonBuilder {
    pub fn new() -> Self {
        Self {
            label: None,
            variant: ButtonVariant::Primary,
            size: ButtonSize::Medium,
            disabled: false,
            loading: false,
            left_icon: None,
            right_icon: None,
            left_icon_aria_label: None,
            right_icon_aria_label: None,
            on_press: None,
            min_width: None,
        }
    }

    pub fn label(mut self, label: impl Into<String>) -> Self {
        self.label = Some(label.into());
        self
    }

    pub fn variant(mut self, variant: ButtonVariant) -> Self {
        self.variant = variant;
        self
    }

    pub fn size(mut self, size: ButtonSize) -> Self {
        self.size = size;
        self
    }

    pub fn disabled(mut self, disabled: bool) -> Self {
        self.disabled = disabled;
        self
    }

    pub fn loading(mut self, loading: bool) -> Self {
        self.loading = loading;
        self
    }

    pub fn left_icon(mut self, icon: &'static str) -> Self {
        self.left_icon = Some(icon);
        self
    }

    pub fn right_icon(mut self, icon: &'static str) -> Self {
        self.right_icon = Some(icon);
        self
    }

    pub fn left_icon_aria_label(mut self, label: impl Into<String>) -> Self {
        self.left_icon_aria_label = Some(label.into());
        self
    }

    pub fn right_icon_aria_label(mut self, label: impl Into<String>) -> Self {
        self.right_icon_aria_label = Some(label.into());
        self
    }

    pub fn min_width(mut self, width: u32) -> Self {
        self.min_width = Some(width);
        self
    }

    pub fn on_press<F>(mut self, handler: F) -> Self
    where
        F: Fn() + 'static,
    {
        self.on_press = Some(Box::new(handler));
        self
    }

    pub fn build(self) -> impl Element {
        let (hovered, hovered_signal) = Mutable::new_and_signal(false);
        let (focused, focused_signal) = Mutable::new_and_signal(false);
        let (pressed, pressed_signal) = Mutable::new_and_signal(false);

        // Size-based styling
        let (padding_x, padding_y, font_size, icon_size) = match self.size {
            ButtonSize::Small => (SPACING_12, SPACING_6, FONT_SIZE_14, IconSize::Small),
            ButtonSize::Medium => (SPACING_16, SPACING_8, FONT_SIZE_16, IconSize::Medium),
            ButtonSize::Large => (SPACING_20, SPACING_12, FONT_SIZE_18, IconSize::Large),
        };

        // Determine if this is an icon-only button
        let is_icon_only = self.label.is_none() && (self.left_icon.is_some() || self.right_icon.is_some());

        // Adjust padding for icon-only buttons
        let (final_padding_x, final_padding_y) = if is_icon_only {
            (padding_y, padding_y) // Square padding for icon-only buttons
        } else {
            (padding_x, padding_y)
        };

        // Create button content based on state and icons
        self.create_button_element(
            hovered_signal,
            focused_signal,
            pressed_signal,
            final_padding_x,
            final_padding_y,
            font_size,
            icon_size,
            hovered,
            focused,
            pressed,
        )
    }

    fn create_button_element(
        self,
        hovered_signal: impl Signal<Item = bool> + Unpin + 'static,
        focused_signal: impl Signal<Item = bool> + Unpin + 'static,
        pressed_signal: impl Signal<Item = bool> + Unpin + 'static,
        padding_x: u32,
        padding_y: u32,
        font_size: u32,
        icon_size: IconSize,
        hovered: Mutable<bool>,
        focused: Mutable<bool>,
        pressed: Mutable<bool>,
    ) -> impl Element {
        // Variant-based colors - unified signal approach
        let variant = self.variant;
        let disabled = self.disabled;
        let loading = self.loading;

        // Loading buttons should be disabled (like Vue implementation)
        let is_disabled = disabled || loading;

        let bg_color_signal = theme().map(move |t| match (variant, t) {
            (ButtonVariant::Primary, Theme::Light) => "oklch(55% 0.16 250)",
            (ButtonVariant::Primary, Theme::Dark) => "oklch(65% 0.16 250)",
            (ButtonVariant::Secondary, Theme::Light) => "oklch(88% 0.055 255)",
            (ButtonVariant::Secondary, Theme::Dark) => "oklch(30% 0.045 255)",
            (ButtonVariant::Outline, _) => "transparent",
            (ButtonVariant::Ghost, _) => "transparent",
            (ButtonVariant::Link, _) => "transparent",
            (ButtonVariant::Destructive, Theme::Light) => "oklch(50% 0.21 30)",
            (ButtonVariant::Destructive, Theme::Dark) => "oklch(70% 0.21 30)",
        });

        let hover_bg_color_signal = theme().map(move |t| match (variant, t) {
            (ButtonVariant::Primary, Theme::Light) => "oklch(45% 0.16 250)",
            (ButtonVariant::Primary, Theme::Dark) => "oklch(75% 0.16 250)",
            (ButtonVariant::Secondary, Theme::Light) => "oklch(80% 0.07 255)",
            (ButtonVariant::Secondary, Theme::Dark) => "oklch(45% 0.055 255)",
            (ButtonVariant::Outline, Theme::Light) => "oklch(90% 0.05 250)",
            (ButtonVariant::Outline, Theme::Dark) => "oklch(30% 0.05 250)",
            (ButtonVariant::Ghost, Theme::Light) => "oklch(90% 0.05 250)",
            (ButtonVariant::Ghost, Theme::Dark) => "oklch(30% 0.05 250)",
            (ButtonVariant::Link, Theme::Light) => "oklch(90% 0.05 250)",
            (ButtonVariant::Link, Theme::Dark) => "oklch(30% 0.05 250)",
            (ButtonVariant::Destructive, Theme::Light) => "oklch(40% 0.21 30)",
            (ButtonVariant::Destructive, Theme::Dark) => "oklch(80% 0.21 30)",
        });

        let text_color_signal = theme().map(move |t| match (variant, t) {
            (ButtonVariant::Primary, Theme::Light) => "oklch(99% 0.025 255)",
            (ButtonVariant::Primary, Theme::Dark) => "oklch(12% 0.025 255)",
            (ButtonVariant::Secondary, Theme::Light) => "oklch(55% 0.16 250)",
            (ButtonVariant::Secondary, Theme::Dark) => "oklch(65% 0.16 250)",
            (ButtonVariant::Outline, Theme::Light) => "oklch(55% 0.16 250)",
            (ButtonVariant::Outline, Theme::Dark) => "oklch(65% 0.16 250)",
            (ButtonVariant::Ghost, Theme::Light) => "oklch(55% 0.16 250)",
            (ButtonVariant::Ghost, Theme::Dark) => "oklch(65% 0.16 250)",
            (ButtonVariant::Link, Theme::Light) => "oklch(55% 0.16 250)",
            (ButtonVariant::Link, Theme::Dark) => "oklch(65% 0.16 250)",
            (ButtonVariant::Destructive, Theme::Light) => "oklch(99% 0.025 255)",
            (ButtonVariant::Destructive, Theme::Dark) => "oklch(12% 0.025 255)",
        });

        // Border color for Outline and Secondary variants
        let border_color_signal = theme().map(move |t| match (variant, t) {
            (ButtonVariant::Outline, Theme::Light) => "oklch(92% 0.045 255)",
            (ButtonVariant::Outline, Theme::Dark) => "oklch(30% 0.045 255)",
            (ButtonVariant::Secondary, Theme::Light) => "oklch(92% 0.045 255)", // neutral_3 light
            (ButtonVariant::Secondary, Theme::Dark) => "oklch(30% 0.045 255)",  // neutral_3 dark
            _ => "transparent",
        });

        // Create button content with icons and text
        let button_content = self.create_button_content(icon_size);



        Button::new()
            .s(Padding::new().x(padding_x).y(padding_y))
            .s(RoundedCorners::all(6))
            .s(Font::new().size(font_size).weight(FontWeight::Medium))
            .s(transition_colors())
            .s(Background::new().color_signal(
                if is_disabled {
                    // Disabled state - use exact Vue colors: neutral-5
                    neutral_5().boxed_local()
                } else {
                    map_ref! {
                        let hovered = hovered_signal,
                        let bg_color = bg_color_signal,
                        let hover_bg_color = hover_bg_color_signal =>
                        if *hovered {
                            *hover_bg_color
                        } else {
                            *bg_color
                        }
                    }.boxed_local()
                }.boxed_local()
            ))
            .s(Borders::all_signal(
                if is_disabled {
                    // Disabled state - use exact Vue colors: neutral-5 for border
                    neutral_5().map(|color| Border::new().width(1).color(color)).boxed_local()
                } else {
                    // Always use 1px border to prevent size changes
                    border_color_signal.map(|color| Border::new().width(1).color(color)).boxed_local()
                }.boxed_local()
            ))
            .s(Outline::with_signal_self(
                if is_disabled {
                    // No outline for disabled buttons
                    always(None).boxed_local()
                } else {
                    map_ref! {
                        let focused = focused_signal =>
                        if *focused {
                            Some(Outline::inner().width(2).color("oklch(0.7 0.15 250)"))
                        } else {
                            None
                        }
                    }.boxed_local()
                }.boxed_local()
            ))
            .s(Font::new().color_signal(
                if is_disabled {
                    // Disabled state - use exact Vue colors: neutral-7
                    neutral_7().boxed_local()
                } else {
                    text_color_signal.boxed_local()
                }.boxed_local()
            ))
            .s(Cursor::new(if is_disabled { CursorIcon::NotAllowed } else { CursorIcon::Pointer }))
            .update_raw_el(move |raw_el| {
                if is_disabled {
                    // Disabled state - use exact Vue opacity: 64%
                    raw_el.style("opacity", "0.64")
                } else {
                    raw_el.style("opacity", "1.0")
                }
            })
            .on_hovered_change(move |is_hovered| {
                if !is_disabled {
                    hovered.set(is_hovered);
                }
            })
            .on_focused_change(move |is_focused| {
                if !is_disabled {
                    focused.set(is_focused);
                }
            })
            .label(button_content)
            .on_press(move || {
                if !is_disabled {
                    if let Some(handler) = &self.on_press {
                        handler();
                    }
                }
            })
    }

    fn create_button_content(&self, icon_size: IconSize) -> RawElOrText {
        let has_label = self.label.is_some();
        let has_left_icon = self.left_icon.is_some();
        let has_right_icon = self.right_icon.is_some();
        let loading = self.loading;

        // If loading, show spinner instead of normal content
        if loading {
            return self.create_loading_content(icon_size, has_label, has_left_icon, has_right_icon);
        }

        match (has_left_icon, has_label, has_right_icon) {
            // Icon-only buttons
            (true, false, false) => {
                icon_str(self.left_icon.unwrap())
                    .size(icon_size)
                    .color(IconColor::Current)
                    .build()
                    .unify()
            }
            (false, false, true) => {
                icon_str(self.right_icon.unwrap())
                    .size(icon_size)
                    .color(IconColor::Current)
                    .build()
                    .unify()
            }
            // Both icons, no label (rare case)
            (true, false, true) => {
                Row::new()
                    .s(Align::new().center_y())
                    .s(Gap::new().x(SPACING_8))
                    .item(
                        icon_str(self.left_icon.unwrap())
                            .size(icon_size)
                            .color(IconColor::Current)
                            .build()
                    )
                    .item(
                        icon_str(self.right_icon.unwrap())
                            .size(icon_size)
                            .color(IconColor::Current)
                            .build()
                    )
                    .unify()
            }
            // Label with left icon
            (true, true, false) => {
                Row::new()
                    .s(Align::new().center_y())
                    .s(Gap::new().x(SPACING_8))
                    .item(
                        icon_str(self.left_icon.unwrap())
                            .size(icon_size)
                            .color(IconColor::Current)
                            .build()
                    )
                    .item(Text::new(self.label.as_ref().unwrap()))
                    .unify()
            }
            // Label with right icon
            (false, true, true) => {
                Row::new()
                    .s(Align::new().center_y())
                    .s(Gap::new().x(SPACING_8))
                    .item(Text::new(self.label.as_ref().unwrap()))
                    .item(
                        icon_str(self.right_icon.unwrap())
                            .size(icon_size)
                            .color(IconColor::Current)
                            .build()
                    )
                    .unify()
            }
            // Label with both icons
            (true, true, true) => {
                Row::new()
                    .s(Align::new().center_y())
                    .s(Gap::new().x(SPACING_8))
                    .item(
                        icon_str(self.left_icon.unwrap())
                            .size(icon_size)
                            .color(IconColor::Current)
                            .build()
                    )
                    .item(Text::new(self.label.as_ref().unwrap()))
                    .item(
                        icon_str(self.right_icon.unwrap())
                            .size(icon_size)
                            .color(IconColor::Current)
                            .build()
                    )
                    .unify()
            }
            // Label only
            (false, true, false) => {
                Text::new(self.label.as_ref().unwrap()).unify()
            }
            // Empty button (fallback)
            (false, false, false) => {
                Text::new("").unify()
            }
        }
    }

    fn create_loading_content(
        &self,
        icon_size: IconSize,
        has_label: bool,
        has_left_icon: bool,
        has_right_icon: bool,
    ) -> RawElOrText {
        // Create spinning animation using MoonZoon's Oscillator
        use crate::tokens::animation::create_spinner;
        let spinner_oscillator = create_spinner();

        // Loading spinner icon with rotation animation
        let spinner = El::new()
            .s(Width::exact(icon_size.to_px()))
            .s(Height::exact(icon_size.to_px()))
            .s(Align::center())
            .s(Transform::with_signal_self(
                spinner_oscillator
                    .signal()
                    .map(|factor| Transform::new().rotate(factor * 360.))
            ))
            .child(
                refresh_cw()
                    .size(icon_size)
                    .color(IconColor::Current)
                    .build()
            );

        if has_right_icon && !has_left_icon && has_label {
            // Right icon position: label + spinner
            Row::new()
                .s(Align::new().center_y())
                .s(Gap::new().x(SPACING_8))
                .item(Text::new(self.label.as_ref().unwrap()))
                .item(spinner)
                .unify()
        } else if has_label {
            // Default: spinner + label
            Row::new()
                .s(Align::new().center_y())
                .s(Gap::new().x(SPACING_8))
                .item(spinner)
                .item(Text::new(self.label.as_ref().unwrap()))
                .unify()
        } else {
            // Spinner only
            spinner.unify()
        }
    }
}

// Convenience function for creating buttons
pub fn button() -> ButtonBuilder {
    ButtonBuilder::new()
}

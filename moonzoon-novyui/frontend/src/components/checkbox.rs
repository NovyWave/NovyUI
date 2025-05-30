use zoon::*;
use crate::tokens::*;

// Checkbox sizes
#[derive(Debug, Clone, Copy)]
pub enum CheckboxSize {
    Small,   // 16px
    Medium,  // 20px
    Large,   // 24px
}

impl CheckboxSize {
    pub fn to_px(self) -> u32 {
        match self {
            CheckboxSize::Small => 16,
            CheckboxSize::Medium => 20,
            CheckboxSize::Large => 24,
        }
    }
}

// Checkbox builder
pub struct CheckboxBuilder {
    size: CheckboxSize,
    checked: bool,
    disabled: bool,
    label: Option<String>,
    on_change: Option<Box<dyn Fn(bool)>>,
}

impl CheckboxBuilder {
    pub fn new() -> Self {
        Self {
            size: CheckboxSize::Medium,
            checked: false,
            disabled: false,
            label: None,
            on_change: None,
        }
    }

    pub fn size(mut self, size: CheckboxSize) -> Self {
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

    pub fn on_change<F>(mut self, handler: F) -> Self
    where
        F: Fn(bool) + 'static
    {
        self.on_change = Some(Box::new(handler));
        self
    }

    pub fn build(self) -> impl Element {
        let size_px = self.size.to_px();
        let border_radius = 4;

        // Checkbox box
        let checkbox_box = El::new()
            .s(Width::exact(size_px))
            .s(Height::exact(size_px))
            .s(RoundedCorners::all(border_radius))
            .s(Borders::all(Border::new().width(2).color(
                if self.disabled {
                    "#9ca3af" // gray-400
                } else if self.checked {
                    "#3b82f6" // blue-500
                } else {
                    "#d1d5db" // gray-300
                }
            )))
            .s(Background::new().color(
                if self.disabled {
                    "#f3f4f6" // gray-100
                } else if self.checked {
                    "#3b82f6" // blue-500
                } else {
                    "#ffffff" // white
                }
            ))
            .s(Align::center())
            .child(
                if self.checked {
                    Text::new("✓")
                } else {
                    Text::new("")
                }
            );

        // Create the main element - simplified approach
        if let Some(label_text) = &self.label {
            // With label - use Row layout
            let mut row = Row::new()
                .s(Gap::new().x(SPACING_8))
                .s(Align::new().center_y())
                .item(checkbox_box)
                .item(
                    El::new()
                        .s(Font::new()
                            .size(FONT_SIZE_16)
                            .color(if self.disabled {
                                "#9ca3af" // gray-400
                            } else {
                                "#374151" // gray-700
                            })
                        )
                        .child(Text::new(label_text))
                );

            // Add interactivity if not disabled
            if !self.disabled {
                row = row.s(Cursor::new(CursorIcon::Pointer));

                if let Some(handler) = self.on_change {
                    let current_checked = self.checked;
                    row = row.on_click(move || handler(!current_checked));
                }
            }

            row.unify()
        } else {
            // Without label - just the checkbox
            let mut checkbox = checkbox_box;

            // Add interactivity if not disabled
            if !self.disabled {
                checkbox = checkbox.s(Cursor::new(CursorIcon::Pointer));

                if let Some(handler) = self.on_change {
                    let current_checked = self.checked;
                    checkbox = checkbox.on_click(move || handler(!current_checked));
                }
            }

            checkbox.unify()
        }
    }
}

// Convenience function
pub fn checkbox() -> CheckboxBuilder {
    CheckboxBuilder::new()
}

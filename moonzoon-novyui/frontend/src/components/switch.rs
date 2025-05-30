use zoon::*;
use crate::tokens::*;

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
}

// Switch builder
pub struct SwitchBuilder {
    size: SwitchSize,
    checked: bool,
    disabled: bool,
    on_change: Option<Box<dyn Fn(bool)>>,
}

impl SwitchBuilder {
    pub fn new() -> Self {
        Self {
            size: SwitchSize::Medium,
            checked: false,
            disabled: false,
            on_change: None,
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

    pub fn on_change<F>(mut self, handler: F) -> Self
    where
        F: Fn(bool) + 'static
    {
        self.on_change = Some(Box::new(handler));
        self
    }

    pub fn build(self) -> impl Element {
        let track_width = self.size.track_width();
        let track_height = self.size.track_height();
        let _thumb_size = self.size.thumb_size();
        let track_radius = track_height / 2;

        // Simplified switch - just show different background colors for now
        let background_color = if self.disabled {
            "#6b7280" // neutral-500
        } else if self.checked {
            "#3b82f6" // blue-500
        } else {
            "#6b7280" // neutral-500
        };

        // Simple text indicator for now
        let indicator = if self.checked { "ON" } else { "OFF" };

        let mut switch = El::new()
            .s(Width::exact(track_width))
            .s(Height::exact(track_height))
            .s(RoundedCorners::all(track_radius))
            .s(Background::new().color(background_color))
            .s(Align::center())
            .s(Font::new()
                .size(FONT_SIZE_12)
                .color_signal(neutral_11())
                .weight(FontWeight::Medium)
            )
            .child(Text::new(indicator));

        if !self.disabled {
            switch = switch.s(Cursor::new(CursorIcon::Pointer));

            if let Some(handler) = self.on_change {
                let current_checked = self.checked;
                switch = switch.on_click(move || handler(!current_checked));
            }
        }

        switch
    }
}

// Convenience function
pub fn switch() -> SwitchBuilder {
    SwitchBuilder::new()
}

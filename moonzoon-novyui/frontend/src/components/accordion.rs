use zoon::*;
use crate::tokens::*;

// Accordion item builder
pub struct AccordionItemBuilder {
    title: String,
    content: String,
    expanded: bool,
    disabled: bool,
}

impl AccordionItemBuilder {
    pub fn new(title: impl Into<String>, content: impl Into<String>) -> Self {
        Self {
            title: title.into(),
            content: content.into(),
            expanded: false,
            disabled: false,
        }
    }

    pub fn expanded(mut self, expanded: bool) -> Self {
        self.expanded = expanded;
        self
    }

    pub fn disabled(mut self, disabled: bool) -> Self {
        self.disabled = disabled;
        self
    }

    pub fn build(self) -> impl Element {
        // Simplified accordion item - static for now
        let expanded_text = if self.expanded { "−" } else { "+" };

        Column::new()
            .s(Width::fill())
            .s(Borders::all(Border::new().width(1).color("#e5e7eb"))) // gray-200
            .s(RoundedCorners::all(6))
            .item(
                // Header
                Row::new()
                    .s(Width::fill())
                    .s(Padding::new().x(SPACING_16).y(SPACING_12))
                    .s(Background::new().color("#f9fafb")) // gray-50
                    .s(Cursor::new(if self.disabled {
                        CursorIcon::NotAllowed
                    } else {
                        CursorIcon::Pointer
                    }))
                    .s(Align::new().center_y())
                    .item(
                        El::new()
                            .s(Width::fill())
                            .s(Font::new()
                                .size(FONT_SIZE_BASE)
                                .color(if self.disabled {
                                    "#9ca3af" // gray-400
                                } else {
                                    "#374151" // gray-700
                                })
                                .weight(FontWeight::Medium)
                            )
                            .child(Text::new(&self.title))
                    )
                    .item(
                        El::new()
                            .s(Font::new()
                                .size(FONT_SIZE_SM)
                                .color("#6b7280") // gray-500
                            )
                            .child(Text::new(expanded_text))
                    )
                    .on_click(move || {
                        // In a real implementation, this would toggle state
                    })
            )
            .item(
                if self.expanded {
                    Some(
                        El::new()
                            .s(Width::fill())
                            .s(Padding::new().x(SPACING_16).y(SPACING_12))
                            .s(Borders::new().top(Border::new().width(1).color("#e5e7eb"))) // gray-200
                            .s(Font::new()
                                .size(FONT_SIZE_SM)
                                .color("#6b7280") // gray-500
                            )
                            .child(Text::new(&self.content))
                    )
                } else {
                    None
                }
            )
    }
}

// Accordion builder
pub struct AccordionBuilder {
    items: Vec<AccordionItemBuilder>,
    allow_multiple: bool,
}

impl AccordionBuilder {
    pub fn new() -> Self {
        Self {
            items: Vec::new(),
            allow_multiple: false,
        }
    }

    pub fn item(mut self, item: AccordionItemBuilder) -> Self {
        self.items.push(item);
        self
    }

    pub fn allow_multiple(mut self, allow_multiple: bool) -> Self {
        self.allow_multiple = allow_multiple;
        self
    }

    pub fn build(self) -> impl Element {
        Column::new()
            .s(Width::fill())
            .s(Gap::new().y(SPACING_4))
            .items(self.items.into_iter().map(|item| item.build()))
    }
}

// Convenience functions
pub fn accordion() -> AccordionBuilder {
    AccordionBuilder::new()
}

pub fn accordion_item(title: impl Into<String>, content: impl Into<String>) -> AccordionItemBuilder {
    AccordionItemBuilder::new(title, content)
}

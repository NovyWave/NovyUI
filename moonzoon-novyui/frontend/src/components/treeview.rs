use zoon::*;
use crate::tokens::*;
use crate::theme::*;

// Tree node data
#[derive(Debug, Clone)]
pub struct TreeNode {
    pub id: String,
    pub label: String,
    pub children: Vec<TreeNode>,
    pub expanded: bool,
    pub selected: bool,
    pub disabled: bool,
    pub icon: Option<String>,
}

impl TreeNode {
    pub fn new(id: impl Into<String>, label: impl Into<String>) -> Self {
        Self {
            id: id.into(),
            label: label.into(),
            children: Vec::new(),
            expanded: false,
            selected: false,
            disabled: false,
            icon: None,
        }
    }

    pub fn with_children(mut self, children: Vec<TreeNode>) -> Self {
        self.children = children;
        self
    }

    pub fn expanded(mut self, expanded: bool) -> Self {
        self.expanded = expanded;
        self
    }

    pub fn selected(mut self, selected: bool) -> Self {
        self.selected = selected;
        self
    }

    pub fn disabled(mut self, disabled: bool) -> Self {
        self.disabled = disabled;
        self
    }

    pub fn icon(mut self, icon: impl Into<String>) -> Self {
        self.icon = Some(icon.into());
        self
    }

    pub fn has_children(&self) -> bool {
        !self.children.is_empty()
    }
}

// TreeView builder
pub struct TreeViewBuilder {
    nodes: Vec<TreeNode>,
    show_icons: bool,
    indent_size: u32,
    on_select: Option<Box<dyn Fn(String)>>,
    on_expand: Option<Box<dyn Fn(String, bool)>>,
}

impl TreeViewBuilder {
    pub fn new() -> Self {
        Self {
            nodes: Vec::new(),
            show_icons: true,
            indent_size: SPACING_16,
            on_select: None,
            on_expand: None,
        }
    }

    pub fn node(mut self, node: TreeNode) -> Self {
        self.nodes.push(node);
        self
    }

    pub fn nodes(mut self, nodes: Vec<TreeNode>) -> Self {
        self.nodes = nodes;
        self
    }

    pub fn show_icons(mut self, show_icons: bool) -> Self {
        self.show_icons = show_icons;
        self
    }

    pub fn indent_size(mut self, size: u32) -> Self {
        self.indent_size = size;
        self
    }

    pub fn on_select<F>(mut self, handler: F) -> Self
    where
        F: Fn(String) + 'static
    {
        self.on_select = Some(Box::new(handler));
        self
    }

    pub fn on_expand<F>(mut self, handler: F) -> Self
    where
        F: Fn(String, bool) + 'static
    {
        self.on_expand = Some(Box::new(handler));
        self
    }

    pub fn build(self) -> impl Element {
        let nodes = self.nodes;
        let show_icons = self.show_icons;
        let indent_size = self.indent_size;

        Column::new()
            .s(Width::fill())
            .s(Gap::new().y(SPACING_2))
            .items(
                nodes.into_iter().map(move |node| {
                    render_tree_node(node, 0, show_icons, indent_size)
                })
                .collect::<Vec<_>>()
            )
    }
}

fn render_tree_node(node: TreeNode, depth: u32, show_icons: bool, indent_size: u32) -> impl Element {
    let indent = depth * indent_size;
    let has_children = node.has_children();
    let disabled = node.disabled;
    let selected = node.selected;
    let expanded = node.expanded;

    // Create the main node row
    let node_row = Row::new()
        .s(Width::fill())
        .s(Padding::new().left(indent).x(SPACING_8).y(SPACING_4))
        .s(Background::new().color_signal(theme().map(move |t| {
            if selected {
                match t {
                    Theme::Light => "oklch(85% 0.22 250)", // primary_3 light
                    Theme::Dark => "oklch(25% 0.22 250)", // primary_3 dark
                }
            } else {
                "transparent"
            }
        })))
        .s(RoundedCorners::all(4))
        .s(Cursor::new(if disabled {
            CursorIcon::NotAllowed
        } else {
            CursorIcon::Pointer
        }))
        .s(Align::new().center_y())
        .s(Gap::new().x(SPACING_4))
        .item(
            // Expand/collapse icon
            El::new()
                .s(Width::exact(16))
                .s(Height::exact(16))
                .s(Align::center())
                .child(Text::new(if has_children {
                    if expanded { "▼" } else { "▶" }
                } else {
                    ""
                }))
                .s(Font::new()
                    .size(FONT_SIZE_12)
                    .color_signal(theme().map(move |t| {
                        if disabled {
                            match t {
                                Theme::Light => "oklch(45% 0.14 250)", // neutral_5 light
                                Theme::Dark => "oklch(55% 0.14 250)", // neutral_5 dark
                            }
                        } else {
                            match t {
                                Theme::Light => "oklch(65% 0.14 250)", // neutral_6 light
                                Theme::Dark => "oklch(55% 0.14 250)", // neutral_7 dark
                            }
                        }
                    }))
                )
        )
        .item_signal(always(show_icons).map(move |show| {
            if show {
                Some(
                    El::new()
                        .child(Text::new(
                            node.icon.as_deref().unwrap_or_else(|| {
                                if has_children {
                                    if expanded { "📂" } else { "📁" }
                                } else {
                                    "📄"
                                }
                            })
                        ))
                        .s(Font::new().size(FONT_SIZE_14))
                )
            } else {
                None
            }
        }))
        .item(
            El::new()
                .s(Width::fill())
                .child(Text::new(&node.label))
                .s(Font::new()
                    .size(FONT_SIZE_14)
                    .weight(FontWeight::Number(FONT_WEIGHT_4))
                    .color_signal(theme().map(move |t| {
                        if disabled {
                            match t {
                                Theme::Light => "oklch(45% 0.14 250)", // neutral_5 light
                                Theme::Dark => "oklch(55% 0.14 250)", // neutral_5 dark
                            }
                        } else if selected {
                            match t {
                                Theme::Light => "oklch(55% 0.22 250)", // primary_7 light
                                Theme::Dark => "oklch(65% 0.22 250)", // primary_7 dark
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
        .on_click(move || {
            if !disabled {
                // In a real implementation, this would trigger selection/expansion
            }
        });

    // Create the complete node with children
    let mut items = vec![node_row.unify()];

    // Add children if expanded
    if expanded && has_children {
        for child in node.children {
            items.push(render_tree_node(child, depth + 1, show_icons, indent_size).unify());
        }
    }

    Column::new()
        .s(Width::fill())
        .items(items)
}

// Convenience functions
pub fn tree_view() -> TreeViewBuilder {
    TreeViewBuilder::new()
}

pub fn tree_node(id: impl Into<String>, label: impl Into<String>) -> TreeNode {
    TreeNode::new(id, label)
}

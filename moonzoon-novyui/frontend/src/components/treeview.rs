use zoon::*;
use crate::tokens::*;

// Tree node data
#[derive(Debug, Clone)]
pub struct TreeNode {
    pub id: String,
    pub label: String,
    pub children: Vec<TreeNode>,
    pub expanded: bool,
    pub selected: bool,
}

impl TreeNode {
    pub fn new(id: impl Into<String>, label: impl Into<String>) -> Self {
        Self {
            id: id.into(),
            label: label.into(),
            children: Vec::new(),
            expanded: false,
            selected: false,
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
        Column::new()
            .s(Width::fill())
            .s(Gap::new().y(SPACING_2))
            .items(
                nodes.into_iter().map(|node| {
                    TreeViewBuilder::render_node_static(node, 0, self.show_icons)
                })
            )
    }

    fn render_node_static(node: TreeNode, depth: u32, show_icons: bool) -> impl Element {
        let indent = depth * SPACING_16;
        let has_children = !node.children.is_empty();

        let expand_icon = if has_children {
            if node.expanded { "▼" } else { "▶" }
        } else {
            " "
        };

        let node_icon = if show_icons {
            if has_children {
                if node.expanded { "📂" } else { "📁" }
            } else {
                "📄"
            }
        } else {
            ""
        };

        let background_color = if node.selected {
            "#e0e7ff" // blue-100
        } else {
            "transparent"
        };

        let text_color = if node.selected {
            "#1e40af" // blue-800
        } else {
            "#374151" // gray-700
        };

        // Create display text
        let display_text = if show_icons {
            format!("{} {} {}", expand_icon, node_icon, node.label)
        } else {
            format!("{} {}", expand_icon, node.label)
        };

        // Simplified node rendering
        El::new()
            .s(Width::fill())
            .s(Padding::new().left(indent).x(SPACING_8).y(SPACING_4))
            .s(Background::new().color(background_color))
            .s(RoundedCorners::all(4))
            .s(Cursor::new(CursorIcon::Pointer))
            .s(Font::new()
                .size(FONT_SIZE_14)
                .color(text_color)
            )
            .child(Text::new(&display_text))
            .on_click(move || {
                // In a real implementation, this would trigger selection
            })
    }
}

// Convenience functions
pub fn tree_view() -> TreeViewBuilder {
    TreeViewBuilder::new()
}

pub fn tree_node(id: impl Into<String>, label: impl Into<String>) -> TreeNode {
    TreeNode::new(id, label)
}

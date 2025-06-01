use zoon::*;
use crate::tokens::*;
use crate::components::*;
use std::collections::HashSet;

pub fn treeview_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_24))
        .item(h2("TreeView Component"))
        .item(small("TreeView displays hierarchical data in a tree structure with expandable/collapsible nodes."))

        // Basic TreeView
        .item(h3("Basic"))
        .item(small("Basic TreeView with default settings."))
        .item(
            tree_view()
                .data(vec![
                    tree_view_item("node1", "Documents")
                        .with_children(vec![
                            tree_view_item("node1-1", "Resume.pdf"),
                            tree_view_item("node1-2", "Cover Letter.docx"),
                        ]),
                    tree_view_item("node2", "Images")
                        .with_children(vec![
                            tree_view_item("node2-1", "vacation.jpg"),
                            tree_view_item("node2-2", "profile.png"),
                        ]),
                    tree_view_item("node3", "README.md"),
                ])
                .default_expanded(vec!["node1".to_string()])
                .aria_label("File tree")
                .build()
        )

        // File System Explorer
        .item(h3("File System Explorer"))
        .item(small("A file system explorer showing folders and files with appropriate icons and folder/file types."))
        .item(
            tree_view()
                .data(vec![
                    tree_view_item("src", "src")
                        .item_type(TreeViewItemType::Folder)
                        .with_children(vec![
                            tree_view_item("components", "components")
                                .item_type(TreeViewItemType::Folder)
                                .with_children(vec![
                                    tree_view_item("Button.vue", "Button.vue").item_type(TreeViewItemType::File),
                                    tree_view_item("Input.vue", "Input.vue").item_type(TreeViewItemType::File),
                                    tree_view_item("TreeView.vue", "TreeView.vue").item_type(TreeViewItemType::File),
                                ]),
                            tree_view_item("assets", "assets")
                                .item_type(TreeViewItemType::Folder)
                                .with_children(vec![
                                    tree_view_item("logo.svg", "logo.svg").item_type(TreeViewItemType::File),
                                    tree_view_item("styles.css", "styles.css").item_type(TreeViewItemType::File),
                                ]),
                            tree_view_item("main.ts", "main.ts").item_type(TreeViewItemType::File),
                            tree_view_item("App.vue", "App.vue").item_type(TreeViewItemType::File),
                        ]),
                    tree_view_item("public", "public")
                        .item_type(TreeViewItemType::Folder)
                        .with_children(vec![
                            tree_view_item("index.html", "index.html").item_type(TreeViewItemType::File),
                            tree_view_item("favicon.ico", "favicon.ico").item_type(TreeViewItemType::File),
                        ]),
                    tree_view_item("package.json", "package.json").item_type(TreeViewItemType::File),
                    tree_view_item("vite.config.ts", "vite.config.ts").item_type(TreeViewItemType::File),
                    tree_view_item("README.md", "README.md").item_type(TreeViewItemType::File),
                ])
                .default_expanded(vec!["src".to_string()])
                .aria_label("Project file explorer")
                .build()
        )

        // With Checkboxes
        .item(h3("With Checkboxes"))
        .item(small("TreeView with checkboxes for multi-selection."))
        .item(
            tree_view()
                .data(vec![
                    tree_view_item("permissions", "Permissions")
                        .with_children(vec![
                            tree_view_item("read", "Read"),
                            tree_view_item("write", "Write"),
                            tree_view_item("execute", "Execute"),
                        ]),
                    tree_view_item("features", "Features")
                        .with_children(vec![
                            tree_view_item("auth", "Authentication"),
                            tree_view_item("api", "API Access"),
                            tree_view_item("admin", "Admin Panel"),
                        ]),
                    tree_view_item("notifications", "Notifications"),
                ])
                .show_checkboxes(true)
                .default_expanded(vec!["permissions".to_string(), "features".to_string()])
                .default_selected(vec!["read".to_string(), "auth".to_string()])
                .aria_label("Permission settings")
                .build()
        )

        // Small Size
        .item(h3("Small Size"))
        .item(small("Compact TreeView with smaller text and spacing."))
        .item(
            tree_view()
                .data(vec![
                    tree_view_item("config", "Configuration")
                        .with_children(vec![
                            tree_view_item("database", "Database"),
                            tree_view_item("cache", "Cache"),
                            tree_view_item("logging", "Logging"),
                        ]),
                    tree_view_item("security", "Security")
                        .with_children(vec![
                            tree_view_item("ssl", "SSL/TLS"),
                            tree_view_item("cors", "CORS"),
                        ]),
                ])
                .size(TreeViewSize::Small)
                .default_expanded(vec!["config".to_string()])
                .aria_label("Small configuration tree")
                .build()
        )

        // Large Size
        .item(h3("Large Size"))
        .item(small("TreeView with larger text and spacing for better accessibility."))
        .item(
            tree_view()
                .data(vec![
                    tree_view_item("dashboard", "Dashboard")
                        .with_children(vec![
                            tree_view_item("analytics", "Analytics"),
                            tree_view_item("reports", "Reports"),
                        ]),
                    tree_view_item("settings", "Settings")
                        .with_children(vec![
                            tree_view_item("profile", "Profile"),
                            tree_view_item("preferences", "Preferences"),
                        ]),
                ])
                .size(TreeViewSize::Large)
                .default_expanded(vec!["dashboard".to_string()])
                .aria_label("Large navigation tree")
                .build()
        )

        // Bordered Variant
        .item(h3("Bordered"))
        .item(small("TreeView with a border around the container."))
        .item(
            tree_view()
                .data(vec![
                    tree_view_item("modules", "Modules")
                        .with_children(vec![
                            tree_view_item("auth", "Authentication"),
                            tree_view_item("payment", "Payment"),
                            tree_view_item("notification", "Notifications"),
                        ]),
                    tree_view_item("plugins", "Plugins")
                        .with_children(vec![
                            tree_view_item("analytics", "Analytics"),
                            tree_view_item("seo", "SEO Tools"),
                        ]),
                ])
                .variant(TreeViewVariant::Bordered)
                .default_expanded(vec!["modules".to_string()])
                .aria_label("Bordered module tree")
                .build()
        )

        // Elevated Variant
        .item(h3("Elevated"))
        .item(small("TreeView with shadow elevation for a floating appearance."))
        .item(
            tree_view()
                .data(vec![
                    tree_view_item("workspace", "Workspace")
                        .with_children(vec![
                            tree_view_item("projects", "Projects"),
                            tree_view_item("templates", "Templates"),
                            tree_view_item("shared", "Shared"),
                        ]),
                    tree_view_item("archive", "Archive")
                        .with_children(vec![
                            tree_view_item("2023", "2023"),
                            tree_view_item("2022", "2022"),
                        ]),
                ])
                .variant(TreeViewVariant::Elevated)
                .default_expanded(vec!["workspace".to_string()])
                .aria_label("Elevated workspace tree")
                .build()
        )

        // Without Icons
        .item(h3("Without Icons"))
        .item(small("TreeView with icons disabled for a cleaner text-only appearance."))
        .item(
            tree_view()
                .data(vec![
                    tree_view_item("categories", "Categories")
                        .with_children(vec![
                            tree_view_item("electronics", "Electronics")
                                .with_children(vec![
                                    tree_view_item("phones", "Phones"),
                                    tree_view_item("laptops", "Laptops"),
                                    tree_view_item("tablets", "Tablets"),
                                ]),
                            tree_view_item("clothing", "Clothing")
                                .with_children(vec![
                                    tree_view_item("mens", "Men's"),
                                    tree_view_item("womens", "Women's"),
                                    tree_view_item("kids", "Kids"),
                                ]),
                            tree_view_item("books", "Books")
                                .with_children(vec![
                                    tree_view_item("fiction", "Fiction"),
                                    tree_view_item("nonfiction", "Non-Fiction"),
                                    tree_view_item("technical", "Technical"),
                                ])
                        ])
                ])
                .show_icons(false)
                .default_expanded(vec!["categories".to_string()])
                .aria_label("Category tree without icons")
                .build()
        )

        // Deeply Nested
        .item(h3("Deeply Nested"))
        .item(small("TreeView with multiple levels of nesting to test deep hierarchies."))
        .item(
            tree_view()
                .data(vec![
                    tree_view_item("level1", "Level 1")
                        .with_children(vec![
                            tree_view_item("level2a", "Level 2A")
                                .with_children(vec![
                                    tree_view_item("level3a", "Level 3A")
                                        .with_children(vec![
                                            tree_view_item("level4a", "Level 4A"),
                                            tree_view_item("level4b", "Level 4B"),
                                        ]),
                                    tree_view_item("level3b", "Level 3B"),
                                ]),
                            tree_view_item("level2b", "Level 2B")
                                .with_children(vec![
                                    tree_view_item("level3c", "Level 3C"),
                                    tree_view_item("level3d", "Level 3D"),
                                ]),
                        ])
                ])
                .default_expanded(vec!["level1".to_string(), "level2a".to_string()])
                .aria_label("Deeply nested tree")
                .build()
        )

        // Interactive Example
        .item(h3("Interactive"))
        .item(small("Interactive example with control buttons and event logging. Check the browser console to see events."))
        .item(interactive_treeview_example())

        // With Disabled Items
        .item(h3("With Disabled Items"))
        .item(small("TreeView with some items disabled to show different states."))
        .item(
            tree_view()
                .data(vec![
                    tree_view_item("available", "Available Features")
                        .with_children(vec![
                            tree_view_item("basic", "Basic Plan"),
                            tree_view_item("standard", "Standard Plan"),
                        ]),
                    tree_view_item("premium", "Premium Features")
                        .disabled(true)
                        .with_children(vec![
                            tree_view_item("advanced", "Advanced Analytics").disabled(true),
                            tree_view_item("enterprise", "Enterprise Support").disabled(true),
                        ]),
                    tree_view_item("trial", "Trial Features")
                        .with_children(vec![
                            tree_view_item("limited", "Limited Access"),
                        ]),
                ])
                .default_expanded(vec!["available".to_string(), "premium".to_string()])
                .aria_label("Feature tree with disabled items")
                .build()
        )
}

fn interactive_treeview_example() -> impl Element {
    // Sample data matching the Vue Storybook example
    let tree_data = vec![
        tree_view_item("src", "src")
            .item_type(TreeViewItemType::Folder)
            .with_children(vec![
                tree_view_item("components", "components")
                    .item_type(TreeViewItemType::Folder),
                tree_view_item("utils", "utils")
                    .item_type(TreeViewItemType::Folder),
            ]),
        tree_view_item("public", "public")
            .item_type(TreeViewItemType::Folder)
            .with_children(vec![
                tree_view_item("assets", "assets")
                    .item_type(TreeViewItemType::Folder),
            ]),
        tree_view_item("package.json", "package.json")
            .item_type(TreeViewItemType::File),
        tree_view_item("vite.config.ts", "vite.config.ts")
            .item_type(TreeViewItemType::File),
        tree_view_item("README.md", "README.md")
            .item_type(TreeViewItemType::File),
    ];

    // Helper function to collect all folder IDs recursively
    fn collect_folder_ids(items: &[TreeViewItemData]) -> Vec<String> {
        let mut ids = Vec::new();
        for item in items {
            if item.has_children() {
                ids.push(item.id.clone());
                if let Some(children) = &item.children {
                    ids.extend(collect_folder_ids(children));
                }
            }
        }
        ids
    }

    // Helper function to collect all item IDs recursively
    fn collect_all_ids(items: &[TreeViewItemData]) -> Vec<String> {
        let mut ids = Vec::new();
        for item in items {
            ids.push(item.id.clone());
            if let Some(children) = &item.children {
                ids.extend(collect_all_ids(children));
            }
        }
        ids
    }

    let folder_ids = collect_folder_ids(&tree_data);
    let all_ids = collect_all_ids(&tree_data);

    // Create external state for controlling the TreeView
    let expanded_items = Mutable::new(HashSet::from_iter(vec!["src".to_string()]));
    let selected_items = Mutable::new(HashSet::<String>::new());

    // Create TreeView with external state control
    let tree_view_component = tree_view()
        .data(tree_data)
        .show_checkboxes(true)
        .show_icons(true)
        .external_expanded(expanded_items.clone())
        .external_selected(selected_items.clone())
        .aria_label("Interactive file tree")
        .build();

    Column::new()
        .s(Gap::new().y(SPACING_16))
        .s(Padding::new().x(SPACING_16).y(SPACING_16))
        .s(Background::new().color_signal(
            theme().map(|theme| match theme {
                Theme::Light => "oklch(98% 0.025 255)", // neutral_2 light - subtle
                Theme::Dark => "oklch(15% 0.025 255)",   // neutral_2 dark - subtle
            })
        ))
        .s(RoundedCorners::all(8))
        .s(Borders::all_signal(
            theme().map(|theme| match theme {
                Theme::Light => Border::new().width(1).color("oklch(92% 0.045 255)"), // neutral_3 light
                Theme::Dark => Border::new().width(1).color("oklch(30% 0.045 255)"),  // neutral_3 dark
            })
        ))
        // Control buttons with working TreeView external control
        .item(
            Row::new()
                .s(Gap::new().x(SPACING_8))
                .s(Align::new().left())
                .item(
                    button()
                        .label("Expand All")
                        .variant(ButtonVariant::Outline)
                        .size(ButtonSize::Small)
                        .on_press({
                            let expanded_items = expanded_items.clone();
                            let folder_ids = folder_ids.clone();
                            move || {
                                expanded_items.set(HashSet::from_iter(folder_ids.clone()));
                            }
                        })
                        .build()
                )
                .item(
                    button()
                        .label("Collapse All")
                        .variant(ButtonVariant::Outline)
                        .size(ButtonSize::Small)
                        .on_press({
                            let expanded_items = expanded_items.clone();
                            move || {
                                expanded_items.set(HashSet::new());
                            }
                        })
                        .build()
                )
                .item(
                    button()
                        .label("Select All")
                        .variant(ButtonVariant::Outline)
                        .size(ButtonSize::Small)
                        .on_press({
                            let selected_items = selected_items.clone();
                            let all_ids = all_ids.clone();
                            move || {
                                selected_items.set(HashSet::from_iter(all_ids.clone()));
                            }
                        })
                        .build()
                )
                .item(
                    button()
                        .label("Clear Selection")
                        .variant(ButtonVariant::Outline)
                        .size(ButtonSize::Small)
                        .on_press({
                            let selected_items = selected_items.clone();
                            move || {
                                selected_items.set(HashSet::new());
                            }
                        })
                        .build()
                )
        )
        // TreeView created once - no more recreation!
        .item(tree_view_component)
}

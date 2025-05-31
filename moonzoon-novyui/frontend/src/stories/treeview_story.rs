use zoon::*;
use crate::tokens::*;
use crate::components::*;

pub fn treeview_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("TreeView"))
        .item(small("File system example:"))
        .item(
            tree_view()
                .node(
                    tree_node("home", "🏠 Home")
                        .expanded(true)
                        .with_children(vec![
                            tree_node("documents", "📁 Documents")
                                .expanded(true)
                                .with_children(vec![
                                    tree_node("resume", "📄 Resume.pdf"),
                                    tree_node("cover", "📄 Cover Letter.docx"),
                                    tree_node("projects", "📁 Projects")
                                        .with_children(vec![
                                            tree_node("moonzoon", "🦀 MoonZoon"),
                                            tree_node("webapp", "🌐 Web App"),
                                            tree_node("mobile", "📱 Mobile App"),
                                        ])
                                ]),
                            tree_node("downloads", "📁 Downloads")
                                .with_children(vec![
                                    tree_node("software", "💾 software.zip"),
                                    tree_node("music", "🎵 music.mp3"),
                                    tree_node("video", "🎬 video.mp4"),
                                ]),
                            tree_node("pictures", "📁 Pictures")
                                .expanded(true)
                                .with_children(vec![
                                    tree_node("vacation", "🏖️ vacation.jpg"),
                                    tree_node("profile", "👤 profile.png"),
                                    tree_node("screenshots", "📁 Screenshots")
                                        .with_children(vec![
                                            tree_node("bug1", "🐛 bug-report-1.png"),
                                            tree_node("bug2", "🐛 bug-report-2.png"),
                                        ])
                                ])
                        ])
                )
                .build()
        )
        .item(small("Project structure example:"))
        .item(
            tree_view()
                .node(
                    tree_node("project", "🚀 My Rust Project")
                        .expanded(true)
                        .selected(true)
                        .with_children(vec![
                            tree_node("src", "📁 src")
                                .expanded(true)
                                .with_children(vec![
                                    tree_node("main", "🦀 main.rs"),
                                    tree_node("lib", "🦀 lib.rs"),
                                    tree_node("components", "📁 components")
                                        .expanded(true)
                                        .with_children(vec![
                                            tree_node("button", "🦀 button.rs"),
                                            tree_node("input", "🦀 input.rs"),
                                            tree_node("modal", "🦀 modal.rs"),
                                        ])
                                ]),
                            tree_node("tests", "📁 tests")
                                .with_children(vec![
                                    tree_node("integration", "🧪 integration.rs"),
                                    tree_node("unit", "🧪 unit.rs"),
                                ]),
                            tree_node("cargo", "📦 Cargo.toml"),
                            tree_node("readme", "📖 README.md"),
                            tree_node("license", "📜 LICENSE"),
                            tree_node("target", "📁 target")
                                .disabled(true)
                                .with_children(vec![
                                    tree_node("debug", "🔧 debug"),
                                    tree_node("release", "⚡ release"),
                                ])
                        ])
                )
                .build()
        )
        .item(small("Organization chart example:"))
        .item(
            tree_view()
                .node(
                    tree_node("ceo", "👑 CEO - Alice Johnson")
                        .expanded(true)
                        .with_children(vec![
                            tree_node("cto", "💻 CTO - Bob Smith")
                                .expanded(true)
                                .with_children(vec![
                                    tree_node("frontend", "🎨 Frontend Team")
                                        .with_children(vec![
                                            tree_node("dev1", "👨‍💻 John Doe"),
                                            tree_node("dev2", "👩‍💻 Jane Smith"),
                                            tree_node("designer", "🎨 Mike Wilson"),
                                        ]),
                                    tree_node("backend", "⚙️ Backend Team")
                                        .with_children(vec![
                                            tree_node("dev3", "👨‍💻 David Brown"),
                                            tree_node("dev4", "👩‍💻 Sarah Davis"),
                                            tree_node("devops", "🔧 Tom Anderson"),
                                        ])
                                ]),
                            tree_node("cmo", "📈 CMO - Carol White")
                                .with_children(vec![
                                    tree_node("marketing", "📢 Marketing Team"),
                                    tree_node("sales", "💰 Sales Team"),
                                ]),
                            tree_node("hr", "👥 HR - Diana Green")
                                .with_children(vec![
                                    tree_node("recruiting", "🔍 Recruiting"),
                                    tree_node("training", "📚 Training"),
                                ])
                        ])
                )
                .build()
        )
        .item(small("Without icons:"))
        .item(
            tree_view()
                .show_icons(false)
                .node(
                    tree_node("categories", "Categories")
                        .expanded(true)
                        .with_children(vec![
                            tree_node("electronics", "Electronics")
                                .with_children(vec![
                                    tree_node("phones", "Phones"),
                                    tree_node("laptops", "Laptops"),
                                    tree_node("tablets", "Tablets"),
                                ]),
                            tree_node("clothing", "Clothing")
                                .with_children(vec![
                                    tree_node("mens", "Men's"),
                                    tree_node("womens", "Women's"),
                                    tree_node("kids", "Kids"),
                                ]),
                            tree_node("books", "Books")
                                .with_children(vec![
                                    tree_node("fiction", "Fiction"),
                                    tree_node("nonfiction", "Non-Fiction"),
                                    tree_node("technical", "Technical"),
                                ])
                        ])
                )
                .build()
        )
        .item(small("Custom indentation:"))
        .item(
            tree_view()
                .indent_size(SPACING_24)
                .node(
                    tree_node("root", "🌳 Root")
                        .expanded(true)
                        .with_children(vec![
                            tree_node("branch1", "🌿 Branch 1")
                                .expanded(true)
                                .with_children(vec![
                                    tree_node("leaf1", "🍃 Leaf 1"),
                                    tree_node("leaf2", "🍃 Leaf 2"),
                                ]),
                            tree_node("branch2", "🌿 Branch 2")
                                .with_children(vec![
                                    tree_node("leaf3", "🍃 Leaf 3"),
                                    tree_node("leaf4", "🍃 Leaf 4"),
                                ])
                        ])
                )
                .build()
        )
}

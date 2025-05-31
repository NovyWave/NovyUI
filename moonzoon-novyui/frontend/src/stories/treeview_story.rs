use zoon::*;
use crate::tokens::*;
use crate::components::*;

pub fn treeview_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("TreeView"))
        .item(small("Basic tree structure:"))
        .item(
            tree_view()
                .node(
                    tree_node("docs", "Documents")
                        .expanded(true)
                        .with_children(vec![
                            tree_node("resume", "Resume.pdf"),
                            tree_node("cover", "Cover Letter.docx"),
                            tree_node("projects", "Projects")
                                .with_children(vec![
                                    tree_node("proj_a", "Project A"),
                                    tree_node("proj_b", "Project B"),
                                ])
                        ])
                )
                .node(
                    tree_node("images", "Images")
                        .with_children(vec![
                            tree_node("vacation", "vacation.jpg"),
                            tree_node("profile", "profile.png"),
                        ])
                )
                .node(
                    tree_node("downloads", "Downloads")
                        .expanded(true)
                        .with_children(vec![
                            tree_node("software", "software.zip"),
                            tree_node("music", "music.mp3"),
                        ])
                )
                .build()
        )
        .item(small("With icons:"))
        .item(
            tree_view()
                .show_icons(true)
                .node(
                    tree_node("root", "Root Folder")
                        .expanded(true)
                        .with_children(vec![
                            tree_node("file1", "File 1.txt"),
                            tree_node("file2", "File 2.txt"),
                            tree_node("subfolder", "Subfolder")
                                .with_children(vec![
                                    tree_node("nested", "Nested File.txt"),
                                ])
                        ])
                )
                .build()
        )
}

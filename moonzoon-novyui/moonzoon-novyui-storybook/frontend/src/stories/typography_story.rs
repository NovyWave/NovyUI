use zoon::*;
use moonzoon_novyui::*;
use crate::stories::template::*;

pub fn typography_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_32))
        .s(Align::new().left())
        .item(component_section(
            "Typography",
            "Text styling and hierarchy components including headings, body text, code snippets, and specialized text variants. Essential for content structure and readability throughout the interface."
        ))

        // Heading stories
        .item(story_section("Headings", "Hierarchical heading levels from H1 to H6",
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .item(h1("Heading 1 - Main page title"))
                .item(h2("Heading 2 - Section title"))
                .item(h3("Heading 3 - Subsection title"))
                .item(h4("Heading 4 - Component title"))
                .item(h5("Heading 5 - Small section"))
                .item(h6("Heading 6 - Smallest heading"))
        ))

        // Body text stories
        .item(story_section("Body Text", "Different text variants for content and descriptions",
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .item(paragraph("This is a regular paragraph with normal body text. It should be easy to read and have good contrast against the background."))
                .item(small("This is small text, often used for captions, footnotes, or secondary information."))
                .item(lead("This is lead text that stands out from regular paragraphs."))
        ))

        // Code stories
        .item(story_section("Code Examples", "Inline code snippets with monospace font",
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .item(code("console.log('Hello, World!')"))
                .item(code("fn main() { println!(\"Hello, Rust!\"); }"))
                .item(code("const greeting = 'Hello, TypeScript!';"))
        ))

        // Muted text stories
        .item(story_section("Muted Text", "Subdued text for secondary information",
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .item(muted("This is muted text for less important information."))
                .item(muted("Secondary information or helper text."))
        ))
}

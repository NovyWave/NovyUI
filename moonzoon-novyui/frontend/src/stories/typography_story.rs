use zoon::*;
use crate::tokens::*;
use crate::components::*;

pub fn typography_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Typography"))
        .item(small("Headings:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .item(h1("Heading 1 - Main page title"))
                .item(h2("Heading 2 - Section title"))
                .item(h3("Heading 3 - Subsection title"))
                .item(h4("Heading 4 - Component title"))
                .item(h5("Heading 5 - Small section"))
                .item(h6("Heading 6 - Smallest heading"))
        )
        .item(small("Body text:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .item(paragraph("This is a regular paragraph with normal body text. It should be easy to read and have good contrast against the background."))
                .item(small("This is small text, often used for captions, footnotes, or secondary information."))
                .item(lead("This is lead text that stands out from regular paragraphs."))
        )
        .item(small("Code examples:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .item(code("console.log('Hello, World!')"))
                .item(code("fn main() { println!(\"Hello, Rust!\"); }"))
                .item(code("const greeting = 'Hello, TypeScript!';"))
        )
        .item(small("Muted text:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_8))
                .item(muted("This is muted text for less important information."))
                .item(muted("Secondary information or helper text."))
        )

}

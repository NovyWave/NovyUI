use zoon::*;
use crate::tokens::*;
use crate::components::*;

pub fn accordion_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Accordion"))
        .item(small("Basic accordion:"))
        .item(
            accordion()
                .item(
                    accordion_item("What is MoonZoon?", "MoonZoon is a Rust framework for building web applications with a focus on simplicity and performance.")
                        .expanded(true)
                )
                .item(
                    accordion_item("How does it work?", "MoonZoon uses Rust's type system to provide compile-time guarantees and excellent performance.")
                )
                .item(
                    accordion_item("Why choose MoonZoon?", "MoonZoon offers type safety, performance, and a great developer experience.")
                )
                .build()
        )
        .item(small("With disabled item:"))
        .item(
            accordion()
                .item(
                    accordion_item("Available Feature", "This feature is available and can be expanded.")
                )
                .item(
                    accordion_item("Disabled Feature", "This feature is disabled.")
                        .disabled(true)
                )
                .item(
                    accordion_item("Another Feature", "This is another available feature with more detailed information about its capabilities.")
                        .expanded(true)
                )
                .build()
        )
}

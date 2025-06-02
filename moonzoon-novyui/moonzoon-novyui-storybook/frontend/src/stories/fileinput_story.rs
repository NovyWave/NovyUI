use zoon::*;
use moonzoon_novyui::*;



pub fn fileinput_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("FileInput"))
        .item(small("Different variants:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(file_input().variant(FileInputVariant::Default).build())
                .item(file_dropzone().build())
                .item(file_button().build())
        )
        .item(small("Different states:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(file_input().placeholder("Choose a file...").build())
                .item(file_input().disabled(true).placeholder("Disabled file input").build())
                .item(file_input().placeholder("File input").build())
        )
        .item(small("With file type restrictions:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(file_input().accept(FileType::Images).placeholder("Images only").build())
                .item(file_input().accept(FileType::Documents).placeholder("Documents only").build())
                .item(file_input().accept(FileType::Custom(vec!["text/*".to_string()])).placeholder("Text files only").build())
        )
        .item(small("Multiple file selection:"))
        .item(
            file_input()
                .multiple(true)
                .placeholder("Select multiple files...")
                .build()
        )
}

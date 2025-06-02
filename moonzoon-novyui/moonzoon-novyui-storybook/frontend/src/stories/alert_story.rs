use zoon::*;
use moonzoon_novyui::*;



pub fn alert_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Alert"))
        .item(small("Different variants:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(alert("This is an informational message.").variant(AlertVariant::Info).build())
                .item(alert("Operation completed successfully!").variant(AlertVariant::Success).build())
                .item(alert("Please review your input before proceeding.").variant(AlertVariant::Warning).build())
                .item(alert("An error occurred while processing your request.").variant(AlertVariant::Error).build())
                .item(alert("This is a default alert message.").variant(AlertVariant::Default).build())
        )
        .item(small("With titles:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(alert("Here are some additional details about this feature.").variant(AlertVariant::Info).title("Information").build())
                .item(alert("Your changes have been saved to the database.").variant(AlertVariant::Success).title("Success").build())
                .item(alert("This action cannot be undone once confirmed.").variant(AlertVariant::Warning).title("Warning").build())
                .item(alert("Please check your network connection and try again.").variant(AlertVariant::Error).title("Error").build())
        )
        .item(small("Dismissible alerts:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(alert("Click the × to dismiss this alert.").variant(AlertVariant::Info).title("Dismissible Info").dismissible(true).build())
                .item(alert("This alert can be closed by the user.").variant(AlertVariant::Success).dismissible(true).build())
        )
        .item(small("Without icons:"))
        .item(
            Column::new()
                .s(Gap::new().y(SPACING_12))
                .item(alert("This alert doesn't show an icon.").variant(AlertVariant::Info).show_icon(false).build())
                .item(alert("Clean text-only alert message.").variant(AlertVariant::Default).title("No Icon").show_icon(false).build())
        )
}

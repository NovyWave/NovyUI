use zoon::*;
use crate::tokens::*;
use crate::components::*;

pub fn accordion_examples() -> impl Element {
    Column::new()
        .s(Gap::new().y(SPACING_16))
        .item(h4("Accordion"))
        .item(small("Basic accordion (single expand):"))
        .item(
            accordion()
                .item(accordion_item("Getting Started", "Learn the basics of our platform with this comprehensive guide. This section covers installation, setup, and your first steps."))
                .item(accordion_item("Advanced Features", "Explore powerful features that will help you get the most out of our platform. Includes API documentation and examples."))
                .item(accordion_item("Troubleshooting", "Common issues and their solutions. Find answers to frequently asked questions and debugging tips."))
                .build()
        )
        .item(small("Allow multiple expanded:"))
        .item(
            accordion()
                .allow_multiple(true)
                .item(accordion_item("Project Overview", "Get an overview of your current projects, their status, and recent activity."))
                .item(accordion_item("Team Members", "Manage team members, their roles, and permissions within your organization."))
                .item(accordion_item("Recent Activity", "View recent changes, updates, and notifications from your team."))
                .build()
        )
        .item(small("With disabled items:"))
        .item(
            accordion()
                .item(accordion_item("Available Feature", "This feature is available and ready to use."))
                .item(accordion_item("Premium Feature (Disabled)", "This feature requires a premium subscription to access.").disabled(true))
                .item(accordion_item("Beta Feature (Disabled)", "This feature is currently in development and not yet available.").disabled(true))
                .item(accordion_item("Another Available Feature", "This feature is also available for all users."))
                .build()
        )
        .item(small("FAQ Example:"))
        .item(
            accordion()
                .item(accordion_item("How do I reset my password?", "To reset your password, click on the 'Forgot Password' link on the login page. Enter your email address and follow the instructions sent to your email."))
                .item(accordion_item("Can I change my subscription plan?", "Yes, you can upgrade or downgrade your subscription plan at any time from your account settings. Changes will be reflected in your next billing cycle."))
                .item(accordion_item("How do I contact support?", "You can contact our support team through the help center, email us at support@example.com, or use the live chat feature available 24/7."))
                .item(accordion_item("Is my data secure?", "We take data security seriously. All data is encrypted in transit and at rest, and we follow industry best practices for data protection."))
                .build()
        )
}

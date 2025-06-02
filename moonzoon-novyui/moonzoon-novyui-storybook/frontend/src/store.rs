use zoon::*;

#[derive(Clone, Copy, Debug, PartialEq)]
pub enum ComponentPage {
    All,
    Badge,
    Button,
    Checkbox,
    Icon,
    Input,
    Kbd,
    Select,
    Switch,
    TreeView,
    Typography,
}

impl ComponentPage {
    pub fn name(&self) -> &'static str {
        match self {
            ComponentPage::All => "All Components",
            ComponentPage::Badge => "Badge",
            ComponentPage::Button => "Buttons",
            ComponentPage::Checkbox => "Checkbox",
            ComponentPage::Icon => "Icons",
            ComponentPage::Input => "Inputs",
            ComponentPage::Kbd => "Kbd",
            ComponentPage::Select => "Select",
            ComponentPage::Switch => "Switch",
            ComponentPage::TreeView => "TreeView",
            ComponentPage::Typography => "Typography",
        }
    }
}

impl Default for ComponentPage {
    fn default() -> Self {
        ComponentPage::All
    }
}

#[derive(Default)]
pub struct Store {
    pub current_component: Mutable<ComponentPage>,
}

pub static STORE: Lazy<Store> = Lazy::new(Store::default);

pub fn store() -> &'static Store {
    &STORE
}

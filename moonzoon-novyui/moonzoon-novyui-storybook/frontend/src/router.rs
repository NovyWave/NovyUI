use crate::*;
use zoon::*;

pub static ROUTER: Lazy<Router<Route>> = Lazy::new(|| {
    Router::new(|route| async move {
        match route {
            Some(Route::Badge) => {
                store().current_component.set(ComponentPage::Badge);
            }
            Some(Route::Button) => {
                store().current_component.set(ComponentPage::Button);
            }
            Some(Route::Checkbox) => {
                store().current_component.set(ComponentPage::Checkbox);
            }
            Some(Route::Icon) => {
                store().current_component.set(ComponentPage::Icon);
            }
            Some(Route::Input) => {
                store().current_component.set(ComponentPage::Input);
            }
            Some(Route::Kbd) => {
                store().current_component.set(ComponentPage::Kbd);
            }
            Some(Route::Select) => {
                store().current_component.set(ComponentPage::Select);
            }
            Some(Route::Switch) => {
                store().current_component.set(ComponentPage::Switch);
            }
            Some(Route::TreeView) => {
                store().current_component.set(ComponentPage::TreeView);
            }
            Some(Route::Typography) => {
                store().current_component.set(ComponentPage::Typography);
            }
            Some(Route::Root) | None => {
                store().current_component.set(ComponentPage::All);
            }
        }
    })
});

#[route]
#[derive(Clone, Debug)]
pub enum Route {
    #[route("badge")]
    Badge,
    
    #[route("button")]
    Button,
    
    #[route("checkbox")]
    Checkbox,
    
    #[route("icon")]
    Icon,
    
    #[route("input")]
    Input,
    
    #[route("kbd")]
    Kbd,
    
    #[route("select")]
    Select,
    
    #[route("switch")]
    Switch,
    
    #[route("treeview")]
    TreeView,
    
    #[route("typography")]
    Typography,
    
    #[route()]
    Root,
}

pub fn router() -> &'static Router<Route> {
    &ROUTER
}

pub fn navigate_to_component(component: ComponentPage) {
    let route = match component {
        ComponentPage::Badge => Route::Badge,
        ComponentPage::Button => Route::Button,
        ComponentPage::Checkbox => Route::Checkbox,
        ComponentPage::Icon => Route::Icon,
        ComponentPage::Input => Route::Input,
        ComponentPage::Kbd => Route::Kbd,
        ComponentPage::Select => Route::Select,
        ComponentPage::Switch => Route::Switch,
        ComponentPage::TreeView => Route::TreeView,
        ComponentPage::Typography => Route::Typography,
        ComponentPage::All => Route::Root,
    };
    router().go(route);
}

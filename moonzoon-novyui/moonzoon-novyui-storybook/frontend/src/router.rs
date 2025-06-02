use crate::*;
use zoon::*;

pub static ROUTER: Lazy<Router<Route>> = Lazy::new(|| {
    Router::new(|route| async move {
        match route {
            Some(Route::Badge) => {
                store().current_component.set(ComponentPage::Badge);
                scroll_to_top();
            }
            Some(Route::Button) => {
                store().current_component.set(ComponentPage::Button);
                scroll_to_top();
            }
            Some(Route::Checkbox) => {
                store().current_component.set(ComponentPage::Checkbox);
                scroll_to_top();
            }
            Some(Route::Icon) => {
                store().current_component.set(ComponentPage::Icon);
                scroll_to_top();
            }
            Some(Route::Input) => {
                store().current_component.set(ComponentPage::Input);
                scroll_to_top();
            }
            Some(Route::Kbd) => {
                store().current_component.set(ComponentPage::Kbd);
                scroll_to_top();
            }
            Some(Route::Select) => {
                store().current_component.set(ComponentPage::Select);
                scroll_to_top();
            }
            Some(Route::Switch) => {
                store().current_component.set(ComponentPage::Switch);
                scroll_to_top();
            }
            Some(Route::TreeView) => {
                store().current_component.set(ComponentPage::TreeView);
                scroll_to_top();
            }
            Some(Route::Typography) => {
                store().current_component.set(ComponentPage::Typography);
                scroll_to_top();
            }
            Some(Route::Root) | None => {
                store().current_component.set(ComponentPage::All);
                scroll_to_top();
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

fn scroll_to_top() {
    // Emit ScrollToTop event - following MoonZoon viewport example pattern
    emit(ScrollToTop);
}

// Event for scrolling to top
#[derive(Clone, Copy)]
pub struct ScrollToTop;

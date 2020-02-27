import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RecipeComponent} from './recipe/recipe.component';
import {RecipeListComponent} from './recipe/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipe/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recipe/recipe-list/recipe-item/recipe-item.component';
import {ShopingListComponent} from './shoping-list/shoping-list.component';
import {ShopingEditComponent} from './shoping-list/shoping-edit/shoping-edit.component';
// <<<<<<< HEAD
// =======
import {DropdownDirective} from './shared/directives/dropdown.directive';

// <<<<<<< session-26

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShopingListComponent,
// <<<<<<< HEAD
    ShopingEditComponent,
    DropdownDirective
// <<<<<<< session-26
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

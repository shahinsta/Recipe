import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected: EventEmitter<RecipeModel> = new EventEmitter<RecipeModel>();

  recipes: RecipeModel[] = [
    new RecipeModel(
      'دستور پخت ماکارونی',
      'توضیح دستور پخت ماکارونی',
      'https://cocinamia.com.mx/wp-content/uploads/2018/11/Sin-ti%CC%81tulo-1-24-1100x500.png'
    ),
    new RecipeModel(
      'دستور پخت پیتزا',
      'توضیح دستور پیتزا',
      'https://cocinamia.com.mx/wp-content/uploads/2018/11/Sin-ti%CC%81tulo-1-24-1100x500.png'
    ),
    new RecipeModel(
      'دستور پخت قرمه سبزی',
      'توضیح دستور پخت قرمه سبزی',
      'https://cocinamia.com.mx/wp-content/uploads/2018/11/Sin-ti%CC%81tulo-1-24-1100x500.png'
    )
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectRecipe(event) {
    this.recipeSelected.emit(event);
  }

}

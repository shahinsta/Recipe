import {Component, OnInit} from '@angular/core';
import {RecipeModel} from '../shared/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipeSelected: RecipeModel;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectRecipe(event) {
    this.recipeSelected = event;
  }

}

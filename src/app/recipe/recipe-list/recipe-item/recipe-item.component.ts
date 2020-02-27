import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../../../shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModel;
  @Output() selectedRecipe: EventEmitter<RecipeModel> = new EventEmitter<RecipeModel>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectRecipe() {
    this.selectedRecipe.emit(this.recipe);
  }

}

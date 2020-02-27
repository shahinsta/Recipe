import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeSelected: RecipeModel;
  constructor() { }

  ngOnInit(): void {
  }

}

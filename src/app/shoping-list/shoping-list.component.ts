import {Component, OnInit} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients: IngredientModel[] = [
    new IngredientModel(
      'بسته ماکارونی', 2
    ),
    new IngredientModel(
      'پیاز', 1
    )
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

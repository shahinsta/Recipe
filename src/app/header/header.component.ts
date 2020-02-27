import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() recipeLoaded: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(value) {
    if (value === 'recipe') {
      this.recipeLoaded.emit(value);
    } else if (value === 'shopping-list') {
      this.recipeLoaded.emit(value);
    }
  }

}

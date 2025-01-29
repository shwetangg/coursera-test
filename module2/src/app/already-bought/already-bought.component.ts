import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListCheckOffService } from '../services/shopping-list-check-off.service';

@Component({
  selector: 'app-already-bought',
  template: `
    <h2>Already Bought:</h2>
    <div class="list">
      <ul>
        <li *ngFor="let item of items" class="liwidth">
          Bought {{item.quantity}} {{item.name}}
        </li>
      </ul>
      <p class="message" *ngIf="items.length === 0">Nothing bought yet</p>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class AlreadyBoughtComponent {
  items;

  constructor(private shoppingListService: ShoppingListCheckOffService) {
    this.items = this.shoppingListService.getBoughtItems();
  }
}

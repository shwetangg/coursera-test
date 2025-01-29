import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListCheckOffService } from '../services/shopping-list-check-off.service';

@Component({
  selector: 'app-to-buy',
  template: `
    <h2>To Buy:</h2>
    <div class="list">
      <ul>
        <li *ngFor="let item of items; let i = index"  class="liwidth">
          Buy {{item.quantity}} {{item.name}}
          <button (click)="buyItem(i)" class="btnspace">Bought</button>
        </li>
      </ul>
      <p class="message" *ngIf="items.length === 0">Everything is bought!</p>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class ToBuyComponent {
  items;

  constructor(private shoppingListService: ShoppingListCheckOffService) {
    this.items = this.shoppingListService.getToBuyItems();
  }

  buyItem(index: number) {
    this.shoppingListService.buyItem(index);
  }
}
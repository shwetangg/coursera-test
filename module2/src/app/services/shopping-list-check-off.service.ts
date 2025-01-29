import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListCheckOffService {
  private toBuyItems = [
    { name: 'cookies', quantity: 10 },
    { name: 'milk', quantity: 2 },
    { name: 'bread', quantity: 1 },
    { name: 'apples', quantity: 5 },
    { name: 'juice', quantity: 3 }
  ];

  private boughtItems = [];

  buyItem(index: number) {
    const item = this.toBuyItems[index];
    this.toBuyItems.splice(index, 1);
    this.boughtItems.push(item);
  }

  getToBuyItems() {
    return this.toBuyItems;
  }

  getBoughtItems() {
    return this.boughtItems;
  }
}

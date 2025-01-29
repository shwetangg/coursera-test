import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToBuyComponent } from './to-buy/to-buy.component';
import { AlreadyBoughtComponent } from './already-bought/already-bought.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="list-container row">
        <div class="col-md-6">
          <app-to-buy></app-to-buy>
        </div>
        <div class="col-md-6">
          <app-already-bought></app-already-bought>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, ToBuyComponent, AlreadyBoughtComponent]
})
export class AppComponent { }

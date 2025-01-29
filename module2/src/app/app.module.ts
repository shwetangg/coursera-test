import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShoppingListCheckOffService } from './services/shopping-list-check-off.service';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent // Import AppComponent as a standalone component
  ],
  providers: [ShoppingListCheckOffService],
  bootstrap: [AppComponent] // Add this line to bootstrap the AppComponent
})
export class AppModule { }
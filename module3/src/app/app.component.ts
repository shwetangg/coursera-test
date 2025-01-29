import { Component, inject, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { MenuSearchService } from './menu-search.service';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [MenuSearchService]
})
export class AppComponent implements OnInit {
  title = 'Narrow It Down App';
  searchTerm: string = '';
  found: any[] = [];
  menuSearchService = inject(MenuSearchService);

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  narrowDown() {
    if (this.searchTerm.trim() === '') {
      this.found = [];
      return;
    }

    this.menuSearchService.getMatchedMenuItems(this.searchTerm)
      .subscribe(
        items => this.found = items,
        error => console.error(error)
      );
  }

  removeItem(index: number) {
    this.found.splice(index, 1);
  }
}

bootstrapApplication(AppComponent, {
  providers: [Title]
});

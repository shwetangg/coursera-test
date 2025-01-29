import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuSearchService {
  private apiUrl = 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json';

  constructor(private http: HttpClient) {}

  getMatchedMenuItems(searchTerm: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        map(response => {
          const foundItems = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              const item = response[key];
              if (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                foundItems.push(item);
              }
            }
          }
          return foundItems;
        })
      );
  }
}

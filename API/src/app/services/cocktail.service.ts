import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

  constructor(private http: HttpClient) {}

  getCocktails(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

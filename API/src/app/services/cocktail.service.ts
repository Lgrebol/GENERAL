import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

  constructor(private http: HttpClient) {}

  getCocktails(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}filter.php?c=Cocktail`);
  }

  getCocktailById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}lookup.php?i=${id}`);
  }
}

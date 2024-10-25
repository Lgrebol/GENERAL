import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';

  constructor(private http: HttpClient) {}

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.apiUrl);
  }
}
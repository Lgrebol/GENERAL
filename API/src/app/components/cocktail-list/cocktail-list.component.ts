// src/app/components/cocktail-list/cocktail-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [];  // Define type explicitly

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe((data) => {
      this.cocktails = data;
    });
  }
}

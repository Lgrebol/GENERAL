import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent implements OnInit {
  cocktails: any[] = [];

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailService.getMargaritaCocktails().subscribe((data) => {
      this.cocktails = data.drinks;
    });
  }
}

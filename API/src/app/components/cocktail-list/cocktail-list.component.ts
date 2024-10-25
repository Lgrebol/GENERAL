import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
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

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngFor
import { CocktailService } from '../../services/cocktail.service';

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here for ngFor
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [];

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe((data) => {
      this.cocktails = data;
    });
  }
}

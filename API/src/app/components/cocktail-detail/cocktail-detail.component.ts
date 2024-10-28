import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-cocktail-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.css'],
})
export class CocktailDetailComponent implements OnInit {
  cocktail: any;

  constructor(private route: ActivatedRoute, private cocktailService: CocktailService) {}

  ngOnInit(): void {
    const cocktailId = this.route.snapshot.paramMap.get('id');
    if (cocktailId) {
      this.cocktailService.getCocktailById(cocktailId).subscribe((data) => {
        this.cocktail = data.drinks[0];
      });
    }
  }

  getIngredients(cocktail: any): string[] {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      const measure = cocktail[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${measure ? measure : ''} ${ingredient}`.trim());
      }
    }
    return ingredients;
  }
}

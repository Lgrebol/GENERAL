// src/app/components/cocktail-list/cocktail-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailService } from '../../services/cocktail.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, RouterModule],
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent implements OnInit {
  cocktails: any[] = [];
  currentPage = 1;
  itemsPerPage = 5;

  constructor(private cocktailService: CocktailService, private router: Router) {}

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe((data) => {
      this.cocktails = data.drinks;
    });
  }

  goToDetail(cocktailId: string): void {
    this.router.navigate(['/cocktails', cocktailId]);
  }
}

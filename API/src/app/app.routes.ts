import { Routes } from '@angular/router';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { CocktailDetailComponent } from './components/cocktail-detail/cocktail-detail.component';

export const routes: Routes = [
  { path: 'cocktails', component: CocktailListComponent },
  { path: 'cocktails/:id', component: CocktailDetailComponent },
  { path: '', redirectTo: '/cocktails', pathMatch: 'full' },
];

import { Component } from '@angular/core';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CocktailListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Margarita Cocktails';
}

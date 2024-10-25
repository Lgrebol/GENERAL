import { Component } from '@angular/core';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CocktailListComponent, HttpClientModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Margarita Cocktails'; 
}
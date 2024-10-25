// src/app/components/cocktail-list/cocktail-list.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CocktailListComponent } from './cocktail-list.component';
import { CocktailService } from '../../services/cocktail.service';
import { of } from 'rxjs';

describe('CocktailListComponent', () => {
  let component: CocktailListComponent;
  let fixture: ComponentFixture<CocktailListComponent>;
  let cocktailService: CocktailService;

  beforeEach(() => {
    const cocktailServiceMock = {
      getCocktails: () => of([{ idDrink: '11007', strDrink: 'Margarita', strDrinkThumb: 'image_url' }])
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CocktailListComponent], 
      providers: [{ provide: CocktailService, useValue: cocktailServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(CocktailListComponent);
    component = fixture.componentInstance;
    cocktailService = TestBed.inject(CocktailService);
    fixture.detectChanges();
  });

  it('should display a list of cocktails', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.cocktail-name').textContent).toContain('Margarita');
  });
});

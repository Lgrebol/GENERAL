import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CocktailDetailComponent } from './cocktail-detail.component';
import { CocktailService } from '../../services/cocktail.service';

describe('CocktailDetailComponent', () => {
  let component: CocktailDetailComponent;
  let fixture: ComponentFixture<CocktailDetailComponent>;
  let cocktailService: jasmine.SpyObj<CocktailService>;
  const fakeActivatedRoute = {
    snapshot: { paramMap: { get: () => '11000' } },
  };

  beforeEach(async () => {
    const cocktailServiceSpy = jasmine.createSpyObj('CocktailService', ['getCocktailById']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CocktailDetailComponent],
      providers: [
        { provide: CocktailService, useValue: cocktailServiceSpy },
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CocktailDetailComponent);
    component = fixture.componentInstance;
    cocktailService = TestBed.inject(CocktailService) as jasmine.SpyObj<CocktailService>;
  });

  it('should create the cocktail detail component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch cocktail details on initialization', () => {
    const dummyCocktail = {
      drinks: [
        {
          idDrink: '11000',
          strDrink: 'Margarita',
          strDrinkThumb: 'https://example.com/margarita.jpg',
          strCategory: 'Cocktail',
          strGlass: 'Cocktail Glass',
          strInstructions: 'Mix all ingredients...',
          strIngredient1: 'Tequila',
          strIngredient2: 'Lime juice',
          strIngredient3: 'Triple sec',
        },
      ],
    };

    cocktailService.getCocktailById.and.returnValue(of(dummyCocktail));
    component.ngOnInit();

    expect(component.cocktail.strDrink).toEqual('Margarita');
    expect(component.cocktail.strCategory).toEqual('Cocktail');
  });
});

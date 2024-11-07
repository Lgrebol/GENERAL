import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CocktailListComponent } from './cocktail-list.component';
import { CocktailService } from '../../services/cocktail.service';
import { of } from 'rxjs';

describe('CocktailListComponent', () => {
  let component: CocktailListComponent;
  let fixture: ComponentFixture<CocktailListComponent>;
  let cocktailService: jasmine.SpyObj<CocktailService>;

  beforeEach(async () => {
    const cocktailServiceSpy = jasmine.createSpyObj('CocktailService', ['getCocktails']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CocktailListComponent],
      providers: [{ provide: CocktailService, useValue: cocktailServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(CocktailListComponent);
    component = fixture.componentInstance;
    cocktailService = TestBed.inject(CocktailService) as jasmine.SpyObj<CocktailService>;
  });

  it('should create the cocktail list component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch cocktails on initialization', () => {
    const dummyCocktails = {
      drinks: [
        { idDrink: '11000', strDrink: 'Margarita', strDrinkThumb: 'https://example.com/margarita.jpg' },
        { idDrink: '11001', strDrink: 'Daiquiri', strDrinkThumb: 'https://example.com/daiquiri.jpg' },
      ],
    };

    cocktailService.getCocktails.and.returnValue(of(dummyCocktails));
    component.ngOnInit();

    expect(component.cocktails.length).toBe(2);
    expect(component.cocktails[0].strDrink).toEqual('Margarita');
  });

  it('should paginate cocktails', () => {
    const dummyCocktails = {
      drinks: [
        { idDrink: '11000', strDrink: 'Margarita' },
        { idDrink: '11001', strDrink: 'Daiquiri' },
        { idDrink: '11002', strDrink: 'Mojito' },
      ],
    };

    cocktailService.getCocktails.and.returnValue(of(dummyCocktails));
    component.ngOnInit();
    component.setPage(1);

    expect(component.currentPage).toBe(1);
    expect(component.cocktails.length).toBe(3);
  });
});

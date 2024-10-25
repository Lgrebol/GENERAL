import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CocktailService } from './cocktail.service';

describe('CocktailService', () => {
  let service: CocktailService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CocktailService],
    });
    service = TestBed.inject(CocktailService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch cocktails containing "margarita" in the name', () => {
    const mockResponse = {
      drinks: [
        { strDrink: 'Margarita', strDrinkThumb: 'url1', idDrink: '1' },
        { strDrink: 'Blue Margarita', strDrinkThumb: 'url2', idDrink: '2' },
      ],
    };
  
    service.getMargaritaCocktails().subscribe((data) => {
      expect(data.drinks.length).toBe(2); // Accedeix directament a data.drinks
      expect(data.drinks[0].strDrink).toContain('Margarita');
    });
  
    const req = httpMock.expectOne('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  }); 

  afterEach(() => {
    httpMock.verify();
  });
});

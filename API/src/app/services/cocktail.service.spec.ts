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

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve cocktails from the API via GET', () => {
    const dummyCocktails = {
      drinks: [
        {
          idDrink: '11000',
          strDrink: 'Margarita',
          strDrinkThumb: 'https://example.com/margarita.jpg',
        },
      ],
    };

    service.getCocktails().subscribe((cocktails) => {
      expect(cocktails.drinks.length).toBe(1);
      expect(cocktails.drinks[0].strDrink).toEqual('Margarita');
    });

    const request = httpMock.expectOne(`${service.apiUrl}/search.php?s=`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyCocktails);
  });

  it('should retrieve a cocktail by ID from the API', () => {
    const dummyCocktail = {
      drinks: [
        {
          idDrink: '11000',
          strDrink: 'Margarita',
          strDrinkThumb: 'https://example.com/margarita.jpg',
        },
      ],
    };

    service.getCocktailById('11000').subscribe((cocktail) => {
      expect(cocktail.drinks[0].strDrink).toEqual('Margarita');
    });

    const request = httpMock.expectOne(`${service.apiUrl}/lookup.php?i=11000`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyCocktail);
  });
});

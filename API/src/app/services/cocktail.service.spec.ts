import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CocktailService } from './cocktail.service';

describe('CocktailService', () => {
  let service: CocktailService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CocktailService]
    });
    service = TestBed.inject(CocktailService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch cocktails from the API', () => {
    const mockCocktails = [{ idDrink: '11007', strDrink: 'Margarita', strDrinkThumb: 'image_url' }];

    service.getCocktails().subscribe((cocktails) => {
      expect(cocktails).toEqual(mockCocktails);
    });

    const req = httpMock.expectOne('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
    expect(req.request.method).toBe('GET');
    req.flush(mockCocktails);
  });
});

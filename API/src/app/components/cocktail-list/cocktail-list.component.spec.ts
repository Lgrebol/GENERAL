import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CocktailListComponent } from './cocktail-list.component';
import { CocktailService } from '../../services/cocktail.service';
import { of } from 'rxjs';

describe('CocktailListComponent', () => {
  let component: CocktailListComponent;
  let fixture: ComponentFixture<CocktailListComponent>;
  let mockCocktailService: jasmine.SpyObj<CocktailService>;

  beforeEach(() => {
    mockCocktailService = jasmine.createSpyObj('CocktailService', ['getMargaritaCocktails']);
    mockCocktailService.getMargaritaCocktails.and.returnValue(
      of({
        drinks: [
          { strDrink: 'Margarita', strDrinkThumb: 'url1', idDrink: '1' },
          { strDrink: 'Blue Margarita', strDrinkThumb: 'url2', idDrink: '2' },
        ],
      })
    );

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CocktailListComponent],
      providers: [{ provide: CocktailService, useValue: mockCocktailService }],
    }).compileComponents();

    fixture = TestBed.createComponent(CocktailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display a list of margarita cocktails', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('li').length).toBe(2);
    expect(compiled.querySelector('li')?.textContent).toContain('Margarita');
  });
});

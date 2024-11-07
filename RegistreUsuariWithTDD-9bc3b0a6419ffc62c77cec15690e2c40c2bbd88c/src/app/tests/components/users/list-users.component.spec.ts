import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListUsersComponent } from '../../../components/users/list-users/list-users.component';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ApiService } from '../../../service/apiService';
import { provideHttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[
        ApiService, 
        provideHttpClient(),
        provideHttpClientTesting()
      ], 
      imports: [ListUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('Users retrieve ok', () => {
    const mockData = [ { } ]; // Hem de simular la crida per tal de provar que el comportament es comporta com és d'esperar en l'escenari
    spyOn(service,'getData').and.returnValue(of(mockData));

    component.ngOnInit();
    fixture.detectChanges();

    const compiled:HTMLElement = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.error-message')).toBeFalsy();
  });
  
  it('Users retrieve error', () => {
    const errorMessage = "Error en la connexió amb l'API";
    spyOn(service,'getData').and.returnValue(throwError(()=> new Error("Error en la connexió amb l'API")));

    component.ngOnInit();
    fixture.detectChanges();

    const compiled:HTMLElement = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.error-message')?.textContent).toContain(errorMessage);
  });

  it('List cats', () => {
    const mockData = [{
      "_id": "4CGBn8ySN95C7cG6",
      "mimetype": "image/jpeg",
      "size": 65078,
      "tags": [
        "grey",
        "white",
        "record player",
        "cute"
      ]
    }]; // Hem de simular la crida per tal de provar que el comportament es comporta com és d'esperar en l'escenari
    spyOn(service,'getData').and.returnValue(of(mockData));

    component.ngOnInit();
    fixture.detectChanges();
    fixture.whenStable();

    const compiled:HTMLElement = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('td')).toBeTruthy();
  });
}); 

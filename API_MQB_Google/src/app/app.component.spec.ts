import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show the form when the button "Add information" is clicked', () => {
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('form'));
    expect(form).toBeTruthy();  // El formulari hauria d'aparèixer
  });

  it('should submit the form and close it', () => {
    component.nameInput = 'Test Name';
    component.descriptionInput = 'Test Description';
    const button = fixture.debugElement.query(By.css('button[type="submit"]'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.data.name).toBe('Test Name');
    expect(component.data.description).toBe('Test Description');
    expect(component.showForm).toBeFalse();  // El formulari hauria de tancar-se
  });

  it('should show the button "Add information"', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.textContent).toBe('Add information');  // El botó hauria d'estar present
  });
});

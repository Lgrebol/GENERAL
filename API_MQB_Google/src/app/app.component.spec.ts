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
    expect(form).toBeTruthy();  // The form should appear
  });

  it('should submit the form and update data', () => {
    // Click "Add information" button to open the form
    const addButton = fixture.debugElement.query(By.css('button'));
    addButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    // Set form values via nativeElement to ensure ngModel binding
    const nameInput = fixture.debugElement.query(By.css('input[name="name"]')).nativeElement;
    const descriptionInput = fixture.debugElement.query(By.css('input[name="description"]')).nativeElement;

    nameInput.value = 'Test Name';
    descriptionInput.value = 'Test Description';
    nameInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Locate the submit button and trigger form submission
    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));
    submitButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    // Verify that data is updated as expected
    expect(component.data.name).toBe('');
    expect(component.data.description).toBe('');
  });

  it('should show the button "Add information"', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.textContent).toBe('Add information');  // The button should be present
  });
});

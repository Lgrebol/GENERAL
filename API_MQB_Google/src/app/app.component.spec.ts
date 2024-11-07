import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, FormsModule], // Importem el component i FormsModule per ngModel
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('It should show the button "Add information"', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button).toBeTruthy();
  });

  it('It should show the form when the button Add information is clicked" ', () => {
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges(); 

    const form = fixture.debugElement.query(By.css('form'));
    expect(form).toBeTruthy();
  });

  it('')
});
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('It should show the menú button', () => {
    const menuButton = fixture.debugElement.query(By.css('button'));
    expect(menuButton).toBeTruthy();
    expect(menuButton.nativeElement.textContent).toContain('Afegeix informació');
  });
});

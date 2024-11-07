import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import { ActivatedRoute, Router,  RouterLink,  RouterLinkWithHref,  provideRouter } from '@angular/router';
import { routes } from '../../app.routes';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideRouter(routes)
      ],
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'registreUsuarisWithTDD' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('registreUsuarisWithTDD');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Users');
  });
});

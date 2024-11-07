import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import { provideRouter, Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { routes } from '../../app.routes';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ApiService } from '../../service/apiService';
import { provideHttpClient } from '@angular/common/http';



describe('Menu routing', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideRouter(routes),
        provideHttpClient(),
        ApiService 
      ],
      imports: [AppComponent, RouterLinkWithHref, RouterLink],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    router = TestBed.inject(Router);
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('true', () => expect(true).toBe(true));
  
  it('Navigates to /users option', async () => {
    fixture.detectChanges();
    const linkDebugs:DebugElement[] = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    const link:HTMLAnchorElement=linkDebugs[0].nativeElement as HTMLAnchorElement;

    link.click();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(router.url).toBe("/users");
  });
});
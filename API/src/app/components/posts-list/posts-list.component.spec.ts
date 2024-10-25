// src/app/components/posts-list/posts-list.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsListComponent } from './posts-list.component';
import { ApiService } from '../../services/api.service';
import { of } from 'rxjs';

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;
  let apiService: ApiService;

  beforeEach(() => {
    const apiServiceMock = {
      getPosts: () => of([{ id: 1, title: 'Post Title', body: 'Post Body' }])
    };

    TestBed.configureTestingModule({
      declarations: [PostsListComponent],
      providers: [{ provide: ApiService, useValue: apiServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should display the posts list', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.post-title').textContent).toContain('Post Title');
    expect(compiled.querySelector('.post-body').textContent).toContain('Post Body');
  })
});

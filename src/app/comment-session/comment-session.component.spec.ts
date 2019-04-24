import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentSessionComponent } from './comment-session.component';

describe('CommentSessionComponent', () => {
  let component: CommentSessionComponent;
  let fixture: ComponentFixture<CommentSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

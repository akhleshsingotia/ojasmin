import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPostComponentComponent } from './parent-post-component.component';

describe('ParentPostComponentComponent', () => {
  let component: ParentPostComponentComponent;
  let fixture: ComponentFixture<ParentPostComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentPostComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentPostComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

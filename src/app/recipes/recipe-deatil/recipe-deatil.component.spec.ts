import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDeatilComponent } from './recipe-deatil.component';

describe('RecipeDeatilComponent', () => {
  let component: RecipeDeatilComponent;
  let fixture: ComponentFixture<RecipeDeatilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDeatilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

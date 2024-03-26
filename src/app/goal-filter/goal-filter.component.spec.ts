import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalFilterComponent } from './goal-filter.component';

describe('GoalFilterComponent', () => {
  let component: GoalFilterComponent;
  let fixture: ComponentFixture<GoalFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoalFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoalFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasktestComponent } from './tasktest.component';

describe('TasktestComponent', () => {
  let component: TasktestComponent;
  let fixture: ComponentFixture<TasktestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasktestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasktestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

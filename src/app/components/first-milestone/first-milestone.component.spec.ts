import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMilestoneComponent } from './first-milestone.component';

describe('FirstMilestoneComponent', () => {
  let component: FirstMilestoneComponent;
  let fixture: ComponentFixture<FirstMilestoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstMilestoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstMilestoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

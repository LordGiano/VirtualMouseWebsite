import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdMilestoneComponent } from './third-milestone.component';

describe('ThirdMilestoneComponent', () => {
  let component: ThirdMilestoneComponent;
  let fixture: ComponentFixture<ThirdMilestoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdMilestoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdMilestoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

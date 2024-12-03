import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondMilestoneComponent } from './second-milestone.component';

describe('SecondMilestoneComponent', () => {
  let component: SecondMilestoneComponent;
  let fixture: ComponentFixture<SecondMilestoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondMilestoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondMilestoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

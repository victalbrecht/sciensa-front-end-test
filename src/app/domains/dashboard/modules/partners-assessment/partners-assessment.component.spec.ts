import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersAssessmentComponent } from './partners-assessment.component';

describe('PartnersAssessmentComponent', () => {
  let component: PartnersAssessmentComponent;
  let fixture: ComponentFixture<PartnersAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartnersAssessmentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersAssessmentComponent } from './partners-assessment.component';
import { PartnersAssessmentRoutingModule } from './partners-assessment-routing.module';

@NgModule({
  declarations: [PartnersAssessmentComponent],
  imports: [CommonModule, PartnersAssessmentRoutingModule]
})
export class PartnersAssessmentModule { }

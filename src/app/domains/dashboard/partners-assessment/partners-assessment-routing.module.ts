import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PartnersAssessmentComponent } from './partners-assessment.component';

const routes: Routes = [
  {
    path: '',
    component: PartnersAssessmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnersAssessmentRoutingModule {}

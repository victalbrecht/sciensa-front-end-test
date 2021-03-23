import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RevenuesComponent } from './revenues.component';

const routes: Routes = [
  {
    path: '',
    component: RevenuesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevenuesRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardModule } from './domains/dashboard/dashboard.module';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => DashboardModule },
  { path: '**', redirectTo: 'dashboard/products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

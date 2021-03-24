import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsModule } from './modules/clients/clients.module';
import { DashboardComponent } from './dashboard.component';
import { OverviewModule } from './modules/overview/overview.module';
import { PartnersAssessmentModule } from './modules/partners-assessment/partners-assessment.module';
import { ProductsModule } from './modules/products/products.module';
import { RevenuesModule } from './modules/revenues/revenues.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'overview',
        loadChildren: async (): Promise<OverviewModule> =>
          (await import('./modules/overview/overview.module')).OverviewModule,
      },
      {
        path: 'products',
        loadChildren: () => ProductsModule,
      },
      {
        path: 'revenues',
        loadChildren: async (): Promise<RevenuesModule> =>
          (await import('./modules/revenues/revenues.module')).RevenuesModule,
      },
      {
        path: 'clients',
        loadChildren: async (): Promise<ClientsModule> =>
          (await import('./modules/clients/clients.module')).ClientsModule,
      },
      {
        path: 'partners-assessment',
        loadChildren: async (): Promise<PartnersAssessmentModule> =>
          (
            await import(
              './modules/partners-assessment/partners-assessment.module'
            )
          ).PartnersAssessmentModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

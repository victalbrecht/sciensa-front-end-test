import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsModule } from './clients/clients.module';
import { DashboardComponent } from './dashboard.component';
import { OverviewModule } from './overview/overview.module';
import { PartnersAssessmentModule } from './partners-assessment/partners-assessment.module';
import { ProductsModule } from './products/products.module';
import { RevenuesModule } from './revenues/revenues.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'overview',
        loadChildren: async (): Promise<OverviewModule> =>
          (await import('./overview/overview.module')).OverviewModule,
      },
      {
        path: 'products',
        loadChildren: () => ProductsModule,
      },
      {
        path: 'revenues',
        loadChildren: async (): Promise<RevenuesModule> =>
          (await import('./revenues/revenues.module')).RevenuesModule,
      },
      {
        path: 'clients',
        loadChildren: async (): Promise<ClientsModule> =>
          (await import('./clients/clients.module')).ClientsModule,
      },
      {
        path: 'partners-assessment',
        loadChildren: async (): Promise<PartnersAssessmentModule> =>
          (await import('./partners-assessment/partners-assessment.module'))
            .PartnersAssessmentModule,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { UiService } from '../ui/services/ui/ui.service';
import { MockData } from './interfaces/mock-data.interface';
import { ProductsService } from './modules/products/services/products.service';
import { DashboardService } from './services/dashboard/dashboard.service';

@Component({
  selector: 'sciensa-test-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public constructor(
    private dashboardService: DashboardService,
    private productsService: ProductsService,
    private uiService: UiService
  ) {}

  public ngOnInit(): void {
    this.dashboardService
      .getMockData()
      .pipe(take(1))
      .subscribe((mockData: MockData) => {
        this.productsService.products.next(mockData.produtos);
        this.uiService.accountId.next(mockData.idConta);
      });
  }
}

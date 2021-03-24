import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { UiService } from 'src/app/domains/ui/services/ui/ui.service';
import { MockData } from '../../interfaces/mock-data.interface';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from './services/products/products.service';

@Component({
  selector: 'sciensa-test-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products: Array<Product>;

  public constructor(
    private productsService: ProductsService,
    private uiService: UiService
  ) {}

  public ngOnInit(): void {
    this.productsService
      .getMockData()
      .pipe(take(1))
      .subscribe((mockData: MockData) => {
        this.products = mockData.produtos;
        this.uiService.accountId.next(mockData.idConta);
      });
  }
}

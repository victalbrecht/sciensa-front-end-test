import { Input } from '@angular/core';
import { Component } from '@angular/core';

import { Product } from 'src/app/domains/dashboard/interfaces/product.interface';

@Component({
  selector: 'sciensa-test-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() public productData: { product: Product; index: number };

  public expandedCard: boolean;
  public openedFilters: boolean;
}

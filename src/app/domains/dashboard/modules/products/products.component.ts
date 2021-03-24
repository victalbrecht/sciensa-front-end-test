import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../../interfaces/product.interface';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'sciensa-test-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public products: BehaviorSubject<Product[]> = this.productsService.products;

  public constructor(private productsService: ProductsService) { }
}

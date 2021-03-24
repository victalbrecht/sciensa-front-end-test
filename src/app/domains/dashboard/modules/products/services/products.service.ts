import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../../../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products: BehaviorSubject<Product[]> = new BehaviorSubject([]);
}

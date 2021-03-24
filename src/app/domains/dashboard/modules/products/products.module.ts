import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProductsComponent, ProductCardComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule]
})
export class ProductsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FiltersCardComponent } from './components/filters-card/filters-card.component';
import { AssetsTableCardComponent } from './components/assets-table-card/assets-table-card.component';

@NgModule({
  declarations: [ProductsComponent, ProductCardComponent, FiltersCardComponent, AssetsTableCardComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
})
export class ProductsModule {}

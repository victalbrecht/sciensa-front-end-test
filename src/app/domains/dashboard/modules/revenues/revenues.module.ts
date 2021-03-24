import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenuesComponent } from './revenues.component';
import { RevenuesRoutingModule } from './revenues-routing.module';

@NgModule({
  declarations: [RevenuesComponent],
  imports: [CommonModule, RevenuesRoutingModule],
})
export class RevenuesModule {}

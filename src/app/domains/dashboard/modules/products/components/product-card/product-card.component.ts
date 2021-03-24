import { trigger, transition, style, animate } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from 'src/app/domains/dashboard/interfaces/product.interface';
import { UiService } from 'src/app/domains/ui/services/ui/ui.service';

@Component({
  selector: 'sciensa-test-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  animations: [
    trigger('collapse', [
      transition(':enter', [
        style({ height: 0, overflow: 'hidden' }),
        animate('.3s ease-in-out'),
      ]),
      transition(':leave', [
        animate('.3s ease-in-out', style({ height: 0, overflow: 'hidden' })),
      ]),
    ]),
  ],
})
export class ProductCardComponent {
  @Input() public productData: { product: Product; index: number };

  public hidingValues: BehaviorSubject<boolean> = this.uiService.hidingValues;
  public expandedCard: boolean;
  public openFilters: boolean;

  public constructor(private uiService: UiService) {}
}

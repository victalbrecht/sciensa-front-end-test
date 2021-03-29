import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from 'src/app/domains/dashboard/interfaces/product.interface';
import { UiService } from 'src/app/domains/ui/services/ui/ui.service';

@Component({
  selector: 'sciensa-test-assets-table-card',
  templateUrl: './assets-table-card.component.html',
  styleUrls: ['./assets-table-card.component.scss']
})
export class AssetsTableCardComponent{
  @Input() public productData: { product: Product; index: number };

  public hidingValues: BehaviorSubject<boolean> = this.uiService.hidingValues;

  public constructor(private uiService: UiService) {}
}

import { Component } from '@angular/core';

import { collapseAnimation } from 'src/app/domains/dashboard/animations/animations';

@Component({
  selector: 'sciensa-test-filters-card',
  templateUrl: './filters-card.component.html',
  styleUrls: ['./filters-card.component.scss'],
  animations: [collapseAnimation],
})
export class FiltersCardComponent {
  public openFilters: boolean;
}

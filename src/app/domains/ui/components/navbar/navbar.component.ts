import { Component, OnInit } from '@angular/core';

import { UiService } from '../../services/ui/ui.service';

@Component({
  selector: 'sciensa-test-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public showingValues: boolean;

  public constructor(private uiService: UiService) {}

  public ngOnInit(): void {
    this.uiService.showingValues.subscribe((showingValues: boolean) => this.showingValues = showingValues);
  }

  public toggleValues(): void {
    this.showingValues = !this.showingValues;
    this.uiService.showingValues.next(this.showingValues);
  }
}

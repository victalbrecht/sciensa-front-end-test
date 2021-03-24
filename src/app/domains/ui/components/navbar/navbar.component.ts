import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UiService } from '../../services/ui/ui.service';

@Component({
  selector: 'sciensa-test-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public hidingValues: boolean;
  public accountId: BehaviorSubject<number> = this.uiService.accountId;

  public constructor(private uiService: UiService) {}

  public ngOnInit(): void {
    this.uiService.hidingValues.subscribe((hidingValues: boolean) => this.hidingValues = hidingValues);
  }

  public toggleValues(): void {
    this.hidingValues = !this.hidingValues;
    this.uiService.hidingValues.next(this.hidingValues);
  }
}

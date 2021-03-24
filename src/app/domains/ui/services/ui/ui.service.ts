import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  public showingValues: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public accountId: BehaviorSubject<number> = new BehaviorSubject(null);
}

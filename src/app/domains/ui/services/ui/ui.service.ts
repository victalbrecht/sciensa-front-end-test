import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  public hidingValues: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public accountId: BehaviorSubject<number> = new BehaviorSubject(null);
}

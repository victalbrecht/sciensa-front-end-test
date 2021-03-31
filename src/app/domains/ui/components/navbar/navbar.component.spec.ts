import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { take } from 'rxjs/operators';

import { SharedModule } from 'src/app/shared/shared.module';
import { UiService } from '../../services/ui/ui.service';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [SharedModule],
      providers: [UiService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle values', () => {
    expect(component.hidingValues).toBeFalse();
    component.toggleValues();
    expect(component.hidingValues).toBeTrue();
  });

  it('should change account id', () => {
    let accountIdRef: DebugElement = fixture.debugElement.query(By.css('.account-id'));
    expect(accountIdRef.nativeElement.innerText).toBe('');
    component.accountId.pipe(take(1)).subscribe((accountId: number) => expect(accountId).toBe(null));
    const uiService: UiService = TestBed.inject(UiService);
    uiService.accountId.next(469458969);
    component.accountId.pipe(take(1)).subscribe((accountId: number) => expect(accountId).toBe(469458969));
    fixture.detectChanges();
    accountIdRef = fixture.debugElement.query(By.css('.account-id'));
    expect(accountIdRef.nativeElement.innerText).toBe('CC 46945896-9');
  });
});

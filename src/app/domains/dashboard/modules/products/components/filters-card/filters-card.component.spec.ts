import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FiltersCardComponent } from './filters-card.component';

describe('FiltersCardComponent', () => {
  let component: FiltersCardComponent;
  let fixture: ComponentFixture<FiltersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [FiltersCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle filters', () => {
    const toggleFiltersBtnRef: DebugElement = fixture.debugElement.query(By.css('.toggle-filters'));
    let filtersRef: DebugElement = fixture.debugElement.query(By.css('.filters'));
    expect(filtersRef).toBeNull();
    toggleFiltersBtnRef.nativeElement.click();
    fixture.detectChanges();
    filtersRef = fixture.debugElement.query(By.css('.filters'));
    expect(filtersRef.nativeElement).toBeInstanceOf(HTMLElement);
  });
});

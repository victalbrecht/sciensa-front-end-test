import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HideValueDirective } from './hide-value.directive';

@Component({
  selector: 'directive-test-component',
  template: '<span [hideValue]="hideValue">R$ 1.000.000,00</span>'
})
export class DirectiveTestComponent {
  public hideValue: boolean = false;
}

describe('HideValueDirective', () => {
  let component: DirectiveTestComponent;
  let fixture: ComponentFixture<DirectiveTestComponent>;
  let elementRef: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveTestComponent, HideValueDirective],
    });

    fixture = TestBed.createComponent(DirectiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    elementRef = fixture.debugElement.query(By.css('span'));
  });

  it('should create an instance', () => {
    const directive = new HideValueDirective(null);
    expect(directive).toBeTruthy();
  });

  it('should detect directive test component style changes', () => {
    expect(elementRef.nativeElement.style.backgroundColor).toBe('initial');
    expect(elementRef.nativeElement.style.color).toBe('initial');
    component.hideValue = true;
    fixture.detectChanges();
    expect(elementRef.nativeElement.style.backgroundColor).toBe('rgb(235, 235, 235)');
    expect(elementRef.nativeElement.style.color).toBe('transparent');
  });
});

import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[hideValue]',
})
export class HideValueDirective implements OnChanges {
  @Input() public hideValue: boolean;

  public constructor(public el: ElementRef) {}

  public ngOnChanges(): void {
      this.el.nativeElement.style.backgroundColor = this.hideValue ? '#ebebeb' : 'initial';
      this.el.nativeElement.style.color = this.hideValue ? 'transparent' : 'initial';
  }
}

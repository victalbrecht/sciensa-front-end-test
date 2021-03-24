import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountNumberPipe } from './pipes/account-number/account-number.pipe';
import { PreCurrencyPipe } from './pipes/pre-currency/pre-currency.pipe';
import { CustomDatePipe } from './pipes/custom-date/custom-date.pipe';
import { HideValueDirective } from './directives/hide-value.directive';

const shared: Array<any> = [
  AccountNumberPipe,
  PreCurrencyPipe,
  CustomDatePipe,
  HideValueDirective,
];

@NgModule({
  declarations: shared,
  imports: [CommonModule],
  exports: shared,
})
export class SharedModule {}

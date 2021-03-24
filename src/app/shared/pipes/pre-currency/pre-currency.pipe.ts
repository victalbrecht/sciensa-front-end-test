import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preCurrency',
})
export class PreCurrencyPipe implements PipeTransform {
  public transform(rawCurrency: number): number {
    const cur: string = rawCurrency?.toString();
    return parseFloat(`${cur?.slice(0, -2)}.${cur?.slice(-2)}`);
  }
}

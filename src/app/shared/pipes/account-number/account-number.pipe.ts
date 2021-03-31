import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accountNumber',
})
export class AccountNumberPipe implements PipeTransform {
  public transform(accountNumber: number): string | number {
    const acc: string = accountNumber?.toString();
    return acc ? `CC ${acc?.slice(0, -1)}-${acc?.slice(-1)}` : accountNumber;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accountNumber',
})
export class AccountNumberPipe implements PipeTransform {
  public transform(accountNumber: number): string {
    const acc: string = accountNumber?.toString();
    return `${acc?.slice(0, -1)}-${acc?.slice(-1)}`;
  }
}

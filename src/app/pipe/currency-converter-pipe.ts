import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value: number, ...args: string[]): number {
    const [data] = args;
    
    if(data =="yen"){
      return value * 5
    }

    return value * 85;
  }

}

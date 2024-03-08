import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'currentPrice'
})

export class CurrentPricePipe implements PipeTransform {
  transform(discountPercentage: number, previousPrice: number, decimal: number): any {
    const currentPrice = previousPrice - (previousPrice * (discountPercentage / 100));
    return currentPrice.toFixed(decimal);
  }
  
}
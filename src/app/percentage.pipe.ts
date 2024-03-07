import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'percentage'
})

export class PercentagePipe implements PipeTransform {
  transform(discountPercentage: number, previousPrice: number, decimal: number): any {
    const discountedPrice = previousPrice - (previousPrice * (discountPercentage / 100));
    return discountedPrice.toFixed(decimal);
  }
  
}
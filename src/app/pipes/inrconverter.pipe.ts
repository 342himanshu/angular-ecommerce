import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'INRConverter'
})
export class INRConverterPipe implements PipeTransform {

  transform(value: number): Number {
    const data = value * 79;
    return +data.toFixed(2);
  }

}

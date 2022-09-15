import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eight'
})
export class EightPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

import { UtilsService } from './../services/utils.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separator'
})
export class SeparatorPipe implements PipeTransform {
  constructor(private UtilsService: UtilsService){}
  transform(value: number, sep: string): string {
    return this.UtilsService.numberSeparator(value,sep);
  }

  
}

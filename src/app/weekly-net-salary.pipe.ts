import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weeklyNetSalary'
})
export class WeeklyNetSalaryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value/52*0.7;
  }

}

import { Pipe, PipeTransform } from '@angular/core';


// adding pure as false because when we filter any values and add new values in the array or make changes
// in original array that is not shown in filtered list
// NOTE: This has performance issues
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterValue): any {
    if (value.length == 0 || filterValue == '') {
      return value;
    }
    const filteredArray = [];
    for (const item of value) {
      if (item.status == filterValue) {
        filteredArray.push(item);
      }
    }
    return filteredArray;
  }

}

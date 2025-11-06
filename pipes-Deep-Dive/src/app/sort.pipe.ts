import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
  // pure:false
})
export class SortPipe implements PipeTransform {

  transform(value: string[] | number[],direction:'asc'|'desc'='asc') {
    const sortedArr=[...value];

    sortedArr.sort((a,b)=>{
      if(direction==='asc'){
        return a > b ? 1:-1;
      }
      else{
        return a > b ? -1:1;
      }
    })
return sortedArr;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
  standalone: true
})
export class FilterByNamePipe implements PipeTransform {

  transform(productsList: any[], filterName: string): any[] {
    if (!productsList || !filterName) {
      return productsList;
    }
    filterName = filterName.toLowerCase();
    return productsList.filter(product => product.name.toLowerCase().includes(filterName));
  }

}

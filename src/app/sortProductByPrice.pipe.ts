import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortProductByPrice',
  standalone: true
})
export class SortProductByPricePipe implements PipeTransform {

  transform(products: any[], pricefilter: boolean): any[] {
    if (!products) return [];

    // If pricefilter is true, apply filtering logic
    let filteredProducts = products;
    if (pricefilter) {
      filteredProducts = products.filter(product => {
        // Example filter condition
        return product.price; // Modify based on your actual filter criteria
      });
    }

    // Sort the filtered products by price
    return filteredProducts.sort((a, b) => a.price - b.price);
  }

}

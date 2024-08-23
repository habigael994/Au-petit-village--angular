import { Component , inject } from '@angular/core';
import { SortProductByPricePipe } from '../sortProductByPrice.pipe';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { Products } from '../products' ;
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../products.service';
import { SortProductByPrice2Pipe } from '../sort-product-by-price2.pipe';

 
 
 

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [SortProductByPricePipe,ProductsComponent,NgFor,NgIf,SortProductByPrice2Pipe],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
  
})
export class CatalogComponent {
      pricefilter: boolean = false ;
      productsList: Products[] = [];
      productsService: ProductsService = inject(ProductsService);
      filteredProductsList:Products [] = [];

      constructor() {

          this.productsService.getAllProducts().then((productsList: Products[]) => {
            this.productsList = productsList;
            this.filteredProductsList = productsList;

          });

      }

     filterResults(text: string) { 
          if (!text) this.filteredProductsList = this.productsList;

          this.filteredProductsList = this.productsList.filter(
            products => products?.name.toLowerCase().includes(text.toLowerCase())
          );
      }

  }



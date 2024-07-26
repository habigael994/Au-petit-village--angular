import { Component , inject } from '@angular/core';
import { SortProductPipe } from '../sort-product.pipe';
import { NgFor } from '@angular/common';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { Products } from '../products' ;
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../products.service';
import { NgModule } from '@angular/core';
 
 
 

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [SortProductPipe,FilterByNamePipe,ProductsComponent,NgFor],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
  
})
export class CatalogComponent {
      
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



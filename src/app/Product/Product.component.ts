import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import { CatalogComponent } from '../catalog/catalog.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CatalogComponent],
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css']  
})
export class ProductComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  productsService = inject(ProductsService);
  products: Products | undefined;

  constructor() {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.params['id']);
    this.productsService.getProductsById(productId).then(product => {
      this.products = product;
    });
  }
}
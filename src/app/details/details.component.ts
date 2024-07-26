import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Products } from '../products';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productsService = inject(ProductsService);
  products: Products | undefined;

  constructor() {
    const productsId = Number(this.route.snapshot.params['id']);
    this.productsService.getProductsById(productsId).then(products => {
      this.products = this.products;
    });
  }
}

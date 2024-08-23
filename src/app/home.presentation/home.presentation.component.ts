import { Component,inject } from '@angular/core';
import { ProductsService } from '../products.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homep',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.presentation.component.html',
  styleUrl: './home.presentation.component.css'
})
export class HomePresentationComponent {
  
}

import { Component,inject} from '@angular/core';
import { CatalogComponent } from '../catalog/catalog.component';
import { HomePresentationComponent } from '../home.presentation/home.presentation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CatalogComponent,HomePresentationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

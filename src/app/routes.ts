import { RouteConfigLoadEnd, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./Product/Product.component";
import { AboutComponent } from "./about/about.component";

const routeConfig: Routes = [

    {
      path: '' ,
      component: HomeComponent,
      title: "Page d'accueil"
    },
    {
      path: 'product/:id' ,
      component: ProductComponent,
      title: 'Page produit'
    },
    {
      path: 'about' ,
      component: AboutComponent,
      title: 'A propos'
    }

];

export default routeConfig;
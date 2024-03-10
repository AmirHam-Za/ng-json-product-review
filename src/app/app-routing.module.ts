import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CustomersComponent } from './components/customers/customers.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'customers', component:CustomersComponent},
  
  {
    path: 'products',
    loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule)
  },

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

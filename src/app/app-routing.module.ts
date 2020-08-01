import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'products'},
  {path: 'about', component: AboutComponent, data: {animation: 'about'}},
  {path: 'products', component: ProductListComponent, data: {animation: 'products'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

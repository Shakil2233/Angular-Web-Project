import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {productSvc}  from './service/productservice';
import {supplierSvc} from './service/supplierservice';
import { ProductComponent } from './product/product.component';
import { SupplierComponent } from './supplier/supplier.component';
import{HttpClientModule} from '@angular/common/http';
import { CostumerDirectiveDirective } from './costumer-directive.directive';
import { ProductForDirective } from './product-for.directive';

const routinfo:Routes=[
  {path:'ProductDetails',component:ProductComponent},
  { path:'SupplieerDetails',component:SupplierComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SupplierComponent,
    CostumerDirectiveDirective,
    ProductForDirective,
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(routinfo)
  ],
  providers: [supplierSvc,productSvc],
  bootstrap: [AppComponent]
})
export class AppModule { }

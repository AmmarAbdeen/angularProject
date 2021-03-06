import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomFormsModule } from 'ng2-validation';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatTableAngMaterialComponent } from './mat-table-ang-material/mat-table-ang-material.component';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatSortModule, MatPaginatorModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    LoginReactiveComponent,
    LoginTemplateComponent,
    NavBarComponent,
    ProductsComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ShoppingCartComponent,
    MatTableComponent,
    MatTableAngMaterialComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomFormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MDBBootstrapModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import {
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatSidenavModule ,
  // MatProgressSpinnerModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { BasketComponent } from './basket/basket.component';
import { BasketService } from './basket-service.service';
import { ProductsService } from './products.service';

const appRoutes: Routes = [
  {path: '', component: ProductsListComponent},
  {path: 'products', component: ProductsListComponent},
  {path: 'basket', component: BasketComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsListComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    // MatProgressSpinnerModule
  ],
  providers: [
    BasketService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

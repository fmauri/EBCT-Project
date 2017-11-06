import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';

const API_URL = 'http://demo5661760.mockable.io/';

@Injectable()
export class ProductsService {
  // products: Product[];

  constructor(private http: HttpClient) {
    this.fetchProducts();
   }

  fetchProducts() {
    return this.http.get(API_URL + 'products/get');
  }

  fetchCategories() {
    return this.http.get(API_URL + 'categories/get');
  }

}

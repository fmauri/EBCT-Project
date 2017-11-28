import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';

// const API_URL = 'https://demo5661760.mockable.io/';
const API_URL = 'http://localhost:9000/api/';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {
    // this.fetchProducts();
   }

  fetchProducts() {
    return this.http.get(API_URL + 'products/get');
  }
}

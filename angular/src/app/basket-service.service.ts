import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Product } from './product.model';

@Injectable()
export class BasketService {
  basketProductsChanged = new Subject<Product[]>();
  basketProducts: Product[];
  basketTotal = 0;

  getBasketProducts() {
    return this.basketProducts.slice();
  }

  addBasketProduct(newProduct: Product) {
    this.basketProducts.push(newProduct);
    this.basketTotal += newProduct.price;

    localStorage.setItem('basketProducts', JSON.stringify(this.basketProducts));

    this.basketProductsChanged.next(this.basketProducts.slice());
  }

  removeBasketProduct(product: Product) {
    this.basketProducts = this.basketProducts.filter((item: Product) => {
      return item.id !== product.id;
    });

    this.basketTotal -= product.price;
    localStorage.setItem('basketProducts', JSON.stringify(this.basketProducts));
    this.basketProductsChanged.next(this.basketProducts.slice());
  }

  getBasketTotal() {
    return this.basketTotal;
  }

  emptyBasket() {
    this.basketProducts = [];
    this.basketTotal = 0;
    localStorage.setItem('basketProducts', JSON.stringify(this.basketProducts));
    this.basketProductsChanged.next(this.basketProducts.slice());
  }

  constructor() {
    this.basketProducts = JSON.parse(localStorage.getItem('basketProducts') || '[]');
    this.basketProducts.forEach(
        item => this.basketTotal += item.price
    );
  }

}

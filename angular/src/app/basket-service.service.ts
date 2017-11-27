import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BasketState } from './basket-state';
import { Product } from './product.model';

const API_URL = 'http://demo5661760.mockable.io/';

@Injectable()
export class BasketService {
  basketProductsChanged = new Subject<Product[]>();
  basketProducts: Product[] = [];
  basketTotal = 0;

  getBasketProducts() {
    return this.basketProducts.slice();
  }

  addBasketProduct(newProduct: Product) {
    this.basketProducts.push(newProduct);
    this.basketTotal += newProduct.price;
    this.basketProductsChanged.next(this.basketProducts.slice());
  }

  removeBasketProduct(product: Product) {
    this.basketProducts = this.basketProducts.filter((item: Product) => {
      return item.id !== product.id;
    });
    this.basketTotal -= product.price;
    this.basketProductsChanged.next(this.basketProducts.slice());
  }

  getBasketTotal() {
    return this.basketTotal;
  }

  emptyBasket() {
    this.basketProducts = [];
    this.basketTotal = 0;
    this.basketProductsChanged.next(this.basketProducts.slice());
  }

  getPaypalRedableItems() : object[] {
    console.log(this.basketProducts);
    let ret = [];
    for (let i = 0; i < this.basketProducts.length; i++){
      ret.push({
        "name":  this.basketProducts[i].name,
        "sku": this.basketProducts[i].id,
        "price": this.basketProducts[i].price,
        "currency": "PLN",
        "quantity": 1,
        "description": this.basketProducts[i].description,
        "tax": 0
      })
    }
    return ret;
  }

  constructor() { }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
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

  getPaypalRedableItems() : object[] {
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

  constructor() {
    this.basketProducts = JSON.parse(localStorage.getItem('basketProducts') || '[]');
    this.basketProducts.forEach(
        item => this.basketTotal += item.price
    );
  }


}

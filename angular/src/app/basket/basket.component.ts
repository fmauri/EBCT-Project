import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { ProductsService } from './../products.service';
import { BasketService } from './../basket-service.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  subscription: Subscription;
  basketProducts: Product[] = [];
  basketTotal = 0;
  basketQuantity = 0;

  constructor(private basketService: BasketService, private productsService: ProductsService) { }

  ngOnInit() {
    this.subscription = this.basketService.basketProductsChanged
    .subscribe(
      (basketProducts: Product[]) => {
        this.basketProducts = basketProducts;
        this.basketQuantity = basketProducts.length;
        this.basketTotal = this.basketService.getBasketTotal();
      }
    );

    this.basketProducts = this.basketService.getBasketProducts();
    this.basketQuantity = this.basketService.getBasketProducts().length;
    this.basketTotal = this.basketService.getBasketTotal();

  }

  onEmptyBasket() {
    this.basketService.emptyBasket();
  }

  onRemoveItem(product: Product) {
    this.basketService.removeBasketProduct(product);
  }
}

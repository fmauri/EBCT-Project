import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { ProductsService } from './../products.service';
import { BasketService } from './../basket-service.service';
import { Product } from '../product.model';

declare const paypal: any;

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  subscription: Subscription;
  basketProducts: Product[] = [];
  basketTotal;
  basketQuantity;

  constructor(private basketService: BasketService) { }

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

    this.initPaypal();
  }

  initPaypal(){
    const self = this;
    paypal.Button.render({

      env: 'sandbox', // Or 'sandbox',

      client: {
        sandbox: 'ActHlZqElF4vSwYPMiBd5Ww-TnMEtxbl8hCHDNjvNaN2jYTJ31-se_T_SGF2yjzqcn_8Xm3gauV9fPtI',
        production: 'AaMVs1HrduBk2BxcLmw2yUI5qJ5IaikjGtBkFphlq1NUwWwG9og4-X2Wat6AGfnmW1o58RIlP-jNYmaz'
      },

      commit: true, // Show a 'Pay Now' button

      style: {
        color: 'gold',
        size: 'small'
      },

      payment: function (data, actions) {
        return actions.payment.create({
          payment: {
            transactions: [
              {
                amount: {total: self.basketTotal, currency: 'PLN'}
              }
            ]
          }
        });
      },

      onAuthorize: function (data, actions) {
        return actions.payment.execute().then(function(payment) {

          // The payment is complete!
          // You can now show a confirmation message to the customer
        });
      },

      onCancel: function (data, actions) {
        /*
         * Buyer cancelled the payment
         */
      },

      onError: function (err) {
        /*
         * An error occurred during the transaction
         */
      }

    }, '#paypal-button');
  }

  onEmptyBasket() {
    this.basketService.emptyBasket();
  }

  onRemoveItem(product: Product) {
    this.basketService.removeBasketProduct(product);
  }
}

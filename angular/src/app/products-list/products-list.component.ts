import { Product } from './../product.model';
import { ProductsService } from './../products.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { BasketService } from '../basket-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products: Product[];
  private subscription: Subscription;
  basketProducts: Product[];
  basketTotal: number;
  pending = true;

  constructor(private productsService: ProductsService, private basketService: BasketService) { }

  ngOnInit() {
    this.productsService.fetchProducts().subscribe((response: any[]) => {
      this.products = response.map(it => {
        return {
          id: it.id,
          name: it.name,
          category: "photos",
          price: it.price,
          description: it.extra,
          img: it.image
        }
      });
      this.pending = false;

    });

    this.subscription = this.basketService.basketProductsChanged
    .subscribe(
      (basketProducts: Product[]) => {
        this.basketProducts = basketProducts;
        this.basketTotal = this.basketService.getBasketTotal();
      }
    );

    this.basketProducts = this.basketService.getBasketProducts();
    this.basketTotal = this.basketService.getBasketTotal();
  }

  onAddProduct(newProduct: Product) {
    this.basketService.addBasketProduct(newProduct);
  }

  onRemoveProduct(product: Product) {
    this.basketService.removeBasketProduct(product);
  }

  isInBasket(product: Product) {
    const index = this.basketService.getBasketProducts()
      .findIndex((item) => item.id === product.id);

    return index >= 0;
  }

  onEmptyBasket() {
    this.basketService.emptyBasket();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

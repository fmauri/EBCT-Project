webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_list_products_list_component__ = __webpack_require__("../../../../../src/app/products-list/products-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__basket_basket_component__ = __webpack_require__("../../../../../src/app/basket/basket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__basket_service_service__ = __webpack_require__("../../../../../src/app/basket-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_service__ = __webpack_require__("../../../../../src/app/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__products_list_products_list_component__["a" /* ProductsListComponent */] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_8__products_list_products_list_component__["a" /* ProductsListComponent */] },
    { path: 'basket', component: __WEBPACK_IMPORTED_MODULE_9__basket_basket_component__["a" /* BasketComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__products_list_products_list_component__["a" /* ProductsListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__basket_basket_component__["a" /* BasketComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatSidenavModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__basket_service_service__["a" /* BasketService */],
            __WEBPACK_IMPORTED_MODULE_11__products_service__["a" /* ProductsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/basket-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var API_URL = 'http://demo5661760.mockable.io/';
var BasketService = (function () {
    function BasketService() {
        this.basketProductsChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.basketProducts = [];
        this.basketTotal = 0;
    }
    BasketService.prototype.getBasketProducts = function () {
        return this.basketProducts.slice();
    };
    BasketService.prototype.addBasketProduct = function (newProduct) {
        this.basketProducts.push(newProduct);
        this.basketTotal += newProduct.price;
        this.basketProductsChanged.next(this.basketProducts.slice());
    };
    BasketService.prototype.removeBasketProduct = function (product) {
        this.basketProducts = this.basketProducts.filter(function (item) {
            return item.id !== product.id;
        });
        this.basketTotal -= product.price;
        this.basketProductsChanged.next(this.basketProducts.slice());
    };
    BasketService.prototype.getBasketTotal = function () {
        return this.basketTotal;
    };
    BasketService.prototype.emptyBasket = function () {
        this.basketProducts = [];
        this.basketTotal = 0;
        this.basketProductsChanged.next(this.basketProducts.slice());
    };
    return BasketService;
}());
BasketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], BasketService);

//# sourceMappingURL=basket-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/basket/basket.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".basket-item-image {\n    max-height:  5.8em;\n    max-width: 5.8em;\n}\n\n.continue-button {\n    left: 0.3em;\n}\n\n.basket-title {\n    text-align: center;\n    padding-bottom: 1em;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/basket/basket.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div class=\"basket-title\">\n    <h1>Checkout</h1>\n    <button mat-raised-button [routerLink]=\"'/products'\">Continue Shopping</button>\n  </div>\n\n  <mat-grid-list cols=\"5\" rowHeight=\"4em\">\n    <mat-grid-tile\n            [colspan]=1\n            [rowspan]=1>\n            <b>Name</b>\n    </mat-grid-tile>\n    <mat-grid-tile\n            [colspan]=1\n            [rowspan]=1>\n      <b>Image</b>\n    </mat-grid-tile>\n    <mat-grid-tile\n            [colspan]=1\n            [rowspan]=1>\n      <b>Category</b>\n    </mat-grid-tile>\n    <mat-grid-tile\n            [colspan]=1\n            [rowspan]=1>\n      <b>Price</b>\n    </mat-grid-tile>\n    <mat-grid-tile\n            [colspan]=1\n            [rowspan]=1>\n      <button mat-raised-button color=\"warn\" (click)=\"onEmptyBasket()\" [routerLink]=\"'/products'\">EMPTY BASKET</button>\n    </mat-grid-tile>\n  </mat-grid-list>\n  <hr>\n  <!--List of rows-->\n  <mat-grid-list cols=\"5\" rowHeight=\"6em\" *ngFor=\"let basketProduct of basketProducts\">\n    <!--Columns-->\n    <mat-grid-tile\n            [colspan]=1\n            [rowspan]=1>\n            {{basketProduct.name}}\n    </mat-grid-tile>\n    <mat-grid-tile\n            [colspan]=1\n            [rowspan]=1>\n            <img class=\"basket-item-image\" src=\"{{basketProduct.img}}\" alt=\"Image\">\n    </mat-grid-tile>\n    <mat-grid-tile\n            [colspan]=1\n            [rowspan]=1>\n      {{basketProduct.category}}\n    </mat-grid-tile>\n    <mat-grid-tile\n            [colspan]=1\n            [rowspan]=1>\n            {{basketProduct.price}} PLN\n    </mat-grid-tile>\n    <mat-grid-tile\n            [colspan]=1\n            [rowspan]=1>\n      <button mat-raised-button color=\"warn\" (click)=\"onRemoveItem(basketProduct)\">X</button>\n    </mat-grid-tile>\n\n  </mat-grid-list>\n\n  <mat-grid-list cols=\"5\" rowHeight=\"6em\">\n    <hr>\n    <mat-grid-tile class=\"continue-button\"\n            [colspan]=4\n            [rowspan]=1>\n    </mat-grid-tile>\n      <!--empty place-->\n\n    <mat-grid-tile\n            [colspan]=1\n            [rowspan]=1>\n      <b>Total: {{basketTotal}} PLN</b>\n    </mat-grid-tile>\n\n  </mat-grid-list>\n\n\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/basket/basket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_service__ = __webpack_require__("../../../../../src/app/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basket_service_service__ = __webpack_require__("../../../../../src/app/basket-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasketComponent = (function () {
    function BasketComponent(basketService, productsService) {
        this.basketService = basketService;
        this.productsService = productsService;
        this.basketProducts = [];
        this.basketTotal = 0;
        this.basketQuantity = 0;
    }
    BasketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.basketService.basketProductsChanged
            .subscribe(function (basketProducts) {
            _this.basketProducts = basketProducts;
            _this.basketQuantity = basketProducts.length;
            _this.basketTotal = _this.basketService.getBasketTotal();
        });
        this.basketProducts = this.basketService.getBasketProducts();
        this.basketQuantity = this.basketService.getBasketProducts().length;
        this.basketTotal = this.basketService.getBasketTotal();
    };
    BasketComponent.prototype.onEmptyBasket = function () {
        this.basketService.emptyBasket();
    };
    BasketComponent.prototype.onRemoveItem = function (product) {
        this.basketService.removeBasketProduct(product);
    };
    return BasketComponent;
}());
BasketComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-basket',
        template: __webpack_require__("../../../../../src/app/basket/basket.component.html"),
        styles: [__webpack_require__("../../../../../src/app/basket/basket.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__basket_service_service__["a" /* BasketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__basket_service_service__["a" /* BasketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductsService */]) === "function" && _b || Object])
], BasketComponent);

var _a, _b;
//# sourceMappingURL=basket.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <!-- <mat-toolbar-row> -->\n    <button mat-button [routerLink]=\"''\">ImagineThat</button>\n    <!-- <span class=\"example-spacer\"></span>\n    <span>Products</span> -->\n    <!-- <mat-icon class=\"example-icon\">favorite</mat-icon>\n    <mat-icon class=\"example-icon\">delete</mat-icon> -->\n  <!-- </mat-toolbar-row> -->\n</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/products-list/products-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n    font-family: 'Barlow', serif;\n}\n\nimg {\n    max-height: 10em;\n    max-width: 10em;\n}\n\n.mat-card-image:first-child {\n    margin-top: 0.05em;\n}\n\nul {\n    list-style-type: none;\n    font-family: 'Barlow', serif;\n}\n\n.example-sidenav-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    font-family: 'Barlow', serif;\n    \n}\n\n.example-sidenav {\n    padding: 1em;\n    min-width: 12em;\n    /*border: 0.05em solid rgba(80, 83, 104, 0.945);*/\n    text-align: center;\n    font-family: 'Barlow', serif;\n}\n\n.example-fab.mat-fab {\n    position: absolute;\n    right: 0.2em;\n    top: 0.2em;\n    font-family: 'Barlow', serif;\n}\n\n.example-fab-cat {\n    position: absolute;\n    left: 0.2em;\n    top: 0.2em;\n    font-family: 'Barlow', serif;\n}\n\n.product-card {\n    text-align: center;\n    min-width: 10em;\n    min-height: 15em;\n    height: 80%;\n    width: 75%;\n    font-family: 'Barlow', serif;\n}\n\n.basket-list {\n    text-align: center;\n    font-family: 'Barlow', serif;\n    font-size: 1em;\n}\n\n.empty-line {\n    height: 0.5em;\n}\n\n.under-item {\n    padding-top: 1.3em;\n    padding-bottom: 0.7em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products-list/products-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n          <!--<mat-progress-spinner *ngIf=\"pending; else page\" mode=\"indeterminate\"></mat-progress-spinner>-->\n\n          <!--<ng-template  #page>-->\n  <div>\n              <mat-sidenav-container class=\"example-container\">\n\n                <mat-sidenav mode=\"side\" opened=\"false\" position=\"start\" #sidenav1 class=\"example-sidenav\">\n                    <br>\n                    Categories:\n                    <br>\n                    <mat-selection-list #cats>\n                      <mat-list-option *ngFor=\"let cat of categories\">\n                        {{cat.name}}\n                      </mat-list-option>\n                    </mat-selection-list>\n\n                </mat-sidenav>\n\n                <div>\n                    <mat-grid-list cols=\"3\" rowHeight=\"12em\">\n                        <mat-grid-tile\n                            *ngFor=\"let product of products\"\n                            [colspan]=1\n                            [rowspan]=2\n                            [style.background]=\"pink\">\n\n                            <mat-card class=\"product-card\">\n                              <img mat-card-image src={{product.img}} alt=\"PICTURE\">\n                              <mat-card-content>\n                                <p>{{product.price}} PLN</p>\n                                <span class=\"empty-line\"></span>\n                                <p>{{product.name}}</p>\n                                <span class=\"empty-line\"></span>\n                                <p>{{product.description}}</p>\n                              </mat-card-content>\n                              <mat-card-actions>\n                                <button mat-raised-button color=\"primary\" *ngIf=\"!isInBasket(product)\" (click)=\"onAddProduct(product)\">ADD TO BASKET</button>\n                                <button mat-raised-button color=\"warn\" *ngIf=\"isInBasket(product)\" (click)=\"onRemoveProduct(product)\">REMOVE FROM BASKET</button>\n                              </mat-card-actions>\n                            </mat-card>\n\n                        </mat-grid-tile>\n                      </mat-grid-list>\n                    </div>\n\n\n                <mat-sidenav #sidenav mode=\"side\" opened=\"true\" position=\"end\" class=\"example-sidenav\">\n                  <br>\n                  <h3>Basket:</h3>\n                  <br>\n<!--basket list-->\n                  <mat-grid-list class=\"basket-list\" cols=\"2\" rowHeight=\"2em\" *ngFor=\"let basketProduct of basketProducts\">\n                    <mat-grid-tile\n                            [colspan]=1\n                            [rowspan]=1>\n\n                      {{basketProduct.name}}:\n                    </mat-grid-tile>\n                    <mat-grid-tile\n                            [colspan]=1\n                            [rowspan]=1>\n\n                      {{basketProduct.price}} PLN\n                    </mat-grid-tile>\n                  </mat-grid-list>\n\n                  <mat-grid-list class=\"basket-list\" cols=\"2\" rowHeight=\"2em\">\n                    <mat-grid-tile class=\"under-item\"\n                            [colspan]=1\n                            [rowspan]=1>\n\n                      Items:\n                    </mat-grid-tile>\n                    <mat-grid-tile class=\"under-item\"\n                            [colspan]=1\n                            [rowspan]=1>\n\n                      {{basketProducts.length}}\n                    </mat-grid-tile>\n                    <mat-grid-tile class=\"under-item\"\n                            [colspan]=1\n                            [rowspan]=1>\n\n                      Total:\n                    </mat-grid-tile>\n                    <mat-grid-tile class=\"under-item\"\n                            [colspan]=1\n                            [rowspan]=1>\n\n                      {{basketTotal}}\n                    </mat-grid-tile>\n                    <mat-grid-tile class=\"under-item under-button\"\n                            [colspan]=2\n                            [rowspan]=2>\n                      <button mat-raised-button color=\"primary\" [disabled]=\"basketProducts.length === 0\" [routerLink]=\"'/basket'\">CHECKOUT</button>\n                    </mat-grid-tile>\n                    <mat-grid-tile class=\"under-item under-button\"\n                            [colspan]=2\n                            [rowspan]=2>\n                      <button mat-raised-button color=\"warn\" [disabled]=\"basketProducts.length === 0\" (click)=\"onEmptyBasket()\">EMPTY BASKET</button>\n                    </mat-grid-tile>\n                  </mat-grid-list>\n                </mat-sidenav>\n\n                <button mat-fab class=\"example-fab-cat\" (click)=\"sidenav1.toggle()\">\n                  <mat-icon *ngIf=\"!sidenav1.opened\">Cat</mat-icon>\n                  <mat-icon *ngIf=\"sidenav1.opened\">Hide</mat-icon>\n                </button>\n\n                <button mat-fab class=\"example-fab\" (click)=\"sidenav.toggle()\">\n                  <mat-icon *ngIf=\"!sidenav.opened\">Basket</mat-icon>\n                  <mat-icon *ngIf=\"sidenav.opened\">Hide</mat-icon>\n                </button>\n\n              </mat-sidenav-container>\n\n      <!--</ng-template>-->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/products-list/products-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_service__ = __webpack_require__("../../../../../src/app/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basket_service_service__ = __webpack_require__("../../../../../src/app/basket-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsListComponent = (function () {
    // allProducts: Product[];
    function ProductsListComponent(productsService, basketService) {
        this.productsService = productsService;
        this.basketService = basketService;
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.fetchCategories().subscribe(function (response) {
            _this.categories = response['categories'];
        });
        this.productsService.fetchProducts().subscribe(function (response) {
            _this.products = response['products'];
            // this.pending = false;
        });
        this.subscription = this.basketService.basketProductsChanged
            .subscribe(function (basketProducts) {
            _this.basketProducts = basketProducts;
            _this.basketTotal = _this.basketService.getBasketTotal();
        });
        this.basketProducts = this.basketService.getBasketProducts();
        this.basketTotal = this.basketService.getBasketTotal();
    };
    ProductsListComponent.prototype.onAddProduct = function (newProduct) {
        this.basketService.addBasketProduct(newProduct);
    };
    ProductsListComponent.prototype.onRemoveProduct = function (product) {
        this.basketService.removeBasketProduct(product);
    };
    ProductsListComponent.prototype.isInBasket = function (product) {
        var index = this.basketService.getBasketProducts()
            .findIndex(function (item) { return item.id === product.id; });
        return index >= 0;
    };
    ProductsListComponent.prototype.onEmptyBasket = function () {
        this.basketService.emptyBasket();
    };
    ProductsListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return ProductsListComponent;
}());
ProductsListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-products-list',
        template: __webpack_require__("../../../../../src/app/products-list/products-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products-list/products-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__products_service__["a" /* ProductsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__basket_service_service__["a" /* BasketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__basket_service_service__["a" /* BasketService */]) === "function" && _b || Object])
], ProductsListComponent);

var _a, _b;
//# sourceMappingURL=products-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var API_URL = 'https://demo5661760.mockable.io/';
var ProductsService = (function () {
    // products: Product[];
    function ProductsService(http) {
        this.http = http;
        this.fetchProducts();
    }
    ProductsService.prototype.fetchProducts = function () {
        return this.http.get(API_URL + 'products/get');
    };
    ProductsService.prototype.fetchCategories = function () {
        return this.http.get(API_URL + 'categories/get');
    };
    return ProductsService;
}());
ProductsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ProductsService);

var _a;
//# sourceMappingURL=products.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
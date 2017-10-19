webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_router_main_router_component__ = __webpack_require__("../../../../../src/app/main-router/main-router.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'main' },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_2__main_router_main_router_component__["a" /* MainRouterComponent */] },
    { path: 'main/:sym', component: __WEBPACK_IMPORTED_MODULE_2__main_router_main_router_component__["a" /* MainRouterComponent */] },
    { path: 'Portfolio', component: __WEBPACK_IMPORTED_MODULE_3__portfolio_portfolio_component__["b" /* PortfolioComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".HolyGrail {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  min-height: 100vh;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.HolyGrail-body {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n.HolyGrail-content {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.HolyGrail-nav, .HolyGrail-ads {\r\n  /* 12em is the width of the columns */\r\n   -webkit-box-flex: 0;\r\n       -ms-flex: 0 0 12em;\r\n           flex: 0 0 12em; \r\n}\r\n\r\n.HolyGrail-nav {\r\n  /* put the nav on the left */\r\n  -webkit-box-ordinal-group: 0;\r\n      -ms-flex-order: -1;\r\n          order: -1;\r\n  min-width: 310px;\r\n}\r\n.HolyGrail,\r\n.HolyGrail-body {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.HolyGrail-nav {\r\n  -webkit-box-ordinal-group: 0;\r\n      -ms-flex-order: -1;\r\n          order: -1;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .HolyGrail-body {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n  }\r\n  .HolyGrail-content {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n  }\r\n  .HolyGrail-nav, .HolyGrail-ads {\r\n    /* 12em is the width of the columns */\r\n     -webkit-box-flex: 0;\r\n         -ms-flex: 0 0 12em;\r\n             flex: 0 0 12em; \r\n  }\r\n}\r\n\r\nnav,aside{\r\n    background-color:#7e57c2;\r\n}\r\napp-quote-nav {\r\n  width:100%;\r\n}\r\n.example-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n<div id=\"bodycontent\">\r\n    <header class=\"page-header\">\r\n\r\n        <mat-toolbar color=\"primary\">\r\n            <button mat-button><mat-icon>home</mat-icon>StockAid</button>\r\n\r\n        </mat-toolbar>\r\n    </header>\r\n\r\n    <main class=\"page-content\">\r\n        <mat-sidenav-container>\r\n            <mat-sidenav mode=\"side\" opened=\"true\">\r\n                <app-symbol (selectedStock)=\"onSelectedStockChange($event)\">></app-symbol>\r\n                <app-quote [stsymbol]=\"selectedStock\">\r\n                </app-quote>\r\n            </mat-sidenav>\r\n            <article class=\"content-chart\">\r\n                <router-outlet>\r\n\r\n                </router-outlet>\r\n\r\n            </article>\r\n\r\n\r\n\r\n        </mat-sidenav-container>\r\n\r\n    </main>\r\n\r\n<footer class=\"page-footer\">\r\n    <mat-toolbar color=\"primary\">\r\n        <span style=\"font-size: 13px\">https://iextrading.com/api-exhibit-a</span>\r\n\r\n\r\n    </mat-toolbar>\r\n</footer>\r\n</div>-->\r\n\r\n<!-- <app-main>\r\n</app-main> -->\r\n\r\n\r\n<div class=\"HolyGrail\">\r\n    <header>\r\n        <mat-toolbar color=\"primary\">\r\n\r\n            <button mat-button [routerLink]=\"['/Portfolio']\">\r\n                <mat-icon>home</mat-icon>StockAid</button>\r\n            <span class=\"example-spacer\"></span>\r\n\r\n            <div *ngIf=\"!(authService.user$ | async)?.uid\">\r\n                <button class=\"login\" mat-button (click)=\"authService.login()\">Login</button>\r\n            </div>\r\n            <div *ngIf=\"(authService.user$ | async)?.uid\">\r\n                <button mat-button [routerLink]=\"['/Portfolio']\">My Portfolio</button>\r\n                <button class=\"logout\" mat-button (click)=\"authService.logout()\">Logout {{(authService.user$ | async)?.displayName}}</button>\r\n            </div>\r\n\r\n        </mat-toolbar>\r\n    </header>\r\n    <div class=\"HolyGrail-body\">\r\n        <main class=\"HolyGrail-content\">\r\n            <router-outlet>\r\n\r\n            </router-outlet>\r\n\r\n        </main>\r\n        <nav class=\"HolyGrail-nav\">\r\n            <app-quote-nav></app-quote-nav>\r\n        </nav>\r\n        <!-- <aside class=\"HolyGrail-ads\">Rightside if wanted</aside> -->\r\n    </div>\r\n    <footer>\r\n        <mat-toolbar color=\"primary\">\r\n            <span style=\"font-size: 13px\">https://iextrading.com/api-exhibit-a</span>\r\n        </mat-toolbar>\r\n    </footer>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(db, authService) {
        this.db = db;
        this.authService = authService;
        this.title = 'app';
        //  db.object('connected').(console.log);
    }
    AppComponent.prototype.onSelectedStockChange = function (stock) {
        this.selectedStock = stock.toLocaleUpperCase();
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_bar_service__ = __webpack_require__("../../../../../src/app/service/bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_web_sockets_service__ = __webpack_require__("../../../../../src/app/service/web-sockets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_fav_stocks_service__ = __webpack_require__("../../../../../src/app/service/fav-stocks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__symbol_symbol_component__ = __webpack_require__("../../../../../src/app/symbol/symbol.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_symbol_service__ = __webpack_require__("../../../../../src/app/service/symbol.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bar_table_bar_table_component__ = __webpack_require__("../../../../../src/app/bar-table/bar-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bar_chart_bar_chart_component__ = __webpack_require__("../../../../../src/app/bar-chart/bar-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__live_quote_live_quote_component__ = __webpack_require__("../../../../../src/app/live-quote/live-quote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__quote_quote_component__ = __webpack_require__("../../../../../src/app/quote/quote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__service_quote_service__ = __webpack_require__("../../../../../src/app/service/quote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__service_news_service__ = __webpack_require__("../../../../../src/app/service/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__service_stats_service__ = __webpack_require__("../../../../../src/app/service/stats.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__chart_chart_component__ = __webpack_require__("../../../../../src/app/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__key_statistics_key_statistics_component__ = __webpack_require__("../../../../../src/app/key-statistics/key-statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__main_router_main_router_component__ = __webpack_require__("../../../../../src/app/main-router/main-router.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__quote_nav_quote_nav_component__ = __webpack_require__("../../../../../src/app/quote-nav/quote-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* unused harmony export PrimeModule */
/* unused harmony export MaterialModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















//for primeng














var firebaseConfig = {
    apiKey: "AIzaSyCQ_y9gd-0JvsiiTiousdsG0iBtLV9BkKo",
    authDomain: "stockaid-44945.firebaseapp.com",
    databaseURL: "https://stockaid-44945.firebaseio.com",
    projectId: "stockaid-44945",
    storageBucket: "stockaid-44945.appspot.com",
    messagingSenderId: "399145751984"
};
var PrimeModule = (function () {
    function PrimeModule() {
    }
    return PrimeModule;
}());
PrimeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__["ChartModule"]
        ]
    })
], PrimeModule);

//end for primeng
var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["h" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["i" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["j" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["k" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["l" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["m" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["n" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["o" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["p" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["q" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["r" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["s" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["t" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["u" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["v" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["w" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["x" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["y" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["z" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["A" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["B" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["C" /* MatTooltipModule */],
        ]
    })
], MaterialModule);

//material done
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__symbol_symbol_component__["a" /* SymbolComponent */],
            __WEBPACK_IMPORTED_MODULE_13__bar_table_bar_table_component__["a" /* BarTableComponent */],
            __WEBPACK_IMPORTED_MODULE_14__bar_chart_bar_chart_component__["a" /* BarChartComponent */],
            __WEBPACK_IMPORTED_MODULE_20__live_quote_live_quote_component__["a" /* LiveQuoteComponent */],
            __WEBPACK_IMPORTED_MODULE_21__quote_quote_component__["a" /* QuoteComponent */],
            __WEBPACK_IMPORTED_MODULE_25__chart_chart_component__["a" /* ChartComponent */],
            __WEBPACK_IMPORTED_MODULE_26__key_statistics_key_statistics_component__["a" /* KeyStatisticsComponent */],
            __WEBPACK_IMPORTED_MODULE_27__news_news_component__["a" /* NewsComponent */],
            __WEBPACK_IMPORTED_MODULE_28__main_router_main_router_component__["a" /* MainRouterComponent */],
            __WEBPACK_IMPORTED_MODULE_29__quote_nav_quote_nav_component__["a" /* QuoteNavComponent */],
            __WEBPACK_IMPORTED_MODULE_32__portfolio_portfolio_component__["a" /* DialogChangeValue */],
            __WEBPACK_IMPORTED_MODULE_32__portfolio_portfolio_component__["b" /* PortfolioComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_32__portfolio_portfolio_component__["a" /* DialogChangeValue */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
            MaterialModule,
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["n" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["ReactiveFormsModule"],
            PrimeModule,
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig), __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["a" /* AngularFireDatabaseModule */], __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["a" /* AngularFireAuthModule */], __WEBPACK_IMPORTED_MODULE_18_angularfire2_firestore__["a" /* AngularFirestoreModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__service_bar_service__["a" /* BarService */], __WEBPACK_IMPORTED_MODULE_12__service_symbol_service__["a" /* SymbolService */], __WEBPACK_IMPORTED_MODULE_4__service_web_sockets_service__["a" /* WebSocketsService */], __WEBPACK_IMPORTED_MODULE_22__service_quote_service__["a" /* QuoteService */], __WEBPACK_IMPORTED_MODULE_24__service_stats_service__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_23__service_news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_5__service_fav_stocks_service__["a" /* FavStocksService */], __WEBPACK_IMPORTED_MODULE_30__service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_31__auth_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.authService.user$
            .map(function (user) {
            if (user && user.uid) {
                //console.log(user.uid);
                return true;
            }
            else {
                _this.router.navigate(["/main"]);
                return false;
            }
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/bar-chart/bar-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\r\n/* .example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 500px;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  display: flex;\r\n  align-items: center;\r\n  padding-left: 24px;\r\n  font-size: 20px;\r\n} */\r\n\r\n/* .mat-table {\r\n  overflow: auto;\r\n} */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bar-chart/bar-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<p-chart type=\"line\" #mixedChart [data]=\"hoursData\">\r\n</p-chart>"

/***/ }),

/***/ "../../../../../src/app/bar-chart/bar-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_bar_service__ = __webpack_require__("../../../../../src/app/service/bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BarChartComponent = (function () {
    function BarChartComponent(barService) {
        this.barService = barService;
        this.bars = new Array();
        this.label = new Array();
        this.close = new Array();
        this.chartInterval = '';
        this.stsymbol = '';
        this.hoursData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {}
            ]
        };
    }
    BarChartComponent.prototype.ngOnChanges = function (changes) {
        this.getCloseFromServiceRefreshChart(this.stsymbol, this.chartInterval);
    };
    BarChartComponent.prototype.getCloseFromServiceRefreshChart = function (symbol, interval) {
        var _this = this;
        var label = new Array();
        var close = new Array();
        this.barService.getBars(symbol, interval).subscribe(function (p) {
            _this.bars = p;
            Object.keys(_this.bars).forEach(function (element) {
                close.push(_this.bars[element].close);
                label.push(_this.bars[element].date);
            });
            _this.SetValuesAndUpdateChart(symbol, label, close);
        });
    };
    BarChartComponent.prototype.SetValuesAndUpdateChart = function (symbol, label, close) {
        this.hoursData.labels = label;
        this.hoursData.datasets[0] = {
            label: symbol ? symbol : '',
            data: close,
            fill: false,
            borderColor: '#673ab7'
        };
        this.mixedChart.refresh();
    };
    return BarChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("mixedChart"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["UIChart"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["UIChart"]) === "function" && _a || Object)
], BarChartComponent.prototype, "mixedChart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BarChartComponent.prototype, "chartInterval", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BarChartComponent.prototype, "stsymbol", void 0);
BarChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bar-chart',
        template: __webpack_require__("../../../../../src/app/bar-chart/bar-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bar-chart/bar-chart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__service_bar_service__["a" /* BarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_bar_service__["a" /* BarService */]) === "function" && _b || Object])
], BarChartComponent);

var _a, _b;
//# sourceMappingURL=bar-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/bar-table/bar-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\r\n.example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  max-height: 500px;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding-left: 24px;\r\n  font-size: 20px;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bar-table/bar-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <mat-paginator #paginator [length]=\"exampleDatabase.data.length\" [pageIndex]=\"0\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n  </mat-paginator>\r\n  <mat-table #table [dataSource]=\"dataSource\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n\r\n    <ng-container matColumnDef=\"open\">\r\n      <mat-header-cell *matHeaderCellDef> open </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.open}} </mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"high\">\r\n      <mat-header-cell *matHeaderCellDef> high </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.high}} </mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"low\">\r\n      <mat-header-cell *matHeaderCellDef> low </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.low}} </mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"close\">\r\n      <mat-header-cell *matHeaderCellDef> close </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.close}} </mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"label\">\r\n      <mat-header-cell *matHeaderCellDef> label </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.label}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/bar-table/bar-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_bar_service__ = __webpack_require__("../../../../../src/app/service/bar.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarTableComponent; });
/* unused harmony export ExampleDatabase */
/* unused harmony export ExampleDataSource */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BarTableComponent = (function () {
    function BarTableComponent(barService) {
        this.barService = barService;
        this.displayedColumns = ['open', 'high', 'low', 'close', 'label'];
        this.exampleDatabase = new ExampleDatabase(this.barService);
    }
    BarTableComponent.prototype.ngOnChanges = function (changes) {
        if (changes.stsymbol.currentValue != null)
            this.exampleDatabase.getDataFromService(this.stsymbol);
        // console.log(changes.stsymbol.currentValue);
    };
    BarTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
    };
    return BarTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BarTableComponent.prototype, "stsymbol", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatPaginator */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatPaginator */]) === "function" && _a || Object)
], BarTableComponent.prototype, "paginator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSort */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSort */]) === "function" && _b || Object)
], BarTableComponent.prototype, "sort", void 0);
BarTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bar-table',
        template: __webpack_require__("../../../../../src/app/bar-table/bar-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bar-table/bar-table.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__service_bar_service__["a" /* BarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_bar_service__["a" /* BarService */]) === "function" && _c || Object])
], BarTableComponent);

/** An example database that the data source uses to retrieve data for the table. */
var ExampleDatabase = (function () {
    function ExampleDatabase(barService) {
        //console.log("insideoninit");
        this.barService = barService;
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ExampleDatabase.prototype.getDataFromService = function (symbol) {
        var _this = this;
        this.barService.getBars(symbol, '1y').subscribe(function (p) {
            _this.bars = p;
            _this.data.length = 0;
            _this.bars.forEach(function (element) {
                var copiedData = _this.data.slice();
                copiedData.push(element);
                _this.dataChange.next(copiedData);
            });
        });
    };
    ExampleDatabase.prototype.ngOnInit = function () {
    };
    return ExampleDatabase;
}());

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase, _paginator) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._paginator = _paginator;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._paginator.page,
        ];
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            var data = _this._exampleDatabase.data.slice();
            // Grab the page's slice of data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            return data.splice(startIndex, _this._paginator.pageSize);
        });
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__["n" /* DataSource */]));

var _a, _b, _c;
//# sourceMappingURL=bar-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n  <!-- <mat-tab label=\"Table\">\r\n    <app-bar-table [stsymbol]=\"selectedStock\"></app-bar-table>\r\n  </mat-tab> -->\r\n  <mat-tab *ngFor=\"let inter of chartInterval.reverse()\" label=\"{{inter}}\">\r\n    <app-bar-chart [stsymbol]=\"selectedStock\" [chartInterval]=\"inter\"></app-bar-chart>\r\n  </mat-tab>\r\n\r\n\r\n</mat-tab-group>"

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartComponent = (function () {
    function ChartComponent(route) {
        this.route = route;
        this.stsymbol = '';
        this.chartInterval = ['5y', '2y', '1y', 'ytd', '6m', '3m'];
    }
    ChartComponent.prototype.ngOnChanges = function (changes) {
        this.selectedStock = this.stsymbol;
    };
    ChartComponent.prototype.ngOnInit = function () {
    };
    return ChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ChartComponent.prototype, "stsymbol", void 0);
ChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart',
        template: __webpack_require__("../../../../../src/app/chart/chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chart/chart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object])
], ChartComponent);

var _a;
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/key-statistics/key-statistics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-grid-list {\r\n\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 13px;\r\n\r\n\r\n}\r\nmat-grid-tile, h3, mat-grid-list {\r\n\r\n}\r\np{\r\n    padding: 2px;\r\n    width:100%;\r\n\r\n    text-align: left;\r\n}\r\n\r\n\r\n#keys{\r\n    min-width: 400px;\r\n\r\n\r\n}\r\n\r\nh3{\r\n        width:100%;\r\n\r\n    text-align: left;\r\n}\r\n\r\n.positive {\r\n    border-radius: 13%;\r\n    background: #73AD21;\r\n}\r\n.negative {\r\n    border-radius: 13%;\r\n    background: #E94340;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/key-statistics/key-statistics.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"stats?.companyName && quotes?.latestPrice\" id=\"keys\">\r\n\r\n\r\n  <mat-grid-list cols=\"{{columnNum}}\" rowHeight=\"31px\">\r\n    <mat-grid-tile>\r\n      <h3>Company Name</h3>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <h3>{{stats.companyName}}({{stats.symbol}})</h3>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <h3>Last Price</h3>\r\n    </mat-grid-tile>\r\n\r\n    <mat-grid-tile>\r\n      <h3>{{quotes.latestPrice}}</h3>\r\n    </mat-grid-tile>\r\n    <!-- <h3>{{quotes.latestPrice}}</h3>\r\n    </mat-grid-tile> -->\r\n    <mat-grid-tile>\r\n      <p>Market Cap</p>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <p>{{stats.marketcap/1000000 | number : '1.2-2'}} M</p>\r\n    </mat-grid-tile>\r\n\r\n    <mat-grid-tile>\r\n      <p>52 Week High</p>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <p>{{stats.week52high | number : '1.2-2'}}</p>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <p>52 Week Low</p>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <p>{{stats.week52low}}</p>\r\n    </mat-grid-tile>\r\n\r\n\r\n    <mat-grid-tile>\r\n      <p>EPS</p>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <p>{{stats.latestEPS}} as of {{stats.latestEPSDate}}</p>\r\n    </mat-grid-tile>\r\n\r\n    <mat-grid-tile>\r\n      <p>Outstanding Share</p>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <p>{{stats.sharesOutstanding/1000000 | number : '1.2-2'}} M</p>\r\n    </mat-grid-tile>\r\n\r\n\r\n    <mat-grid-tile>\r\n      <p>Revenue</p>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <p>{{stats.revenue/1000000 | number : '1.2-2'}} M</p>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <p>Gross Profit</p>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <p>{{stats.grossProfit/1000000 | number : '1.2-2'}} M</p>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <p>Cash</p>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <p>{{stats.cash/1000000 | number : '1.2-2'}} M</p>\r\n    </mat-grid-tile>\r\n    <!-- <mat-grid-tile>\r\n      <p>Debt</p>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <p>{{stats.debt/1000000 | number : '1.2-2'}} M</p>\r\n    </mat-grid-tile> -->\r\n\r\n    <mat-grid-tile>\r\n      <p>Revenue Per Share</p>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <p>{{stats.revenuePerShare}}</p>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <p>Reveue Per Employee</p>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <p>{{stats.revenuePerEmployee/1000000 | number : '1.2-2'}} M</p>\r\n    </mat-grid-tile>\r\n\r\n\r\n  </mat-grid-list>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/key-statistics/key-statistics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_stats_service__ = __webpack_require__("../../../../../src/app/service/stats.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_quote_service__ = __webpack_require__("../../../../../src/app/service/quote.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyStatisticsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KeyStatisticsComponent = (function () {
    function KeyStatisticsComponent(statsService, quoteService) {
        this.statsService = statsService;
        this.quoteService = quoteService;
        this.stsymbol = '';
        this.columnNum = 4;
    }
    KeyStatisticsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.selectedStock = this.stsymbol;
        this.statsService.getStats(this.stsymbol).subscribe(function (p) { _this.stats = p; });
        this.quoteService.getQuotes(this.stsymbol).subscribe(function (p) { return _this.quotes = p; });
    };
    KeyStatisticsComponent.prototype.ngOnInit = function () {
    };
    return KeyStatisticsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], KeyStatisticsComponent.prototype, "stsymbol", void 0);
KeyStatisticsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-key-statistics',
        template: __webpack_require__("../../../../../src/app/key-statistics/key-statistics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/key-statistics/key-statistics.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_stats_service__["a" /* StatsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_stats_service__["a" /* StatsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_quote_service__["a" /* QuoteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_quote_service__["a" /* QuoteService */]) === "function" && _b || Object])
], KeyStatisticsComponent);

var _a, _b;
//# sourceMappingURL=key-statistics.component.js.map

/***/ }),

/***/ "../../../../../src/app/live-quote/live-quote.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/live-quote/live-quote.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  live-quote works!\r\n</p>\r\n{{messages}}\r\n\r\n<mat-list>\r\n  <mat-list-item *ngFor='let m of messages'> {{m }}asdf </mat-list-item>\r\n\r\n</mat-list>"

/***/ }),

/***/ "../../../../../src/app/live-quote/live-quote.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_web_sockets_service__ = __webpack_require__("../../../../../src/app/service/web-sockets.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveQuoteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LiveQuoteComponent = (function () {
    function LiveQuoteComponent(webSocket) {
        this.webSocket = webSocket;
        this.symbols = new Array();
    }
    LiveQuoteComponent.prototype.sendMessage = function () {
        this.message = 'aapl,vti,snap;fb;aig+';
        this.webSocket.sendMessage(this.message);
        this.message = '';
    };
    LiveQuoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this.webSocket.getMessages().subscribe(function (message) {
            //console.log(message);
            var found = false;
            _this.messages = message;
            _this.symbols.forEach(function (element) {
                if (element.symbol == _this.messages.symbol) {
                    element.lastSalePrice = _this.messages.lastSalePrice;
                    found = true;
                }
            });
            if (!found)
                _this.symbols.push(_this.messages);
        });
        this.message = 'aapl,snap;fb;aig+';
        this.sendMessage();
    };
    LiveQuoteComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    return LiveQuoteComponent;
}());
LiveQuoteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-live-quote',
        template: __webpack_require__("../../../../../src/app/live-quote/live-quote.component.html"),
        styles: [__webpack_require__("../../../../../src/app/live-quote/live-quote.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_web_sockets_service__["a" /* WebSocketsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_web_sockets_service__["a" /* WebSocketsService */]) === "function" && _a || Object])
], LiveQuoteComponent);

var _a;
//# sourceMappingURL=live-quote.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-router/main-router.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container{\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  width:100%;\r\n\r\n}\r\n.inneritem{\r\n-webkit-box-flex: 1;\r\n    -ms-flex-positive: 1;\r\n        flex-grow: 1;\r\n    -ms-flex-preferred-size: 0;\r\n        flex-basis: 0;\r\n\r\n}\r\n.flex-chart{\r\n\r\n\r\n}\r\n\r\n.flex-news{\r\n\r\n\r\n}\r\n\r\n/* .flex-statistics{\r\n\r\nflex-grow: 1;\r\nalign-items: flex-start;\r\n\r\n             background-color:#7e57c2;\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-router/main-router.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\" *ngIf=\"selectedStock\">\r\n\r\n  <div class=\"inneritem\">\r\n    <app-key-statistics [stsymbol]=\"selectedStock\"></app-key-statistics>\r\n  </div>\r\n  <div class=\"inneritem\">\r\n    <app-news [stsymbol]=\"selectedStock\"></app-news>\r\n  </div>\r\n  <div class=\"inneritem\">\r\n    <app-chart [stsymbol]=\"selectedStock\"></app-chart>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main-router/main-router.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRouterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainRouterComponent = (function () {
    function MainRouterComponent(route) {
        this.route = route;
        this.chartInterval = ['5y', '2y', '1y', 'ytd', '6m', '3m'];
    }
    MainRouterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedStock = 'vti';
        this.sub = this.route.params.subscribe(function (params) {
            _this.selectedStock = params['sym']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
    };
    return MainRouterComponent;
}());
MainRouterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main-router',
        template: __webpack_require__("../../../../../src/app/main-router/main-router.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-router/main-router.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object])
], MainRouterComponent);

var _a;
//# sourceMappingURL=main-router.component.js.map

/***/ }),

/***/ "../../../../../src/app/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\nmat-sidenav {\r\n\r\n\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 12px;\r\n    vertical-align:middle;\r\n    min-width: 400px;\r\n\r\n}\r\n\r\nmat-panel-title{\r\n    font-size: 13px;\r\n    min-width: 310px;\r\n}*/\r\n\r\n.body{\r\n    font-family: 'Droid Serif', serif;\r\n    font-size: 14px;\r\n    color: #2f2f2f;\r\n    background-color: #f9f7f1;\r\n}\r\nheader{\r\n    font-family: 'Playfair Display', serif;\r\n    font-weight: 900;\r\n    font-size: 80px;\r\n    text-transform: uppercase;\r\n    display: inline-block;\r\n    line-height: 72px;\r\n    margin-bottom: 20px;\r\n\r\n}\r\np{\r\n    margin-top: 0;\r\n    margin-bottom: 20px;\r\n}\r\n.head{\r\n    text-align: center;\r\n    position: relative;\r\n\r\n\r\n}\r\n\r\n.headerobjectswrapper{\r\n}\r\n\r\n.subhead{\r\n    text-transform: uppercase;\r\n    border-bottom: 2px solid #2f2f2f;\r\n    border-top: 2px solid #2f2f2f;\r\n    padding: 12px 0 12px 0;\r\n\r\n}\r\n.weatherforcastbox{\r\n    position: relative;\r\n    width: 12%;\r\n    left: 10px;\r\n    border: 3px double #2f2f2f;\r\n    padding: 10px 15px 10px 15px;\r\n    line-height: 20px;\r\n    display: inline-block;\r\n    margin: 0 50px 20px -360px;\r\n}\r\n.content{\r\n    font-size: 0;\r\n    line-height: 0;\r\n    word-spacing: -.31em;\r\n    display: inline-block;\r\n    margin: 30px 2% 0 2%;\r\n\r\n\r\n}\r\n.collumns{\r\n\r\n}\r\n\r\n.collumn{\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    width: 17.5%;\r\n    display: inline-block;\r\n    padding: 0 1% 0 1%;\r\n    vertical-align: top;\r\n    margin-bottom: 50px;\r\n    transition: all .7s;\r\n}\r\n.collumn + .collumn { \r\n  border-left: 1px solid #2f2f2f;\r\n}\r\n.collumn .headline{\r\n    text-align: center;\r\n    line-height: normal;\r\n    font-family: 'Playfair Display', serif;\r\n    display: block;\r\n    margin: 0 auto;\r\n\r\n\r\n}\r\n.collumn .headline.hl1{\r\n    font-weight: 700;\r\n    font-size: 30px;\r\n    text-transform: uppercase;\r\n    padding: 10px 0 10px 0;\r\n\r\n}\r\n\r\n.collumn .headline.hl2{\r\n    font-weight: 400;\r\n    font-style: italic;\r\n    font-size: 24px;\r\n    box-sizing: border-box;\r\n    padding: 10px 0 10px 0;\r\n}\r\n\r\n.collumn .headline.hl2:before{\r\n    border-top: 1px solid #2f2f2f;\r\n    content: '';\r\n    width: 100px;\r\n    height: 7px;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n.collumn .headline.hl2:after{\r\n    border-bottom: 1px solid #2f2f2f;\r\n    content: '';\r\n    width: 100px;\r\n    height: 13px;\r\n    display: block;\r\n    margin: 0 auto;\r\n\r\n}\r\n\r\n.collumn .headline.hl3{\r\n    font-weight: 400;\r\n    font-style: italic;\r\n    font-size: 36px;\r\n    box-sizing: border-box;\r\n    padding: 10px 0 10px 0;\r\n}\r\n\r\n.collumn .headline.h85{\r\n    font-weight: 700;\r\n    font-size: 16px;\r\n    box-sizing: border-box;\r\n    padding: 10px 0 10px 0;\r\n}\r\n\r\n.collumn .headline.hl4{\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n    box-sizing: border-box;\r\n    padding: 10px 0 10px 0;\r\n}\r\n.collumn .headline.hl4:before{\r\n    border-top: 1px solid #2f2f2f;\r\n    content: '';\r\n    width: 100px;\r\n    height: 7px;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n.collumn .headline.hl4:after{\r\n    border-bottom: 1px solid #2f2f2f;\r\n    content: '';\r\n    width: 100px;\r\n    height: 10px;\r\n    display: block;\r\n    margin: 0 auto;\r\n\r\n}\r\n\r\n.collumn .headline.hl5{\r\n    font-weight: 400;\r\n    font-size: 42px;\r\n    text-transform: uppercase;\r\n    font-style: italic;\r\n    box-sizing: border-box;\r\n    padding: 10px 0 10px 0;\r\n}\r\n.collumn .headline.hl6{\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    box-sizing: border-box;\r\n    padding: 10px 0 10px 0;\r\n}\r\n.collumn .headline.hl6:before{\r\n    border-top: 1px solid #2f2f2f;\r\n    content: '';\r\n    width: 100px;\r\n    height: 7px;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n.collumn .headline.hl6:after{\r\n    border-bottom: 1px solid #2f2f2f;\r\n    content: '';\r\n    width: 100px;\r\n    height: 10px;\r\n    display: block;\r\n    margin: 0 auto;\r\n\r\n}\r\n.collumn .headline.hl7{\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n    box-sizing: border-box;\r\n    display: block;\r\n    padding: 10px 0 10px 0;\r\n}\r\n.collumn .headline.hl8{\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n    box-sizing: border-box;\r\n    padding: 10px 0 10px 0;\r\n}\r\n.collumn .headline.hl9{\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n    box-sizing: border-box;\r\n    padding: 10px 0 10px 0;\r\n}\r\n.collumn .headline.hl10{\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n    box-sizing: border-box;\r\n    padding: 10px 0 10px 0;\r\n}\r\n.collumn .citation{\r\n    font-family: 'Playfair Display', serif;\r\n    font-size: 36px;\r\n    line-height: 44px;\r\n    /*font-style: italic;*/\r\n    text-align: center;\r\n    font-weight: 400;\r\n    display: block;\r\n    margin: 40px 0 40px 0;\r\n    -webkit-font-feature-settings: \"liga\", \"dlig\";\r\n            font-feature-settings: \"liga\", \"dlig\";\r\n\r\n}\r\n.collumn .citation:before{\r\n    border-top: 1px solid #2f2f2f;\r\n    content: '';\r\n    width: 100px;\r\n    height: 16px;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n.collumn .citation:after{\r\n    border-bottom: 1px solid #2f2f2f;\r\n    content: '';\r\n    width: 100px;\r\n    height: 16px;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n.collumn .figure {\r\n\t  margin: 0 0 20px;\r\n}\r\n.collumn .figcaption{\r\n\tfont-style: italic;\r\n\tfont-size: 12px;\r\n}\r\n.media {\r\n    -webkit-filter: sepia(80%) contrast(1) opacity(0.8);\r\n    filter: sepia(80%) grayscale(1) contrast(1) opacity(0.8);\r\n    mix-blend-mode: multiply;\r\n    width: 100%;\r\n}\r\n/*________________________________________________________________________________________________________________________________*/\r\n/*MEDIAQUERIES*/\r\n@media only all and (max-width: 1300px) {\r\n    .weatherforcastbox{\r\n        display: none;\r\n    }\r\n\r\n}\r\n@media only all and (max-width: 1200px) {\r\n    .collumn{\r\n        width: 31%;\r\n    }\r\n\r\n}\r\n    @media only all and (max-width: 900px) {\r\n    .collumn{\r\n        width: 47%;\r\n    }\r\n\r\n}\r\n@media only all and (max-width: 600px) {\r\n    .collumn{\r\n        width: 100%;\r\n    }\r\n\t.collumn + .collumn {\r\n\t\t\t\tborder-left: none;\r\n      \tborder-bottom: 1px solid #2f2f2f;\r\n\t}\r\n    header{\r\n        max-width: 320px;\r\n        font-size: 60px;\r\n        line-height: 54px;\r\n        overflow: hidden;\r\n    }\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <mat-accordion>\r\n  <mat-expansion-panel *ngFor=\"let n of news\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <b>{{n.datetime | date:'short'}}</b> -{{n.headline}}\r\n\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n\r\n    <div>{{n.summary}}</div>\r\n  </mat-expansion-panel>\r\n</mat-accordion> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"content\">\r\n  <div class=\"collumns\">\r\n    <div class=\"collumn\" *ngFor=\"let n of news\">\r\n      <div class=\"head\">\r\n        <p>\r\n          <span class=\"headline h85\">\r\n            {{n.datetime | date:'short'}} -{{n.headline}}</span>\r\n        </p>\r\n      </div>\r\n      <p *ngIf=\"n.summary!='No summary available.'\">{{n.summary}}</p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_news_service__ = __webpack_require__("../../../../../src/app/service/news.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsComponent = (function () {
    function NewsComponent(newsService) {
        this.newsService = newsService;
        this.news = new Array();
        this.stsymbol = '';
    }
    NewsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.selectedStock = this.stsymbol;
        this.newsService.getNews(this.stsymbol).subscribe(function (val) { _this.news = val; _this.deleteUnwantedNews(); });
    };
    NewsComponent.prototype.deleteUnwantedNews = function () {
        for (var i = 0; i < this.news.length; i++) {
            //console.log(this.news[i].summary.length);
            if (this.news[i].summary.length < 40) {
                this.news.splice(i, 1);
                //console.log(this.news[i].summary);
            }
        }
    };
    NewsComponent.prototype.ngOnInit = function () {
    };
    return NewsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], NewsComponent.prototype, "stsymbol", void 0);
NewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-news',
        template: __webpack_require__("../../../../../src/app/news/news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/news/news.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_news_service__["a" /* NewsService */]) === "function" && _a || Object])
], NewsComponent);

var _a;
//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/portfolio/dialog-component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add / Update Portfolio</h1>\r\n<div mat-dialog-content>\r\n    <!-- <p>New Value for {{data.id}}</p> -->\r\n\r\n    <app-symbol *ngIf=\"data.stock.length<2\" (selectedStock)=\"data.stock=$event\">></app-symbol>\r\n    <div>\r\n        <mat-form-field *ngIf=\"data.stock.length>1\">\r\n            <input matInput tabindex=\"1\" type=\"string\" [disabled]=\"true\" placeholder=\"Stock\" [(ngModel)]=\"data.stock\">\r\n        </mat-form-field>\r\n    </div>\r\n\r\n    <mat-form-field>\r\n        <input matInput tabindex=\"2\" type=\"number\" min=\"1\" placeholder=\"Unit Price\" [(ngModel)]=\"data.price\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n        <input matInput tabindex=\"3\" min=\"1\" type=\"number\" placeholder=\"Quantity\" [(ngModel)]=\"data.quantity\">\r\n    </mat-form-field>\r\n\r\n\r\n    <div>\r\n        <mat-hint *ngIf=\"getErrorText(data)\" [ngStyle]=\"{'color': 'red'}\" align=\"start\">{{getErrorText(data)}}</mat-hint>\r\n    </div>\r\n\r\n\r\n\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button [disabled]=\"getErrorText(data)!=''\" [mat-dialog-close]=\"data\" tabindex=\"2\">Save</button>\r\n    <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\r\n.example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding-left: 24px;\r\n  font-size: 20px;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  height: 100%;\r\n}\r\n\r\n.mat-header-cell .mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n.example-header {\r\n  min-height: 64px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding-left: 24px;\r\n  font-size: 20px;\r\n}\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  margin-left: 32px;\r\n}\r\n\r\nbutton[mat-fab] {\r\n  \r\n     /* position: fixed;  */\r\n    /* bottom: 25x;*/\r\n     left: 90%; \r\n}\r\n\r\n.editicon,.deleteicon{\r\n /* font-size: 20px;\r\n  padding: 2px; */\r\n}\r\n\r\n\r\n.deleteicon{\r\n  color:rgb(182, 54, 54);\r\n}\r\n\r\n.mat-column-price,\r\n.mat-column-quantity ,\r\n.mat-column-lastPrice ,\r\n.mat-column-current ,\r\n.mat-column-profit {\r\n\r\n}\r\n\r\n.mat-column-key{\r\n  text-align: right;\r\n    /* min-width: 180px; */\r\n} \r\n\r\n.mat-column-profit_percentage, .mat-column-dayChangePercentage {\r\n  \r\ntext-align: center;\r\n  \r\n}\r\n\r\n.positive {\r\n width:58px;\r\n  padding: 4px;\r\n\r\n    border-radius: 20%;\r\n    background: #73AD21;\r\n    color: white;\r\n}\r\n.negative {\r\n   width:58px;\r\n  padding: 4px;\r\n    border-radius: 20%;\r\n    background: #E94340;\r\n    color:white;\r\n}\r\n\r\n.total{\r\n  font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-header\">\n    <mat-form-field floatPlaceholder=\"never\">\n      <input matInput #filter placeholder=\"Filter\">\n    </mat-form-field>\n\n  </div>\n  <mat-paginator #paginator [length]=\"exampleDatabase.data.length\" [pageIndex]=\"0\" [pageSize]=\"25\" [pageSizeOptions]=\"[5, 10, 25, 100]\">\n\n  </mat-paginator>\n\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"stock\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Stock </mat-header-cell>\n\n      <mat-cell *matCellDef=\"let row;let i = index; \">\n        <div [ngClass]=\"{'total':row.stock == 'Total'} \">{{row.stock}}</div>\n\n      </mat-cell>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"price\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Price Paid</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <div *ngIf=\"row.stock != 'Total'\">{{row.price| number:'.1-2'}} </div>\n      </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"quantity\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Quantity </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <div *ngIf=\"row.stock != 'Total'\">{{row.quantity}}</div>\n      </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"lastPrice\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Current Price </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <div *ngIf=\"row.stock != 'Total'\">{{row.lastPrice| number:'.1-2'}} </div>\n      </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"dayChangePercentage\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Day Change% </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <div [ngClass]=\"{'positive': row.dayChangePercentage>=0, 'negative': row.dayChangePercentage<0, 'total':row.stock == 'Total'} \">{{row.dayChangePercentage | number:'.1-2'}} % </div>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"pq\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Spend </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.price*row.quantity | number:'.1-2'}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"current\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Value </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <div [ngClass]=\"{'total':row.stock == 'Total'} \"> {{row.current | number:'.1-2'}}</div>\n      </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"profit\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Profit / Loss </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <div [ngClass]=\"{'total':row.stock == 'Total'} \">{{row.profit | number:'.1-2'}}</div>\n      </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"profit_percentage\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Profit / Loss(%) </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <div [ngClass]=\"{'positive': row.profit_percentage>=0, 'negative': row.profit_percentage<0, 'total':row.stock == 'Total'} \">{{row.profit_percentage | number:'.1-2'}} %</div>\n      </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"key\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <div *ngIf=\"row.stock != 'Total'\">\n          <button mat-button (click)=\"openDialog(row)\">\n            <mat-icon class=\"editicon\" color=\"primary\">edit</mat-icon>\n          </button>\n\n        </div>\n      </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"key1\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <div *ngIf=\"row.stock != 'Total'\">\n          <button mat-button (click)=\"favStockService.remPortfolio(uid, row.key)\">\n            <mat-icon class=\"deleteicon\">delete</mat-icon>\n          </button>\n        </div>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n\n</div>\n<br>\n<button (click)=\"openAddDialog()\" mat-fab>\n  <mat-icon>add</mat-icon>\n</button>\n<br>"

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_fav_stocks_service__ = __webpack_require__("../../../../../src/app/service/fav-stocks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_quote_service__ = __webpack_require__("../../../../../src/app/service/quote.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PortfolioComponent; });
/* unused harmony export ExampleDatabase */
/* unused harmony export ExampleDataSource */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogChangeValue; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
















var PortfolioComponent = (function () {
    function PortfolioComponent(quoteService, favStockService, authService, route, dialog) {
        this.quoteService = quoteService;
        this.favStockService = favStockService;
        this.authService = authService;
        this.route = route;
        this.dialog = dialog;
        this.tot = { stock: "Total", price: 0, quantity: 0, lastPrice: 0, key: "", dayChangePercentage: 0, current: 0, profit: 0, profit_percentage: 0 };
        this.displayedColumns = ['stock', 'quantity', 'price', 'lastPrice', 'dayChangePercentage', 'current', 'profit', 'profit_percentage', 'key', 'key1'];
        this.exampleDatabase = new ExampleDatabase();
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.sort, this.paginator);
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
        this.authService.user$.subscribe(function (user) {
            if (user) {
                _this.uid = user.uid;
                var portfolio$ = _this.favStockService.getPortfolio(_this.uid);
                portfolio$.subscribe(function (eArray) {
                    if (eArray) {
                        var v = { stock: "Total", price: 0, quantity: 0, lastPrice: 0, key: "", dayChangePercentage: 0, current: 0, profit: 0, profit_percentage: 0 };
                        eArray.push(v);
                        _this.exampleDatabase.dataChange.next(eArray);
                        _this.refreshval(false);
                    }
                });
            }
        });
        this.refreshval(true);
    };
    PortfolioComponent.prototype.refreshval = function (refresh) {
        var _this = this;
        this.PrevClose = 0;
        this.profitPercentage = 0;
        if (this.exampleDatabase.data.length > 0)
            this.tot = this.exampleDatabase.data[this.exampleDatabase.data.length - 1];
        this.tot.price = 0;
        this.tot.quantity = 0;
        this.tot.lastPrice = 0;
        this.tot.dayChangePercentage = 0;
        this.tot.current = 0;
        this.tot.profit = 0;
        this.tot.profit_percentage = 0;
        var len = this.exampleDatabase.data.length - 1;
        //console.log("refresh called");
        if (refresh)
            setTimeout(function () { return _this.refreshval(true); }, 30000);
        this.exampleDatabase.data.forEach(function (element) {
            if (element.stock != "Total")
                _this.quoteService.getQuotes(element.stock).subscribe(function (p) {
                    element.lastPrice = p.latestPrice;
                    element.dayChangePercentage = p.changePercent * 100;
                    element.current = element.quantity * element.lastPrice;
                    _this.PrevClose += element.current * (1 - p.changePercent);
                    element.profit = (element.lastPrice - element.price) * element.quantity;
                    element.profit_percentage = element.lastPrice / element.price * 100 - 100;
                    _this.tot.price += element.price;
                    _this.tot.quantity += element.quantity;
                    _this.tot.lastPrice += element.lastPrice;
                    _this.tot.current += element.current;
                    _this.tot.profit += element.profit;
                    _this.tot.profit_percentage = _this.tot.current / (_this.tot.current - _this.tot.profit) * 100 - 100;
                    _this.tot.dayChangePercentage = _this.tot.current / _this.PrevClose * 100 - 100;
                    //this.tot.profit_percentage += element.profit_percentage / len;
                    //console.log(p);
                    //this.updateOrPush(p);
                });
        });
    };
    PortfolioComponent.prototype.addorUpdateRecord = function (temp) {
        var copiedData = this.exampleDatabase.data.slice();
        copiedData.push(temp);
        this.exampleDatabase.dataChange.next(copiedData);
    };
    PortfolioComponent.prototype.openDialog = function (v) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogChangeValue, {
            data: { data: v, alldata: this.exampleDatabase.data }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result)
                _this.favStockService.updatePortfolio(_this.uid, result);
        });
    };
    PortfolioComponent.prototype.openAddDialog = function () {
        var v = { stock: "", price: 0, quantity: 0, lastPrice: 0, key: "", dayChangePercentage: 0, current: 0, profit: 0, profit_percentage: 0 };
        this.openDialog(v);
    };
    return PortfolioComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MatSort */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MatSort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MatSort */]) === "function" && _a || Object)
], PortfolioComponent.prototype, "sort", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('filter'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], PortfolioComponent.prototype, "filter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["E" /* MatPaginator */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["E" /* MatPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["E" /* MatPaginator */]) === "function" && _c || Object)
], PortfolioComponent.prototype, "paginator", void 0);
PortfolioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-portfolio',
        template: __webpack_require__("../../../../../src/app/portfolio/portfolio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portfolio/portfolio.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_15__service_quote_service__["a" /* QuoteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__service_quote_service__["a" /* QuoteService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_12__service_fav_stocks_service__["a" /* FavStocksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__service_fav_stocks_service__["a" /* FavStocksService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_13__service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__service_auth_service__["a" /* AuthService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_14__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__angular_router__["ActivatedRoute"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["F" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["F" /* MatDialog */]) === "function" && _h || Object])
], PortfolioComponent);

/** An example database that the data source uses to retrieve data for the table. */
var ExampleDatabase = (function () {
    function ExampleDatabase() {
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    return ExampleDatabase;
}());

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase, _sort, _paginator) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._sort = _sort;
        _this._paginator = _paginator;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.sortChange, this._filterChange,
            this._paginator.page,
        ];
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            return _this.getSortedData().slice().filter(function (item) {
                var searchStr = (item.stock).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            }).splice(startIndex, _this._paginator.pageSize);
        });
    };
    ExampleDataSource.prototype.disconnect = function () { };
    /** Returns a sorted copy of the database data. */
    ExampleDataSource.prototype.getSortedData = function () {
        var _this = this;
        var data = this._exampleDatabase.data.slice();
        if (!this._sort.active || this._sort.direction == '') {
            return data;
        }
        return data.sort(function (a, b) {
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'userId':
                    _a = [a.stock, b.stock], propertyA = _a[0], propertyB = _a[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction == 'asc' ? 1 : -1);
            var _a;
        });
    };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));

////////////////
var DialogChangeValue = (function () {
    function DialogChangeValue(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data.data;
        this.alldata = data.alldata;
    }
    DialogChangeValue.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogChangeValue.prototype.getErrorText = function (v) {
        var found = false;
        if (v.stock.length < 1)
            return "Select Symbol";
        this.alldata.forEach(function (element) {
            if (v.stock == element.stock && v.key.length < 2) {
                found = true;
            }
        });
        if (found)
            return "Symbol Already exist in Portfolio";
        if (v.price < 1)
            return "Enter Price";
        if (v.quantity < 1)
            return "Enter Quantity";
        // if (v.value == v.setValue) return '  ';
        // if (v.maxValue == v.minValue) return '';
        // if (v.setValue < v.minValue) return 'Min value is ' + v.minValue;
        // if (v.setValue > v.maxValue) return 'Max value is ' + v.maxValue;
        return '';
    };
    return DialogChangeValue;
}());
DialogChangeValue = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dialog-overview-example-dialog',
        template: __webpack_require__("../../../../../src/app/portfolio/dialog-component.html"),
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["G" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["H" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["H" /* MatDialogRef */]) === "function" && _j || Object, Object])
], DialogChangeValue);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=portfolio.component.js.map

/***/ }),

/***/ "../../../../../src/app/quote-nav/quote-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-sidenav {\r\n\r\n    background-color:#7e57c2; /* #935CFA;*/\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 15px;\r\n    vertical-align:middle;\r\n    color: white;\r\n    width:100%;\r\n    height:100%;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quote-nav/quote-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav mode=\"side\" opened=\"true\">\n  <app-symbol (selectedStock)=\"onSelectedStockChange($event)\">></app-symbol>\n\n  <app-quote [stsymbol]=\"selectedStock\">\n  </app-quote>\n\n</mat-sidenav>"

/***/ }),

/***/ "../../../../../src/app/quote-nav/quote-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuoteNavComponent = (function () {
    function QuoteNavComponent(db) {
        // db.object('connected').subscribe(console.log);
    }
    QuoteNavComponent.prototype.onSelectedStockChange = function (stock) {
        this.selectedStock = stock.toLocaleUpperCase();
    };
    QuoteNavComponent.prototype.ngOnInit = function () {
    };
    return QuoteNavComponent;
}());
QuoteNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-quote-nav',
        template: __webpack_require__("../../../../../src/app/quote-nav/quote-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/quote-nav/quote-nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], QuoteNavComponent);

var _a;
//# sourceMappingURL=quote-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/quote/quote.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* mat-grid-tile {\r\n  display: flex;\r\n  font-family: Arial;\r\n  font-size: 12px;\r\n\r\n} */\r\n\r\n.positive {\r\n    border-radius: 20%;\r\n    background: #73AD21;\r\n}\r\n.negative {\r\n    border-radius: 20%;\r\n    background: #E94340;\r\n}\r\n\r\nmat-grid-list{\r\n    padding: 2px;\r\n  margin: 2px;\r\n}\r\n\r\n.text-inside-grid {\r\n  position: absolute;\r\n  left: 5px;\r\n}\r\n\r\nmat-icon { font-size: 18px; color:#533E3E;}\r\n\r\n\r\n\r\n.drNav{\r\n    padding:4px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 15px;\r\n    vertical-align:middle;\r\n    color: white;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n\r\nbutton{\r\n    width:100%;\r\n    min-width: 310px;\r\n    text-align: left;\r\n}\r\n\r\n.drMain {\r\n    -ms-flex-preferred-size: 0;\r\n        flex-basis: 0;\r\n    /* ... */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quote/quote.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <mat-grid-list cols=\"3\" rowHeight=\"40px\">\r\n  <mat-grid-tile>\r\n    Symbol\r\n  </mat-grid-tile>\r\n  <mat-grid-tile>\r\n    Price\r\n  </mat-grid-tile>\r\n  <mat-grid-tile>\r\n    Change\r\n  </mat-grid-tile>\r\n</mat-grid-list> -->\r\n<!-- <div class=\"QuoteChild\" *ngFor='let m of quotes'>\r\n  <mat-grid-list cols=\"3\" rowHeight=\"40px\" [routerLink]=\"['/main', m.symbol]\">\r\n    <mat-grid-tile>\r\n      <div class=\"text-inside-grid\">\r\n        <mat-icon (click)=\"deleteSymbolServer(m.symbol)\">highlight_off</mat-icon>&nbsp;&nbsp;{{m.symbol}}</div>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      {{m.latestPrice| number:'.1-2'}}\r\n    </mat-grid-tile>\r\n    <mat-grid-tile [ngClass]=\"{'positive': m.changePercent>0, 'negative': m.changePercent<0}\">\r\n      {{m.changePercent*100 | number:'.1-3'}}%\r\n    </mat-grid-tile>\r\n\r\n  </mat-grid-list>\r\n</div> -->\r\n<div class=\"drNav\">\r\n  <div class=\"drMain\" *ngFor=\"let m of quotes;let i=index\">\r\n    <button mat-button [routerLink]=\"['/main', m.symbol]\">\r\n      <mat-grid-list cols=\"3\" rowHeight=\"40px\">\r\n        <mat-grid-tile>\r\n          <div class=\"text-inside-grid\">\r\n            <mat-icon (click)=\"deleteSymbolServer(m.symbol)\">highlight_off</mat-icon>&nbsp;&nbsp;{{m.symbol}}</div>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n          {{m.latestPrice| number:'.1-2'}}\r\n        </mat-grid-tile>\r\n        <mat-grid-tile [ngClass]=\"{'positive': m.changePercent>0, 'negative': m.changePercent<0}\">\r\n          {{m.changePercent*100 | number:'.1-3'}}%\r\n        </mat-grid-tile>\r\n\r\n      </mat-grid-list>\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/quote/quote.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_quote_service__ = __webpack_require__("../../../../../src/app/service/quote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_fav_stocks_service__ = __webpack_require__("../../../../../src/app/service/fav-stocks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var QuoteComponent = (function () {
    function QuoteComponent(quoteService, router, favStockService, authService) {
        this.quoteService = quoteService;
        this.router = router;
        this.favStockService = favStockService;
        this.authService = authService;
        this.quotes = Array();
        this.mapKeySymbol = new Map();
    }
    QuoteComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var found = false;
        if (this.stsymbol)
            this.quotes.forEach(function (element) {
                if (element.symbol == _this.stsymbol)
                    found = true;
            });
        if (this.stsymbol && !found)
            this.favStockService.addFavStock(this.uid, this.stsymbol);
    };
    QuoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refreshval();
        this.authService.user$.subscribe(function (user) {
            if (user)
                _this.uid = user.uid;
            else
                _this.uid = 'default';
            _this.getFavStocksFromDB();
        });
    };
    QuoteComponent.prototype.refreshval = function () {
        var _this = this;
        //console.log("refresh called");
        setTimeout(function () { return _this.refreshval(); }, 10000);
        this.quotes.forEach(function (element) {
            _this.quoteService.getQuotes(element.symbol).subscribe(function (p) {
                _this.updateOrPush(p);
            });
        });
    };
    QuoteComponent.prototype.deleteSymbolServer = function (sym) {
        //console.log("delete clicked");
        this.favStockService.remFavStock(this.uid, this.mapKeySymbol[sym]);
    };
    QuoteComponent.prototype.deleteSymbol = function (sym) {
        for (var i = 0; i < this.quotes.length; i++) {
            if (this.quotes[i].symbol == sym) {
                this.quotes.splice(i, 1);
                break;
            }
        }
    };
    QuoteComponent.prototype.addOrUpdate = function (sym) {
        var _this = this;
        this.quoteService.getQuotes(sym).subscribe(function (p) {
            var found = false;
            for (var i = 0; i < _this.quotes.length; i++) {
                if (_this.quotes[i].symbol.toUpperCase() == sym.toUpperCase()) {
                    found = true;
                }
            }
            if (found == false)
                _this.quotes.push(p);
            // if (this.quotes.length < 3)
            //   this.router.navigate(['/main', this.quotes[0].symbol.toUpperCase()]);
        });
    };
    QuoteComponent.prototype.updateOrPush = function (p) {
        var found = false;
        for (var i = 0; i < this.quotes.length; i++) {
            if (this.quotes[i].symbol == p.symbol) {
                this.quotes[i].latestPrice = p.latestPrice;
                this.quotes[i].changePercent = p.changePercent;
                found = true;
                break;
            }
        }
        if (found == false)
            this.quotes.push(p);
    };
    QuoteComponent.prototype.getFavStocksFromDB = function () {
        var _this = this;
        this.quotes = Array();
        var favStocks$ = this.favStockService.getFavStocks(this.uid);
        //console.log('inside getfavstockfrom db' + this.favStocks$);
        favStocks$.subscribe(function (data) {
            data.forEach(function (element) {
                _this.mapKeySymbol[element.stock] = element.key;
                //console.log(element);
                //console.log(element);
                _this.addOrUpdate(element.stock);
            });
            _this.quotes.forEach(function (q) {
                var found = false;
                data.forEach(function (d) {
                    if (q.symbol.toUpperCase() == d.stock.toUpperCase()) {
                        found = true;
                    }
                });
                if (!found)
                    _this.deleteSymbol(q.symbol);
            });
        });
    };
    return QuoteComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], QuoteComponent.prototype, "stsymbol", void 0);
QuoteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-quote',
        template: __webpack_require__("../../../../../src/app/quote/quote.component.html"),
        styles: [__webpack_require__("../../../../../src/app/quote/quote.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__service_quote_service__["a" /* QuoteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_quote_service__["a" /* QuoteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__service_fav_stocks_service__["a" /* FavStocksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_fav_stocks_service__["a" /* FavStocksService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], QuoteComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=quote.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
        this.user$ = this.afAuth.authState;
    }
    AuthService.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_0_firebase_app__["auth"].GoogleAuthProvider())
            .then(function (_) { return _this.router.navigate(["/main"]); })
            .catch(function (error) { return console.log('auth error', error); });
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.router.navigate(["/main"]);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/bar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import 'rxjs/add/operator/map';
var BarService = (function () {
    function BarService(http) {
        this.http = http;
        this._barUrl = 'https://api.iextrading.com/1.0/stock/aapl/chart/';
    }
    BarService.prototype.getBars = function (symbol, interval) {
        //console.log(this._barUrl);
        return this.http.get(this._barUrl.replace("aapl", symbol) + interval)
            .map(function (res) { return res.json(); });
    };
    BarService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return BarService;
}());
BarService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BarService);

var _a;
//# sourceMappingURL=bar.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/fav-stocks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavStocksService; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavStocksService = (function () {
    function FavStocksService(db, afs, authService) {
        this.db = db;
        this.afs = afs;
        this.authService = authService;
        this.intFavStock();
        authService.user$.subscribe(function (user) {
            if (user)
                console.log('inside constlogin' + user.displayName);
        });
    }
    FavStocksService.prototype.ngOnInit = function () {
    };
    //favStocks$: AngularFireList<{}>;
    // favStocks$: FirebaseListObservable<Favstock[]>;
    FavStocksService.prototype.intFavStock = function () {
        this.favStocks$ = this.db.list('favstocks');
        this.portfolio$ = this.db.list('portfolio');
    };
    FavStocksService.prototype.getFavStocks = function (uid) {
        //return this.db.list<any>('favstocks', ref => ref.orderByChild('user').equalTo(uid));
        var favStockRef = this.db.list('favstocks', function (ref) { return ref.orderByChild('user').equalTo(uid); });
        var favStocks = favStockRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        return favStocks;
    };
    FavStocksService.prototype.addFavStock = function (uid, sym) {
        this.favStocks$.push({ user: uid, stock: sym });
    };
    FavStocksService.prototype.getPortfolio = function (uid) {
        //return this.db.list<any>('portfolio', ref => ref.orderByChild('user').equalTo(uid));
        var portfolioRef = this.db.list('portfolio', function (ref) { return ref.orderByChild('user').equalTo(uid); });
        var portfolios = portfolioRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        return portfolios;
    };
    FavStocksService.prototype.addPortfolio = function (uid, sym, p, qty) {
        this.portfolio$.push({ user: uid, stock: sym, price: p, quantity: qty });
    };
    FavStocksService.prototype.updatePortfolio = function (uid, portfolio) {
        var portfolioRef = this.db.list('portfolio', function (ref) { return ref.orderByChild('user').equalTo(uid); });
        if (portfolio.key.length > 2) {
            portfolioRef.update(portfolio.key.toString(), { user: uid, stock: portfolio.stock, price: portfolio.price, quantity: portfolio.quantity });
        }
        else {
            portfolioRef.push({ user: uid, stock: portfolio.stock, price: portfolio.price, quantity: portfolio.quantity });
        }
    };
    FavStocksService.prototype.remPortfolio = function (uid, key) {
        var portfolioRef = this.db.list('portfolio', function (ref) { return ref.orderByChild('user').equalTo(uid); });
        portfolioRef.remove(key);
    };
    FavStocksService.prototype.remFavStock = function (uid, sym) {
        var favStockRef = this.db.list('favstocks', function (ref) { return ref.orderByChild('user').equalTo(uid); });
        favStockRef.remove(sym);
    };
    FavStocksService.prototype.getKeyPortfolio = function (uid, sym) {
        var key;
        var portfolioRef = this.db.list('portfolio', function (ref) { return ref.orderByChild('user').equalTo(uid); });
        var portfolios = portfolioRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        return portfolios;
    };
    return FavStocksService;
}());
FavStocksService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["b" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["b" /* AngularFirestore */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], FavStocksService);

var _a, _b, _c;
//# sourceMappingURL=fav-stocks.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
        this._newsUrl = 'https://api.iextrading.com/1.0/stock/aapl/news';
    }
    NewsService.prototype.getNews = function (symbol) {
        //console.log(this._newsUrl);
        return this.http.get(this._newsUrl.replace("aapl", symbol))
            .map(function (res) { return res.json(); });
    };
    NewsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return NewsService;
}());
NewsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NewsService);

var _a;
//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/quote.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuoteService = (function () {
    function QuoteService(http) {
        this.http = http;
        this._quoteUrl = 'https://api.iextrading.com/1.0/stock/aapl/quote';
    }
    QuoteService.prototype.getQuotes = function (symbol) {
        //console.log(this._quoteUrl);
        return this.http.get(this._quoteUrl.replace("aapl", symbol))
            .map(function (res) { return res.json(); });
    };
    QuoteService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return QuoteService;
}());
QuoteService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], QuoteService);

var _a;
//# sourceMappingURL=quote.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/stats.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatsService = (function () {
    function StatsService(http) {
        this.http = http;
        this._statsUrl = 'https://api.iextrading.com/1.0/stock/aapl/stats';
    }
    StatsService.prototype.getStats = function (symbol) {
        //console.log(this._statsUrl);
        return this.http.get(this._statsUrl.replace("aapl", symbol))
            .map(function (res) { return res.json(); });
    };
    StatsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return StatsService;
}());
StatsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], StatsService);

var _a;
//# sourceMappingURL=stats.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/symbol.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SymbolService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SymbolService = (function () {
    function SymbolService(http) {
        this.http = http;
        this._symbolUrl = 'http://data.okfn.org/data/core/nyse-other-listings/r/nyse-listed.json';
        this.stocks = ['SPY', 'VTI', 'VOO', 'QQQ', 'MMM',
            'ABT',
            'ABBV',
            'ACN',
            'ATVI',
            'AYI',
            'ADBE',
            'AAP',
            'AES',
            'AET',
            'AMG',
            'AFL',
            'A',
            'APD',
            'AKAM',
            'ALK',
            'ALB',
            'ALXN',
            'ALLE',
            'AGN',
            'ADS',
            'LNT',
            'ALL',
            'GOOGL',
            'GOOG',
            'MO',
            'AMZN',
            'AEE',
            'AAL',
            'AEP',
            'AXP',
            'AIG',
            'AMT',
            'AWK',
            'AMP',
            'ABC',
            'AME',
            'AMGN',
            'APH',
            'APC',
            'ADI',
            'ANTM',
            'AON',
            'APA',
            'AIV',
            'AAPL',
            'AMAT',
            'ADM',
            'ARNC',
            'AJG',
            'AIZ',
            'T',
            'ADSK',
            'ADP',
            'AN',
            'AZO',
            'AVB',
            'AVY',
            'BHI',
            'BLL',
            'BAC',
            'BCR',
            'BAX',
            'BBT',
            'BDX',
            'BBBY',
            'BRK.B',
            'BBY',
            'BIIB',
            'BLK',
            'HRB',
            'BA',
            'BWA',
            'BXP',
            'BSX',
            'BMY',
            'AVGO',
            'BF.B',
            'CHRW',
            'CA',
            'COG',
            'CPB',
            'COF',
            'CAH',
            'KMX',
            'CCL',
            'CAT',
            'CBOE',
            'CBG',
            'CBS',
            'CELG',
            'CNC',
            'CNP',
            'CTL',
            'CERN',
            'CF',
            'SCHW',
            'CHTR',
            'CHK',
            'CVX',
            'CMG',
            'CB',
            'CHD',
            'CI',
            'XEC',
            'CINF',
            'CTAS',
            'CSCO',
            'C',
            'CFG',
            'CTXS',
            'CME',
            'CMS',
            'COH',
            'KO',
            'CTSH',
            'CL',
            'CMCSA',
            'CMA',
            'CAG',
            'CXO',
            'COP',
            'ED',
            'STZ',
            'GLW',
            'COST',
            'COTY',
            'CCI',
            'CSRA',
            'CSX',
            'CMI',
            'CVS',
            'DHI',
            'DHR',
            'DRI',
            'DVA',
            'DE',
            'DLPH',
            'DAL',
            'XRAY',
            'DVN',
            'DLR',
            'DFS',
            'DISCA',
            'DISCK',
            'DG',
            'DLTR',
            'D',
            'DOV',
            'DOW',
            'DPS',
            'DTE',
            'DD',
            'DUK',
            'DNB',
            'ETFC',
            'EMN',
            'ETN',
            'EBAY',
            'ECL',
            'EIX',
            'EW',
            'EA',
            'EMR',
            'ETR',
            'EVHC',
            'EOG',
            'EQT',
            'EFX',
            'EQIX',
            'EQR',
            'ESS',
            'EL',
            'ES',
            'EXC',
            'EXPE',
            'EXPD',
            'ESRX',
            'EXR',
            'XOM',
            'FFIV',
            'FB',
            'FAST',
            'FRT',
            'FDX',
            'FIS',
            'FITB',
            'FSLR',
            'FE',
            'FISV',
            'FLIR',
            'FLS',
            'FLR',
            'FMC',
            'FTI',
            'FL',
            'F',
            'FTV',
            'FBHS',
            'BEN',
            'FCX',
            'FTR',
            'GPS',
            'GRMN',
            'GD',
            'GE',
            'GGP',
            'GIS',
            'GM',
            'GPC',
            'GILD',
            'GPN',
            'GS',
            'GT',
            'GWW',
            'HAL',
            'HBI',
            'HOG',
            'HAR',
            'HRS',
            'HIG',
            'HAS',
            'HCA',
            'HCP',
            'HP',
            'HSIC',
            'HES',
            'HPE',
            'HOLX',
            'HD',
            'HON',
            'HRL',
            'HST',
            'HPQ',
            'HUM',
            'HBAN',
            'IDXX',
            'ITW',
            'ILMN',
            'INCY',
            'IR',
            'INTC',
            'ICE',
            'IBM',
            'IP',
            'IPG',
            'IFF',
            'INTU',
            'ISRG',
            'IVZ',
            'IRM',
            'JBHT',
            'JEC',
            'SJM',
            'JNJ',
            'JCI',
            'JPM',
            'JNPR',
            'KSU',
            'K',
            'KEY',
            'KMB',
            'KIM',
            'KMI',
            'KLAC',
            'KSS',
            'KHC',
            'KR',
            'LB',
            'LLL',
            'LH',
            'LRCX',
            'LEG',
            'LEN',
            'LUK',
            'LVLT',
            'LLY',
            'LNC',
            'LLTC',
            'LKQ',
            'LMT',
            'L',
            'LOW',
            'LYB',
            'MTB',
            'MAC',
            'M',
            'MNK',
            'MRO',
            'MPC',
            'MAR',
            'MMC',
            'MLM',
            'MAS',
            'MA',
            'MAT',
            'MKC',
            'MCD',
            'MCK',
            'MJN',
            'MDT',
            'MRK',
            'MET',
            'MTD',
            'KORS',
            'MCHP',
            'MU',
            'MSFT',
            'MAA',
            'MHK',
            'TAP',
            'MDLZ',
            'MON',
            'MNST',
            'MCO',
            'MS',
            'MSI',
            'MUR',
            'MYL',
            'NDAQ',
            'NOV',
            'NAVI',
            'NTAP',
            'NFLX',
            'NWL',
            'NFX',
            'NEM',
            'NWSA',
            'NWS',
            'NEE',
            'NLSN',
            'NKE',
            'NI',
            'NBL',
            'JWN',
            'NSC',
            'NTRS',
            'NOC',
            'NRG',
            'NUE',
            'NVDA',
            'ORLY',
            'OXY',
            'OMC',
            'OKE',
            'ORCL',
            'PCAR',
            'PH',
            'PDCO',
            'PAYX',
            'PYPL',
            'PNR',
            'PBCT',
            'PEP',
            'PKI',
            'PRGO',
            'PFE',
            'PCG',
            'PM',
            'PSX',
            'PNW',
            'PXD',
            'PNC',
            'RL',
            'PPG',
            'PPL',
            'PX',
            'PCLN',
            'PFG',
            'PG',
            'PGR',
            'PLD',
            'PRU',
            'PEG',
            'PSA',
            'PHM',
            'PVH',
            'QRVO',
            'QCOM',
            'PWR',
            'DGX',
            'RRC',
            'RTN',
            'O',
            'RHT',
            'REG',
            'REGN',
            'RF',
            'RSG',
            'RAI',
            'RHI',
            'ROK',
            'COL',
            'ROP',
            'ROST',
            'RCL',
            'R',
            'SPGI',
            'CRM',
            'SCG',
            'SLB',
            'SNI',
            'STX',
            'SEE',
            'SRE',
            'SHW',
            'SIG',
            'SPG',
            'SWKS',
            'SLG',
            'SNA',
            'SO',
            'LUV',
            'SWN',
            'SWK',
            'SPLS',
            'SBUX',
            'STT',
            'SRCL',
            'SYK',
            'STI',
            'SYMC',
            'SYF',
            'SYY',
            'TROW',
            'TGT',
            'TEL',
            'TGNA',
            'TDC',
            'TSO',
            'TXN',
            'TXT',
            'BK',
            'CLX',
            'COO',
            'HSY',
            'MOS',
            'TRV',
            'DIS',
            'TMO',
            'TIF',
            'TWX',
            'TJX',
            'TMK',
            'TSS',
            'TSCO',
            'TDG',
            'RIG',
            'TRIP',
            'FOXA',
            'FOX',
            'TSN',
            'USB',
            'UDR',
            'ULTA',
            'UA',
            'UAA',
            'UNP',
            'UAL',
            'UNH',
            'UPS',
            'URI',
            'UTX',
            'UHS',
            'UNM',
            'URBN',
            'VFC',
            'VLO',
            'VAR',
            'VTR',
            'VRSN',
            'VRSK',
            'VZ',
            'VRTX',
            'VIAB',
            'V',
            'VNO',
            'VMC',
            'WMT',
            'WBA',
            'WM',
            'WAT',
            'WEC',
            'WFC',
            'HCN',
            'WDC',
            'WU',
            'WRK',
            'WY',
            'WHR',
            'WFM',
            'WMB',
            'WLTW',
            'WYN',
            'WYNN',
            'XEL',
            'XRX',
            'XLNX',
            'XL',
            'XYL',
            'YHOO',
            'YUM',
            'ZBH',
            'ZION',
            'ZTS',
            'VTI',
            'VOO',
            'SPY',
            'STOR',
            'TSLA',
            'GLD',
            'BABA'
        ];
    }
    SymbolService.prototype.getSymbols = function () {
        //console.log(this._symbolUrl);
        return this.http.get(this._symbolUrl)
            .map(function (res) { return res.json(); });
    };
    SymbolService.prototype.getLocalSymbols = function () {
        return this.stocks;
    };
    SymbolService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return SymbolService;
}());
SymbolService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SymbolService);

var _a;
//# sourceMappingURL=symbol.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/web-sockets.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WebSocketsService = (function () {
    function WebSocketsService() {
        this.url = 'https://ws-api.iextrading.com/1.0/tops';
    }
    WebSocketsService.prototype.sendMessage = function (message) {
        this.socket.emit('subscribe', message);
        //console.log(message);
    };
    WebSocketsService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(_this.url);
            _this.socket.on('message', function (data) {
                console.log(data);
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return WebSocketsService;
}());
WebSocketsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], WebSocketsService);

//# sourceMappingURL=web-sockets.service.js.map

/***/ }),

/***/ "../../../../../src/app/symbol/symbol.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/symbol/symbol.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"symbolComponent\">\r\nSymbol\r\n<mat-input-container>\r\n  <input matInput placeholder=\"\" [matAutocomplete]=\"auto\" [formControl]=\"stockCtrl\">\r\n</mat-input-container>\r\n\r\n<mat-autocomplete #auto=\"matAutocomplete\">\r\n  <mat-option (onSelectionChange)=\"selected($event, stock)\" *ngFor=\"let stock of filteredstocks | async\" [value]=\"stock\">\r\n    {{ stock }}\r\n  </mat-option>\r\n</mat-autocomplete>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/symbol/symbol.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_symbol_service__ = __webpack_require__("../../../../../src/app/service/symbol.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SymbolComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SymbolComponent = (function () {
    function SymbolComponent(symbolService, router) {
        var _this = this;
        this.symbolService = symbolService;
        this.router = router;
        this.selectedStock = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.stockCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        this.filteredstocks = this.stockCtrl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterstocks(name); });
    }
    SymbolComponent.prototype.filterstocks = function (val) {
        return val ? this.stocks.filter(function (s) { return s.toLowerCase().indexOf(val.toLowerCase()) === 0; })
            : this.stocks;
    };
    SymbolComponent.prototype.selected = function (event, stock) {
        if (event.source.selected) {
            this.selectedStock.emit(stock);
            //this.router.navigate(['/main', stock]);
        }
    };
    SymbolComponent.prototype.ngOnInit = function () {
        // this.symbolService.getSymbols().subscribe((p) => {
        //   console.log(p);
        //   this.stocks = p;
        // });
        this.stocks = this.symbolService.getLocalSymbols();
    };
    return SymbolComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SymbolComponent.prototype, "selectedStock", void 0);
SymbolComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-symbol',
        template: __webpack_require__("../../../../../src/app/symbol/symbol.component.html"),
        styles: [__webpack_require__("../../../../../src/app/symbol/symbol.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__service_symbol_service__["a" /* SymbolService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_symbol_service__["a" /* SymbolService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _b || Object])
], SymbolComponent);

var _a, _b;
//# sourceMappingURL=symbol.component.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map
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
exports.push([module.i, ".HolyGrail {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  min-height: 100vh;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.HolyGrail-body {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n.HolyGrail-content {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.HolyGrail-nav, .HolyGrail-ads {\r\n  /* 12em is the width of the columns */\r\n   -webkit-box-flex: 0;\r\n       -ms-flex: 0 0 12em;\r\n           flex: 0 0 12em; \r\n}\r\n\r\n.HolyGrail-nav {\r\n  /* put the nav on the left */\r\n  -webkit-box-ordinal-group: 0;\r\n      -ms-flex-order: -1;\r\n          order: -1;\r\n  min-width: 310px;\r\n}\r\n.HolyGrail,\r\n.HolyGrail-body {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.HolyGrail-nav {\r\n  -webkit-box-ordinal-group: 0;\r\n      -ms-flex-order: -1;\r\n          order: -1;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .HolyGrail-body {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n  }\r\n  .HolyGrail-content {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n  }\r\n  .HolyGrail-nav, .HolyGrail-ads {\r\n    /* 12em is the width of the columns */\r\n     -webkit-box-flex: 0;\r\n         -ms-flex: 0 0 12em;\r\n             flex: 0 0 12em; \r\n  }\r\n}\r\n\r\nnav,aside{\r\n    background-color:#7e57c2;\r\n}\r\napp-quote-nav {\r\n  width:100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n<div id=\"bodycontent\">\r\n    <header class=\"page-header\">\r\n\r\n        <md-toolbar color=\"primary\">\r\n            <button md-button><md-icon>home</md-icon>StockAid</button>\r\n\r\n        </md-toolbar>\r\n    </header>\r\n\r\n    <main class=\"page-content\">\r\n        <md-sidenav-container>\r\n            <md-sidenav mode=\"side\" opened=\"true\">\r\n                <app-symbol (selectedStock)=\"onSelectedStockChange($event)\">></app-symbol>\r\n                <app-quote [stsymbol]=\"selectedStock\">\r\n                </app-quote>\r\n            </md-sidenav>\r\n            <article class=\"content-chart\">\r\n                <router-outlet>\r\n\r\n                </router-outlet>\r\n\r\n            </article>\r\n\r\n\r\n\r\n        </md-sidenav-container>\r\n\r\n    </main>\r\n\r\n<footer class=\"page-footer\">\r\n    <md-toolbar color=\"primary\">\r\n        <span style=\"font-size: 13px\">https://iextrading.com/api-exhibit-a</span>\r\n\r\n\r\n    </md-toolbar>\r\n</footer>\r\n</div>-->\r\n\r\n<!-- <app-main>\r\n</app-main> -->\r\n\r\n\r\n<div class=\"HolyGrail\">\r\n    <header>\r\n        <md-toolbar color=\"primary\">\r\n            <button md-button><md-icon>home</md-icon>StockAid</button>\r\n        </md-toolbar>\r\n    </header>\r\n    <div class=\"HolyGrail-body\">\r\n        <main class=\"HolyGrail-content\">\r\n            <router-outlet>\r\n\r\n            </router-outlet>\r\n\r\n        </main>\r\n        <nav class=\"HolyGrail-nav\">\r\n            <app-quote-nav></app-quote-nav>\r\n        </nav>\r\n        <!-- <aside class=\"HolyGrail-ads\">Rightside if wanted</aside> -->\r\n    </div>\r\n    <footer>\r\n        <md-toolbar color=\"primary\">\r\n            <span style=\"font-size: 13px\">https://iextrading.com/api-exhibit-a</span>\r\n        </md-toolbar>\r\n    </footer>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
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
    function AppComponent(db) {
        this.title = 'app';
        db.object('connected').subscribe(console.log);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], AppComponent);

var _a;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__live_quote_live_quote_component__ = __webpack_require__("../../../../../src/app/live-quote/live-quote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__quote_quote_component__ = __webpack_require__("../../../../../src/app/quote/quote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__service_quote_service__ = __webpack_require__("../../../../../src/app/service/quote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__service_news_service__ = __webpack_require__("../../../../../src/app/service/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__service_stats_service__ = __webpack_require__("../../../../../src/app/service/stats.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__chart_chart_component__ = __webpack_require__("../../../../../src/app/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__key_statistics_key_statistics_component__ = __webpack_require__("../../../../../src/app/key-statistics/key-statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__main_router_main_router_component__ = __webpack_require__("../../../../../src/app/main-router/main-router.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__quote_nav_quote_nav_component__ = __webpack_require__("../../../../../src/app/quote-nav/quote-nav.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_18_primeng_primeng__["ChartModule"]
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
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MdButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["h" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["i" /* MdExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["j" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["k" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["l" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["m" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["n" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["o" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["p" /* MdPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["q" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["r" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["s" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["t" /* MdRippleModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["u" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["v" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["w" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["x" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["y" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["z" /* MdSortModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["A" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["B" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["C" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["D" /* MdTooltipModule */],
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
            __WEBPACK_IMPORTED_MODULE_19__live_quote_live_quote_component__["a" /* LiveQuoteComponent */],
            __WEBPACK_IMPORTED_MODULE_20__quote_quote_component__["a" /* QuoteComponent */],
            __WEBPACK_IMPORTED_MODULE_24__chart_chart_component__["a" /* ChartComponent */],
            __WEBPACK_IMPORTED_MODULE_25__key_statistics_key_statistics_component__["a" /* KeyStatisticsComponent */],
            __WEBPACK_IMPORTED_MODULE_26__news_news_component__["a" /* NewsComponent */],
            __WEBPACK_IMPORTED_MODULE_27__main_router_main_router_component__["a" /* MainRouterComponent */],
            __WEBPACK_IMPORTED_MODULE_28__quote_nav_quote_nav_component__["a" /* QuoteNavComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
            MaterialModule,
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["o" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["ReactiveFormsModule"],
            PrimeModule,
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig), __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["a" /* AngularFireDatabaseModule */], __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["a" /* AngularFireAuthModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__service_bar_service__["a" /* BarService */], __WEBPACK_IMPORTED_MODULE_12__service_symbol_service__["a" /* SymbolService */], __WEBPACK_IMPORTED_MODULE_4__service_web_sockets_service__["a" /* WebSocketsService */], __WEBPACK_IMPORTED_MODULE_21__service_quote_service__["a" /* QuoteService */], __WEBPACK_IMPORTED_MODULE_23__service_stats_service__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_22__service_news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_5__service_fav_stocks_service__["a" /* FavStocksService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bar-chart/bar-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\r\n/* .example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 500px;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  display: flex;\r\n  align-items: center;\r\n  padding-left: 24px;\r\n  font-size: 20px;\r\n} */\r\n\r\n/* .mat-table {\r\n  overflow: auto;\r\n} */\r\np-chart{\r\n    min-width: 850px;\r\n}", ""]);

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

module.exports = "<div>\r\n  <md-paginator #paginator [length]=\"exampleDatabase.data.length\" [pageIndex]=\"0\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n  </md-paginator>\r\n  <md-table #table [dataSource]=\"dataSource\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n\r\n    <ng-container mdColumnDef=\"open\">\r\n      <md-header-cell *mdHeaderCellDef> open </md-header-cell>\r\n      <md-cell *mdCellDef=\"let row\"> {{row.open}} </md-cell>\r\n    </ng-container>\r\n    <ng-container mdColumnDef=\"high\">\r\n      <md-header-cell *mdHeaderCellDef> high </md-header-cell>\r\n      <md-cell *mdCellDef=\"let row\"> {{row.high}} </md-cell>\r\n    </ng-container>\r\n    <ng-container mdColumnDef=\"low\">\r\n      <md-header-cell *mdHeaderCellDef> low </md-header-cell>\r\n      <md-cell *mdCellDef=\"let row\"> {{row.low}} </md-cell>\r\n    </ng-container>\r\n    <ng-container mdColumnDef=\"close\">\r\n      <md-header-cell *mdHeaderCellDef> close </md-header-cell>\r\n      <md-cell *mdCellDef=\"let row\"> {{row.close}} </md-cell>\r\n    </ng-container>\r\n    <ng-container mdColumnDef=\"label\">\r\n      <md-header-cell *mdHeaderCellDef> label </md-header-cell>\r\n      <md-cell *mdCellDef=\"let row\"> {{row.label}} </md-cell>\r\n    </ng-container>\r\n\r\n\r\n\r\n\r\n\r\n    <md-header-row *mdHeaderRowDef=\"displayedColumns\"></md-header-row>\r\n    <md-row *mdRowDef=\"let row; columns: displayedColumns;\"></md-row>\r\n  </md-table>\r\n</div>"

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
        console.log(changes.stsymbol.currentValue);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MdPaginator */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MdPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MdPaginator */]) === "function" && _a || Object)
], BarTableComponent.prototype, "paginator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MdSort */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MdSort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MdSort */]) === "function" && _b || Object)
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
        this.barService = barService;
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        console.log("insideoninit");
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
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__["a" /* DataSource */]));

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

module.exports = "<md-tab-group>\r\n  <!-- <md-tab label=\"Table\">\r\n    <app-bar-table [stsymbol]=\"selectedStock\"></app-bar-table>\r\n  </md-tab> -->\r\n  <md-tab *ngFor=\"let inter of chartInterval.reverse()\" label=\"{{inter}}\">\r\n    <app-bar-chart [stsymbol]=\"selectedStock\" [chartInterval]=\"inter\"></app-bar-chart>\r\n  </md-tab>\r\n\r\n\r\n</md-tab-group>"

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
exports.push([module.i, "md-grid-list {\r\n\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 13px;\r\n\r\n\r\n}\r\nmd-grid-tile, h3, md-grid-list {\r\n\r\n}\r\np{\r\n    padding: 2px;\r\n    width:100%;\r\n\r\n    text-align: left;\r\n}\r\n\r\n\r\n#keys{\r\n    min-width: 400px;\r\n\r\n\r\n}\r\n\r\nh3{\r\n        width:100%;\r\n\r\n    text-align: left;\r\n}\r\n\r\n.positive {\r\n    border-radius: 13%;\r\n    background: #73AD21;\r\n}\r\n.negative {\r\n    border-radius: 13%;\r\n    background: #E94340;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/key-statistics/key-statistics.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"stats\" id=\"keys\">\r\n\r\n\r\n  <md-grid-list cols=\"{{columnNum}}\" rowHeight=\"40px\">\r\n    <md-grid-tile>\r\n      <h3>Company Name</h3>\r\n    </md-grid-tile>\r\n    <md-grid-tile>\r\n      <h3>{{stats.companyName}}({{stats.symbol}})</h3>\r\n    </md-grid-tile>\r\n    <md-grid-tile>\r\n      <h3>Last Price</h3>\r\n    </md-grid-tile>\r\n\r\n    <md-grid-tile>\r\n      <h3>{{quotes.latestPrice}}</h3>\r\n    </md-grid-tile>\r\n    <!-- <h3>{{quotes.latestPrice}}</h3>\r\n    </md-grid-tile> -->\r\n    <md-grid-tile>\r\n      <p>Market Cap</p>\r\n    </md-grid-tile>\r\n    <md-grid-tile>\r\n      <p>{{stats.marketcap/1000000 | number : '1.2-2'}} M</p>\r\n    </md-grid-tile>\r\n\r\n    <md-grid-tile>\r\n      <p>52 Week High</p>\r\n    </md-grid-tile>\r\n    <md-grid-tile>\r\n      <p>{{stats.week52high | number : '1.2-2'}}</p>\r\n    </md-grid-tile>\r\n    <md-grid-tile>\r\n      <p>52 Week Low</p>\r\n    </md-grid-tile>\r\n    <md-grid-tile>\r\n      <p>{{stats.week52low}}</p>\r\n    </md-grid-tile>\r\n\r\n\r\n    <md-grid-tile>\r\n      <p>EPS</p>\r\n    </md-grid-tile>\r\n    <md-grid-tile>\r\n      <p>{{stats.latestEPS}} as of {{stats.latestEPSDate}}</p>\r\n    </md-grid-tile>\r\n\r\n    <md-grid-tile>\r\n      <p>Outstanding Share</p>\r\n    </md-grid-tile>\r\n    <md-grid-tile>\r\n      <p>{{stats.sharesOutstanding/1000000 | number : '1.2-2'}} M</p>\r\n    </md-grid-tile>\r\n\r\n\r\n    <md-grid-tile>\r\n      <p>Revenue</p>\r\n    </md-grid-tile>\r\n    <md-grid-tile>\r\n      <p>{{stats.revenue/1000000 | number : '1.2-2'}} M</p>\r\n    </md-grid-tile>\r\n    <md-grid-tile>\r\n      <p>Gross Profit</p>\r\n    </md-grid-tile>\r\n    <md-grid-tile>\r\n      <p>{{stats.grossProfit/1000000 | number : '1.2-2'}} M</p>\r\n    </md-grid-tile>\r\n    <md-grid-tile>\r\n      <p>Cash</p>\r\n    </md-grid-tile>\r\n    <md-grid-tile>\r\n      <p>{{stats.cash/1000000 | number : '1.2-2'}} M</p>\r\n    </md-grid-tile>\r\n    <!-- <md-grid-tile>\r\n      <p>Debt</p>\r\n    </md-grid-tile>\r\n    <md-grid-tile>\r\n      <p>{{stats.debt/1000000 | number : '1.2-2'}} M</p>\r\n    </md-grid-tile> -->\r\n\r\n    <md-grid-tile>\r\n      <p>Revenue Per Share</p>\r\n    </md-grid-tile>\r\n    <md-grid-tile>\r\n      <p>{{stats.revenuePerShare}}</p>\r\n    </md-grid-tile>\r\n    <md-grid-tile>\r\n      <p>Reveue Per Employee</p>\r\n    </md-grid-tile>\r\n    <md-grid-tile>\r\n      <p>{{stats.revenuePerEmployee/1000000 | number : '1.2-2'}} M</p>\r\n    </md-grid-tile>\r\n\r\n\r\n  </md-grid-list>\r\n</div>"

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

module.exports = "<p>\r\n  live-quote works!\r\n</p>\r\n{{messages}}\r\n\r\n<md-list>\r\n  <md-list-item *ngFor='let m of messages'> {{m }}asdf </md-list-item>\r\n\r\n</md-list>"

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
            console.log(message);
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
exports.push([module.i, ".flex-container{\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n\r\n}\r\n.inneritem{\r\n-webkit-box-flex: 1;\r\n    -ms-flex-positive: 1;\r\n        flex-grow: 1;\r\n    -ms-flex-preferred-size: 0;\r\n        flex-basis: 0;\r\n\r\n}\r\n.flex-chart{\r\n\r\n\r\n}\r\n\r\n.flex-news{\r\n\r\n\r\n}\r\n\r\n/* .flex-statistics{\r\n\r\nflex-grow: 1;\r\nalign-items: flex-start;\r\n\r\n             background-color:#7e57c2;\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-router/main-router.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\" *ngIf=\"selectedStock\">\r\n\r\n\r\n  <div class=\"inneritem\">\r\n    <app-key-statistics [stsymbol]=\"selectedStock\"></app-key-statistics>\r\n  </div>\r\n  <div class=\"inneritem\">\r\n    <app-news [stsymbol]=\"selectedStock\"></app-news>\r\n  </div>\r\n  <div class=\"inneritem\">\r\n    <app-chart [stsymbol]=\"selectedStock\"></app-chart>\r\n  </div>\r\n\r\n\r\n</div>"

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
exports.push([module.i, "\r\nmd-sidenav {\r\n\r\n\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 12px;\r\n    vertical-align:middle;\r\n    min-width: 400px;\r\n\r\n}\r\n\r\nmd-panel-title{\r\n    font-size: 13px;\r\n    min-width: 310px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- -->\r\n\r\n<md-sidenav mode=\"side\" opened=\"true\">\r\n\r\n  <md-expansion-panel *ngFor=\"let n of news\" [expanded]=\"true\">\r\n    <md-expansion-panel-header>\r\n      <md-panel-title>\r\n        <b>{{n.datetime | date:'short'}}</b> -{{n.headline}}\r\n\r\n      </md-panel-title>\r\n      <md-panel-description>\r\n\r\n      </md-panel-description>\r\n    </md-expansion-panel-header>\r\n\r\n    {{n.summary}}\r\n  </md-expansion-panel>\r\n</md-sidenav>\r\n\r\n<!-- <span mdTooltip=\"{{n.headline}}\" *ngFor=\"let n of news\">I have a tooltip</span>\r\n<br> -->"

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
        this.newsService.getNews(this.stsymbol).subscribe(function (val) { _this.news = val; });
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

/***/ "../../../../../src/app/quote-nav/quote-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-sidenav {\r\n\r\n    background-color:#7e57c2; /* #935CFA;*/\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 15px;\r\n    vertical-align:middle;\r\n    color: white;\r\n    width:100%;\r\n    height:100%;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quote-nav/quote-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav mode=\"side\" opened=\"true\">\n  <app-symbol (selectedStock)=\"onSelectedStockChange($event)\">></app-symbol>\n\n  <app-quote [stsymbol]=\"selectedStock\">\n  </app-quote>\n\n</md-sidenav>"

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
        db.object('connected').subscribe(console.log);
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
exports.push([module.i, "/* md-grid-tile {\r\n  display: flex;\r\n  font-family: Arial;\r\n  font-size: 12px;\r\n\r\n} */\r\n\r\n.positive {\r\n    border-radius: 20%;\r\n    background: #73AD21;\r\n}\r\n.negative {\r\n    border-radius: 20%;\r\n    background: #E94340;\r\n}\r\n\r\nmd-grid-list{\r\n    padding: 2px;\r\n  margin: 4px;\r\n}\r\n\r\n.text-inside-grid {\r\n  position: absolute;\r\n  left: 5px;\r\n}\r\n\r\nmd-icon { font-size: 18px; color:#533E3E;}\r\n\r\n\r\n\r\n.drNav{\r\n    padding:4px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 15px;\r\n    vertical-align:middle;\r\n    color: white;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n\r\nbutton{\r\n    width:100%;\r\n    min-width: 310px;\r\n    text-align: left;\r\n}\r\n\r\n.drMain {\r\n    -ms-flex-preferred-size: 0;\r\n        flex-basis: 0;\r\n    /* ... */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quote/quote.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <md-grid-list cols=\"3\" rowHeight=\"40px\">\r\n  <md-grid-tile>\r\n    Symbol\r\n  </md-grid-tile>\r\n  <md-grid-tile>\r\n    Price\r\n  </md-grid-tile>\r\n  <md-grid-tile>\r\n    Change\r\n  </md-grid-tile>\r\n</md-grid-list> -->\r\n<!-- <div class=\"QuoteChild\" *ngFor='let m of quotes'>\r\n  <md-grid-list cols=\"3\" rowHeight=\"40px\" [routerLink]=\"['/main', m.symbol]\">\r\n    <md-grid-tile>\r\n      <div class=\"text-inside-grid\">\r\n        <md-icon (click)=\"deleteSymbolServer(m.symbol)\">highlight_off</md-icon>&nbsp;&nbsp;{{m.symbol}}</div>\r\n    </md-grid-tile>\r\n    <md-grid-tile>\r\n      {{m.latestPrice| number:'.1-2'}}\r\n    </md-grid-tile>\r\n    <md-grid-tile [ngClass]=\"{'positive': m.changePercent>0, 'negative': m.changePercent<0}\">\r\n      {{m.changePercent*100 | number:'.1-3'}}%\r\n    </md-grid-tile>\r\n\r\n  </md-grid-list>\r\n</div> -->\r\n<div class=\"drNav\">\r\n  <div class=\"drMain\" *ngFor=\"let m of quotes;let i=index\"><button md-button [routerLink]=\"['/main', m.symbol]\">\r\n  <md-grid-list cols=\"3\" rowHeight=\"40px\" >\r\n    <md-grid-tile>\r\n      <div class=\"text-inside-grid\">\r\n        <md-icon (click)=\"deleteSymbolServer(m.symbol)\">highlight_off</md-icon>&nbsp;&nbsp;{{m.symbol}}</div>\r\n    </md-grid-tile>\r\n    <md-grid-tile>\r\n      {{m.latestPrice| number:'.1-2'}}\r\n    </md-grid-tile>\r\n    <md-grid-tile [ngClass]=\"{'positive': m.changePercent>0, 'negative': m.changePercent<0}\">\r\n      {{m.changePercent*100 | number:'.1-3'}}%\r\n    </md-grid-tile>\r\n\r\n  </md-grid-list>\r\n  </button></div>\r\n</div>"

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
    function QuoteComponent(quoteService, router, favStockService) {
        this.quoteService = quoteService;
        this.router = router;
        this.favStockService = favStockService;
        this.quotes = Array();
    }
    QuoteComponent.prototype.ngOnChanges = function (changes) {
        if (this.stsymbol)
            this.favStockService.addFavStock(this.stsymbol);
        // this.quoteService.getQuotes(this.stsymbol).subscribe((p) => {
        //   this.updateOrPush(p);
        //   console.log(p);
        // });
    };
    QuoteComponent.prototype.ngOnInit = function () {
        // let favStock = ['spy', 'vti', 'goog', 'amzn', 'aapl', 'stor', 'gld', 'msft', 'fb', 'dis', 'luv', 'wmt', 'bac', 'syf'];
        // favStock.forEach(element => {
        //   this.addOrUpdate(element);
        // });
        // this.router.navigate(['/main', favStock[0].toUpperCase()]);
        this.refreshval();
        this.getFavStocksFromDB();
    };
    QuoteComponent.prototype.refreshval = function () {
        var _this = this;
        console.log("refresh called");
        setTimeout(function () { return _this.refreshval(); }, 10000);
        this.quotes.forEach(function (element) {
            _this.quoteService.getQuotes(element.symbol).subscribe(function (p) {
                _this.updateOrPush(p);
            });
        });
    };
    QuoteComponent.prototype.deleteSymbolServer = function (sym) {
        this.favStockService.remFavStock(sym);
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
        var found = false;
        for (var i = 0; i < this.quotes.length; i++) {
            if (this.quotes[i].symbol.toUpperCase() == sym.toUpperCase()) {
                found = true;
            }
        }
        if (found == false)
            this.quoteService.getQuotes(sym).subscribe(function (p) {
                _this.quotes.push(p);
                if (_this.quotes.length < 3)
                    _this.router.navigate(['/main', _this.quotes[0].symbol.toUpperCase()]);
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
        this.favStocks$ = this.favStockService.getFavStocks();
        this.favStocks$.subscribe(function (data) {
            data.forEach(function (element) {
                console.log(element);
                _this.addOrUpdate(element.stock);
            });
            _this.quotes.forEach(function (q) {
                var found = false;
                data.forEach(function (d) {
                    if (q.symbol.toUpperCase() == d.stock.toUpperCase()) {
                        found = true;
                    }
                });
                if (found == false)
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__service_quote_service__["a" /* QuoteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_quote_service__["a" /* QuoteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__service_fav_stocks_service__["a" /* FavStocksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_fav_stocks_service__["a" /* FavStocksService */]) === "function" && _c || Object])
], QuoteComponent);

var _a, _b, _c;
//# sourceMappingURL=quote.component.js.map

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
        console.log(this._barUrl);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavStocksService; });
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
    function FavStocksService(db) {
        this.db = db;
        this.favStocks$ = this.db.list('favstocks');
    }
    FavStocksService.prototype.getFavStocks = function () {
        return this.favStocks$;
    };
    FavStocksService.prototype.addFavStock = function (sym) {
        this.favStocks$.push({ stock: sym });
    };
    FavStocksService.prototype.remFavStock = function (sym) {
        // this.db.list('favstocks', {
        //   query: {
        //     orderByChild: 'stock',
        //     equalTo: sym
        //   }
        // }).subscribe(d=>{d.forEach(element => {
        //   this.favStocks$.remove(element.$key);
        // });})
        var key = '';
        //    this.db.database.ref("favstocks").orderByValue().equalTo(sym).once(console.log);
        this.favStocks$.subscribe(function (data) {
            data.forEach(function (element) {
                if (sym == element.stock) {
                    key = element.$key;
                }
            });
        });
        if (key)
            this.favStocks$.remove(key);
    };
    return FavStocksService;
}());
FavStocksService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], FavStocksService);

var _a;
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
        console.log(this._newsUrl);
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
        console.log(this._quoteUrl);
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
        console.log(this._statsUrl);
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
        this.stocks = ['MMM',
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
        console.log(this._symbolUrl);
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
        console.log(message);
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

module.exports = "<div id=\"symbolComponent\">\r\nSymbol\r\n<md-input-container>\r\n  <input mdInput placeholder=\"\" [mdAutocomplete]=\"auto\" [formControl]=\"stockCtrl\">\r\n</md-input-container>\r\n\r\n<md-autocomplete #auto=\"mdAutocomplete\">\r\n  <md-option (onSelectionChange)=\"selected($event, stock)\" *ngFor=\"let stock of filteredstocks | async\" [value]=\"stock\">\r\n    {{ stock }}\r\n  </md-option>\r\n</md-autocomplete>\r\n</div>"

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
            this.router.navigate(['/main', stock]);
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
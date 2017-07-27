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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sheet1_sheet1_component__ = __webpack_require__("../../../../../src/app/sheet1/sheet1.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'sheet1', component: __WEBPACK_IMPORTED_MODULE_3__sheet1_sheet1_component__["a" /* Sheet1Component */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<nav>\n  <a routerLink=\"/description\" routerLinkActive=\"active\">Description</a>\n  <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n  <a routerLink=\"/sheet1\" routerLinkActive=\"active\">Sheet1</a>\n  <a routerLink=\"/sheet2\" routerLinkActive=\"active\">Sheet2</a>\n  <a routerLink=\"/sheet3\" routerLinkActive=\"active\">Sheet3</a>\n\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'CS 498 - Final Project';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var CONFIG = {
    N: 100,
    SPECTRUM: [
        // "rgb(222,237,250)"
        'rgb(176,212,243)',
        'rgb(128,186,236)',
        'rgb(77,158,228)',
        'rgb(38,137,223)',
        'rgb(0,116,217)',
        'rgb(0,106,197)'
        // "rgb(0,94,176)"
        // "rgb(0,82,154)"
        // "rgb(0,60,113)"
    ]
};
/* harmony default export */ __webpack_exports__["a"] = (CONFIG);
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__d3__ = __webpack_require__("../../../../../src/app/d3/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__visuals_shared__ = __webpack_require__("../../../../../src/app/visuals/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sheet1_sheet1_component__ = __webpack_require__("../../../../../src/app/sheet1/sheet1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__visuals_graph_graph_component__ = __webpack_require__("../../../../../src/app/visuals/graph/graph.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Imports for loading & configuring the in-memory web api







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__visuals_graph_graph_component__["a" /* GraphComponent */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__sheet1_sheet1_component__["a" /* Sheet1Component */]
        ].concat(__WEBPACK_IMPORTED_MODULE_8__visuals_shared__["a" /* SHARED_VISUALS */], __WEBPACK_IMPORTED_MODULE_7__d3__["a" /* D3_DIRECTIVES */]),
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__d3__["b" /* D3Service */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/d3/d3.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__("../../../../../src/app/d3/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3Service; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var D3Service = (function () {
    /** This service will provide methods to enable user interaction with elements
      * while maintaining the d3 simulations physics
      */
    function D3Service() {
    }
    /** A method to bind a pan and zoom behaviour to an svg element */
    D3Service.prototype.applyZoomableBehaviour = function (svgElement, containerElement) {
        var svg, container, zoomed, zoom;
        svg = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](svgElement);
        container = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](containerElement);
        zoomed = function () {
            var transform = __WEBPACK_IMPORTED_MODULE_2_d3__["event"].transform;
            container.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
        };
        zoom = __WEBPACK_IMPORTED_MODULE_2_d3__["zoom"]().on('zoom', zoomed);
        svg.call(zoom);
    };
    /** A method to bind a draggable behaviour to an svg element */
    D3Service.prototype.applyDraggableBehaviour = function (element, node, graph) {
        var d3element = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](element);
        function started() {
            if (!__WEBPACK_IMPORTED_MODULE_2_d3__["event"].active) {
                graph.simulation.alphaTarget(0.3).restart();
            }
            __WEBPACK_IMPORTED_MODULE_2_d3__["event"].on('drag', dragged).on('end', ended);
            function dragged() {
                node.fx = __WEBPACK_IMPORTED_MODULE_2_d3__["event"].x;
                node.fy = __WEBPACK_IMPORTED_MODULE_2_d3__["event"].y;
            }
            function ended() {
                if (!__WEBPACK_IMPORTED_MODULE_2_d3__["event"].active) {
                    graph.simulation.alphaTarget(0);
                }
                node.fx = null;
                node.fy = null;
            }
        }
        d3element.call(__WEBPACK_IMPORTED_MODULE_2_d3__["drag"]()
            .on('start', started));
    };
    /** The interactable graph we will simulate in this article
    * This method does not interact with the document, purely physical calculations with d3
    */
    D3Service.prototype.getForceDirectedGraph = function (nodes, links, options) {
        var sg = new __WEBPACK_IMPORTED_MODULE_1____["d" /* ForceDirectedGraph */](nodes, links, options);
        return sg;
    };
    return D3Service;
}());
D3Service = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], D3Service);

//# sourceMappingURL=d3.service.js.map

/***/ }),

/***/ "../../../../../src/app/d3/directives/draggable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__("../../../../../src/app/d3/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DraggableDirective = (function () {
    function DraggableDirective(d3Service, _element) {
        this.d3Service = d3Service;
        this._element = _element;
    }
    DraggableDirective.prototype.ngOnInit = function () {
        this.d3Service.applyDraggableBehaviour(this._element.nativeElement, this.node, this.graph);
    };
    return DraggableDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])('draggableNode'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1____["c" /* Node */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1____["c" /* Node */]) === "function" && _a || Object)
], DraggableDirective.prototype, "node", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])('draggableInGraph'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1____["d" /* ForceDirectedGraph */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1____["d" /* ForceDirectedGraph */]) === "function" && _b || Object)
], DraggableDirective.prototype, "graph", void 0);
DraggableDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Directive */])({
        // tslint:disable-next-line:directive-selector
        selector: '[draggableNode]'
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1____["b" /* D3Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1____["b" /* D3Service */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */]) === "function" && _d || Object])
], DraggableDirective);

var _a, _b, _c, _d;
//# sourceMappingURL=draggable.directive.js.map

/***/ }),

/***/ "../../../../../src/app/d3/directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__zoomable_directive__ = __webpack_require__("../../../../../src/app/d3/directives/zoomable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__draggable_directive__ = __webpack_require__("../../../../../src/app/d3/directives/draggable.directive.ts");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3_DIRECTIVES; });




var D3_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_0__zoomable_directive__["a" /* ZoomableDirective */],
    __WEBPACK_IMPORTED_MODULE_1__draggable_directive__["a" /* DraggableDirective */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/d3/directives/zoomable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__("../../../../../src/app/d3/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZoomableDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ZoomableDirective = (function () {
    function ZoomableDirective(d3Service, _element) {
        this.d3Service = d3Service;
        this._element = _element;
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ZoomableDirective.prototype.ngOnInit = function () {
        this.d3Service.applyZoomableBehaviour(this.containerElement, this._element.nativeElement);
    };
    return ZoomableDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])('zoomableOf'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */]) === "function" && _a || Object)
], ZoomableDirective.prototype, "containerElement", void 0);
ZoomableDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Directive */])({
        // tslint:disable-next-line:directive-selector
        selector: '[zoomableOf]'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1____["b" /* D3Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1____["b" /* D3Service */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */]) === "function" && _c || Object])
], ZoomableDirective);

var _a, _b, _c;
//# sourceMappingURL=zoomable.directive.js.map

/***/ }),

/***/ "../../../../../src/app/d3/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__d3_service__ = __webpack_require__("../../../../../src/app/d3/d3.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__d3_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/d3/models/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__models__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__models__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__models__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives__ = __webpack_require__("../../../../../src/app/d3/directives/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__directives__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/d3/models/force-directed-graph.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__("../../../../../src/app/d3/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForceDirectedGraph; });



var FORCES = {
    LINKS: 1 / 50,
    COLLISION: 1,
    CHARGE: -1
};
var ForceDirectedGraph = (function () {
    function ForceDirectedGraph(nodes, links, options) {
        this.ticker = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
        this.nodes = [];
        this.links = [];
        this.nodes = nodes;
        this.links = links;
        this.initSimulation(options);
    }
    ForceDirectedGraph.prototype.connectNodes = function (source, target) {
        var link;
        if (!this.nodes[source] || !this.nodes[target]) {
            throw new Error('One of the nodes does not exist');
        }
        link = new __WEBPACK_IMPORTED_MODULE_1____["c" /* Link */](source, target);
        this.simulation.stop();
        this.links.push(link);
        this.simulation.alphaTarget(0.3).restart();
        this.initLinks();
    };
    ForceDirectedGraph.prototype.initNodes = function () {
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet');
        }
        this.simulation.nodes(this.nodes);
    };
    ForceDirectedGraph.prototype.initLinks = function () {
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet');
        }
        this.simulation.force('links', __WEBPACK_IMPORTED_MODULE_2_d3__["forceLink"](this.links)
            .id(function (d) { return d['id']; })
            .strength(FORCES.LINKS));
    };
    ForceDirectedGraph.prototype.initSimulation = function (options) {
        if (!options || !options.width || !options.height) {
            throw new Error('missing options when initializing simulation');
        }
        if (!this.simulation) {
            var ticker_1 = this.ticker;
            this.simulation = __WEBPACK_IMPORTED_MODULE_2_d3__["forceSimulation"]()
                .force('charge', __WEBPACK_IMPORTED_MODULE_2_d3__["forceManyBody"]().strength(function (d) { return FORCES.CHARGE * d['r']; }))
                .force('collide', __WEBPACK_IMPORTED_MODULE_2_d3__["forceCollide"]().strength(FORCES.COLLISION).radius(function (d) { return d['r'] + 5; }).iterations(2));
            // Connecting the d3 ticker to an angular event emitter
            this.simulation.on('tick', function () {
                ticker_1.emit(this);
            });
            this.initNodes();
            this.initLinks();
        }
        /** Updating the central force of the simulation */
        this.simulation.force('centers', __WEBPACK_IMPORTED_MODULE_2_d3__["forceCenter"](options.width / 2, options.height / 2));
        /** Restarting the simulation internal timer */
        this.simulation.restart();
    };
    return ForceDirectedGraph;
}());

//# sourceMappingURL=force-directed-graph.js.map

/***/ }),

/***/ "../../../../../src/app/d3/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__("../../../../../src/app/d3/models/node.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__link__ = __webpack_require__("../../../../../src/app/d3/models/link.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__force_directed_graph__ = __webpack_require__("../../../../../src/app/d3/models/force-directed-graph.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__force_directed_graph__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/d3/models/link.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
var Link = (function () {
    function Link(source, target) {
        this.source = source;
        this.target = target;
    }
    return Link;
}());

//# sourceMappingURL=link.js.map

/***/ }),

/***/ "../../../../../src/app/d3/models/node.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Node; });

var Node = (function () {
    function Node(id) {
        var _this = this;
        this.linkCount = 0;
        this.normal = function () {
            return Math.sqrt(_this.linkCount / __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* default */].N);
        };
        this.id = id;
    }
    Object.defineProperty(Node.prototype, "r", {
        get: function () {
            return 50 * this.normal() + 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "fontSize", {
        get: function () {
            return (30 * this.normal() + 10) + 'px';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "color", {
        get: function () {
            var index = Math.floor(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* default */].SPECTRUM.length * this.normal());
            return __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* default */].SPECTRUM[index];
        },
        enumerable: true,
        configurable: true
    });
    return Node;
}());

//# sourceMappingURL=node.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<h2>{{subtitle}}</h2>\n<svg width=\"900\" height=\"500\"></svg>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_scale__ = __webpack_require__("../../../../d3-scale/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_shape__ = __webpack_require__("../../../../d3-shape/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_array__ = __webpack_require__("../../../../d3-array/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3_axis__ = __webpack_require__("../../../../d3-axis/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_data__ = __webpack_require__("../../../../../src/app/dashboard/shared/data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = (function () {
    function DashboardComponent() {
        this.title = 'D3.js with Angular 2!';
        this.subtitle = 'Line Chart';
        this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.initSvg();
        this.initAxis();
        this.drawAxis();
        this.drawLine();
    };
    DashboardComponent.prototype.initSvg = function () {
        this.svg = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["a" /* select */]('svg')
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    };
    DashboardComponent.prototype.initAxis = function () {
        this.x = __WEBPACK_IMPORTED_MODULE_2_d3_scale__["a" /* scaleTime */]().range([0, this.width]);
        this.y = __WEBPACK_IMPORTED_MODULE_2_d3_scale__["b" /* scaleLinear */]().range([this.height, 0]);
        this.x.domain(__WEBPACK_IMPORTED_MODULE_4_d3_array__["a" /* extent */](__WEBPACK_IMPORTED_MODULE_6__shared_data__["a" /* Stocks */], function (d) { return d.date; }));
        this.y.domain(__WEBPACK_IMPORTED_MODULE_4_d3_array__["a" /* extent */](__WEBPACK_IMPORTED_MODULE_6__shared_data__["a" /* Stocks */], function (d) { return d.value; }));
    };
    DashboardComponent.prototype.drawAxis = function () {
        this.svg.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(__WEBPACK_IMPORTED_MODULE_5_d3_axis__["a" /* axisBottom */](this.x));
        this.svg.append('g')
            .attr('class', 'axis axis--y')
            .call(__WEBPACK_IMPORTED_MODULE_5_d3_axis__["b" /* axisLeft */](this.y))
            .append('text')
            .attr('class', 'axis-title')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '.71em')
            .style('text-anchor', 'end')
            .text('Price ($)');
    };
    DashboardComponent.prototype.drawLine = function () {
        var _this = this;
        this.line = __WEBPACK_IMPORTED_MODULE_3_d3_shape__["a" /* line */]()
            .x(function (d) { return _this.x(d.date); })
            .y(function (d) { return _this.y(d.value); });
        this.svg.append('path')
            .datum(__WEBPACK_IMPORTED_MODULE_6__shared_data__["a" /* Stocks */])
            .attr('class', 'line')
            .attr('d', this.line);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/shared/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stocks; });
var Stocks = [
    { date: new Date("2010-01-01"), value: 210.73 },
    { date: new Date("2010-01-04"), value: 214.01 },
    { date: new Date("2010-01-05"), value: 214.38 },
    { date: new Date("2010-01-06"), value: 210.97 },
    { date: new Date("2010-01-07"), value: 210.58 },
    { date: new Date("2010-01-08"), value: 211.98 },
    { date: new Date("2010-01-11"), value: 210.11 },
    { date: new Date("2010-01-12"), value: 207.72 },
    { date: new Date("2010-01-13"), value: 210.65 },
    { date: new Date("2010-01-14"), value: 209.43 },
    { date: new Date("2010-01-15"), value: 205.93 },
    { date: new Date("2010-01-18"), value: 205.93 },
    { date: new Date("2010-01-19"), value: 215.04 },
    { date: new Date("2010-01-20"), value: 211.72 },
    { date: new Date("2010-01-21"), value: 208.07 },
    { date: new Date("2010-01-22"), value: 197.75 },
    { date: new Date("2010-01-25"), value: 203.08 },
    { date: new Date("2010-01-26"), value: 205.94 },
    { date: new Date("2010-01-27"), value: 207.88 },
    { date: new Date("2010-01-28"), value: 199.29 },
    { date: new Date("2010-01-29"), value: 192.06 },
    { date: new Date("2010-02-01"), value: 194.73 },
    { date: new Date("2010-02-02"), value: 195.86 },
    { date: new Date("2010-02-03"), value: 199.23 },
    { date: new Date("2010-02-04"), value: 192.05 },
    { date: new Date("2010-02-05"), value: 195.46 },
    { date: new Date("2010-02-08"), value: 194.12 },
    { date: new Date("2010-02-09"), value: 196.19 },
    { date: new Date("2010-02-10"), value: 195.12 },
    { date: new Date("2010-02-11"), value: 198.67 },
    { date: new Date("2010-02-12"), value: 200.38 },
    { date: new Date("2010-02-15"), value: 200.38 },
    { date: new Date("2010-02-16"), value: 203.40 },
    { date: new Date("2010-02-17"), value: 202.55 },
    { date: new Date("2010-02-18"), value: 202.93 },
    { date: new Date("2010-02-19"), value: 201.67 },
    { date: new Date("2010-02-22"), value: 200.42 },
    { date: new Date("2010-02-23"), value: 197.06 },
    { date: new Date("2010-02-24"), value: 200.66 },
    { date: new Date("2010-02-25"), value: 202.00 },
    { date: new Date("2010-02-26"), value: 204.62 },
    { date: new Date("2010-03-01"), value: 208.99 },
    { date: new Date("2010-03-02"), value: 208.85 },
    { date: new Date("2010-03-03"), value: 209.33 },
    { date: new Date("2010-03-04"), value: 210.71 },
    { date: new Date("2010-03-05"), value: 218.95 },
    { date: new Date("2010-03-08"), value: 219.08 },
    { date: new Date("2010-03-09"), value: 223.02 },
    { date: new Date("2010-03-10"), value: 224.84 },
    { date: new Date("2010-03-11"), value: 225.50 },
    { date: new Date("2010-03-12"), value: 226.60 },
    { date: new Date("2010-03-15"), value: 223.84 },
    { date: new Date("2010-03-16"), value: 224.45 },
    { date: new Date("2010-03-17"), value: 224.12 },
    { date: new Date("2010-03-18"), value: 224.65 },
    { date: new Date("2010-03-19"), value: 222.25 },
    { date: new Date("2010-03-22"), value: 224.75 },
    { date: new Date("2010-03-23"), value: 228.36 },
    { date: new Date("2010-03-24"), value: 229.37 },
    { date: new Date("2010-03-25"), value: 226.65 },
    { date: new Date("2010-03-26"), value: 230.90 },
    { date: new Date("2010-03-29"), value: 232.39 },
    { date: new Date("2010-03-30"), value: 235.84 },
    { date: new Date("2010-03-31"), value: 235.00 },
    { date: new Date("2010-04-01"), value: 235.97 },
    { date: new Date("2010-04-02"), value: 235.97 },
    { date: new Date("2010-04-05"), value: 238.49 },
    { date: new Date("2010-04-06"), value: 239.54 },
    { date: new Date("2010-04-07"), value: 240.60 },
    { date: new Date("2010-04-08"), value: 239.95 },
    { date: new Date("2010-04-09"), value: 241.79 },
    { date: new Date("2010-04-12"), value: 242.29 },
    { date: new Date("2010-04-13"), value: 242.43 },
    { date: new Date("2010-04-14"), value: 245.69 },
    { date: new Date("2010-04-15"), value: 248.92 },
    { date: new Date("2010-04-16"), value: 247.40 },
    { date: new Date("2010-04-19"), value: 247.07 },
    { date: new Date("2010-04-20"), value: 244.59 },
    { date: new Date("2010-04-21"), value: 259.22 },
    { date: new Date("2010-04-22"), value: 266.47 },
    { date: new Date("2010-04-23"), value: 270.83 },
    { date: new Date("2010-04-26"), value: 269.50 },
    { date: new Date("2010-04-27"), value: 262.04 },
    { date: new Date("2010-04-28"), value: 261.60 },
    { date: new Date("2010-04-29"), value: 268.64 },
    { date: new Date("2010-04-30"), value: 261.09 },
    { date: new Date("2010-05-03"), value: 266.35 },
    { date: new Date("2010-05-04"), value: 258.68 },
    { date: new Date("2010-05-05"), value: 255.98 },
    { date: new Date("2010-05-06"), value: 246.25 },
    { date: new Date("2010-05-07"), value: 235.86 },
    { date: new Date("2010-05-10"), value: 253.99 },
    { date: new Date("2010-05-11"), value: 256.52 },
    { date: new Date("2010-05-12"), value: 262.09 },
    { date: new Date("2010-05-13"), value: 258.36 },
    { date: new Date("2010-05-14"), value: 253.82 },
    { date: new Date("2010-05-17"), value: 254.22 },
    { date: new Date("2010-05-18"), value: 252.36 },
    { date: new Date("2010-05-19"), value: 248.34 },
    { date: new Date("2010-05-20"), value: 237.76 },
    { date: new Date("2010-05-21"), value: 242.32 },
    { date: new Date("2010-05-24"), value: 246.76 },
    { date: new Date("2010-05-25"), value: 245.22 },
    { date: new Date("2010-05-26"), value: 244.11 },
    { date: new Date("2010-05-27"), value: 253.35 },
    { date: new Date("2010-05-28"), value: 256.88 },
    { date: new Date("2010-05-31"), value: 256.88 },
    { date: new Date("2010-06-01"), value: 260.83 },
    { date: new Date("2010-06-02"), value: 263.95 },
    { date: new Date("2010-06-03"), value: 263.12 },
    { date: new Date("2010-06-04"), value: 255.96 },
    { date: new Date("2010-06-07"), value: 250.94 },
    { date: new Date("2010-06-08"), value: 249.33 },
    { date: new Date("2010-06-09"), value: 243.20 },
    { date: new Date("2010-06-10"), value: 250.51 },
    { date: new Date("2010-06-11"), value: 253.51 },
    { date: new Date("2010-06-14"), value: 254.28 },
    { date: new Date("2010-06-15"), value: 259.69 },
    { date: new Date("2010-06-16"), value: 267.25 },
    { date: new Date("2010-06-17"), value: 271.87 },
    { date: new Date("2010-06-18"), value: 274.07 },
    { date: new Date("2010-06-21"), value: 270.17 },
    { date: new Date("2010-06-22"), value: 273.85 },
    { date: new Date("2010-06-23"), value: 270.97 },
    { date: new Date("2010-06-24"), value: 269.00 },
    { date: new Date("2010-06-25"), value: 266.70 },
    { date: new Date("2010-06-28"), value: 268.30 },
    { date: new Date("2010-06-29"), value: 256.17 },
    { date: new Date("2010-06-30"), value: 251.53 },
    { date: new Date("2010-07-01"), value: 248.48 },
    { date: new Date("2010-07-02"), value: 246.94 },
    { date: new Date("2010-07-05"), value: 246.94 },
    { date: new Date("2010-07-06"), value: 248.63 },
    { date: new Date("2010-07-07"), value: 258.66 },
    { date: new Date("2010-07-08"), value: 258.09 },
    { date: new Date("2010-07-09"), value: 259.62 },
    { date: new Date("2010-07-12"), value: 257.28 },
    { date: new Date("2010-07-13"), value: 251.80 },
    { date: new Date("2010-07-14"), value: 252.73 },
    { date: new Date("2010-07-15"), value: 251.45 },
    { date: new Date("2010-07-16"), value: 249.90 },
    { date: new Date("2010-07-19"), value: 245.58 },
    { date: new Date("2010-07-20"), value: 251.89 },
    { date: new Date("2010-07-21"), value: 254.24 },
    { date: new Date("2010-07-22"), value: 259.02 },
    { date: new Date("2010-07-23"), value: 259.94 },
    { date: new Date("2010-07-26"), value: 259.28 },
    { date: new Date("2010-07-27"), value: 264.08 },
    { date: new Date("2010-07-28"), value: 260.96 },
    { date: new Date("2010-07-29"), value: 258.11 },
    { date: new Date("2010-07-30"), value: 257.25 },
    { date: new Date("2010-08-02"), value: 261.85 },
    { date: new Date("2010-08-03"), value: 261.93 },
    { date: new Date("2010-08-04"), value: 262.98 },
    { date: new Date("2010-08-05"), value: 261.70 },
    { date: new Date("2010-08-06"), value: 260.09 },
    { date: new Date("2010-08-09"), value: 261.75 },
    { date: new Date("2010-08-10"), value: 259.41 },
    { date: new Date("2010-08-11"), value: 250.19 },
    { date: new Date("2010-08-12"), value: 251.79 },
    { date: new Date("2010-08-13"), value: 249.10 },
    { date: new Date("2010-08-16"), value: 247.64 },
    { date: new Date("2010-08-17"), value: 251.97 },
    { date: new Date("2010-08-18"), value: 253.07 },
    { date: new Date("2010-08-19"), value: 249.88 },
    { date: new Date("2010-08-20"), value: 249.64 },
    { date: new Date("2010-08-23"), value: 245.80 },
    { date: new Date("2010-08-24"), value: 239.93 },
    { date: new Date("2010-08-25"), value: 242.89 },
    { date: new Date("2010-08-26"), value: 240.28 },
    { date: new Date("2010-08-27"), value: 241.62 },
    { date: new Date("2010-08-30"), value: 242.50 },
    { date: new Date("2010-08-31"), value: 243.10 },
    { date: new Date("2010-09-01"), value: 250.33 },
    { date: new Date("2010-09-02"), value: 252.17 },
    { date: new Date("2010-09-03"), value: 258.77 },
    { date: new Date("2010-09-06"), value: 258.77 },
    { date: new Date("2010-09-07"), value: 257.81 },
    { date: new Date("2010-09-08"), value: 262.92 },
    { date: new Date("2010-09-09"), value: 263.07 },
    { date: new Date("2010-09-10"), value: 263.41 },
    { date: new Date("2010-09-13"), value: 267.04 },
    { date: new Date("2010-09-14"), value: 268.06 },
    { date: new Date("2010-09-15"), value: 270.22 },
    { date: new Date("2010-09-16"), value: 276.57 },
    { date: new Date("2010-09-17"), value: 275.37 },
    { date: new Date("2010-09-20"), value: 283.23 },
    { date: new Date("2010-09-21"), value: 283.77 },
    { date: new Date("2010-09-22"), value: 287.75 },
    { date: new Date("2010-09-23"), value: 288.92 },
    { date: new Date("2010-09-24"), value: 292.32 },
    { date: new Date("2010-09-27"), value: 291.16 },
    { date: new Date("2010-09-28"), value: 286.86 },
    { date: new Date("2010-09-29"), value: 287.37 },
    { date: new Date("2010-09-30"), value: 283.75 },
    { date: new Date("2010-10-01"), value: 282.52 },
    { date: new Date("2010-10-04"), value: 278.64 },
    { date: new Date("2010-10-05"), value: 288.94 },
    { date: new Date("2010-10-06"), value: 289.19 },
    { date: new Date("2010-10-07"), value: 289.22 },
    { date: new Date("2010-10-08"), value: 294.07 },
    { date: new Date("2010-10-11"), value: 295.36 },
    { date: new Date("2010-10-12"), value: 298.54 },
    { date: new Date("2010-10-13"), value: 300.14 },
    { date: new Date("2010-10-14"), value: 302.31 },
    { date: new Date("2010-10-15"), value: 314.74 },
    { date: new Date("2010-10-18"), value: 318.00 },
    { date: new Date("2010-10-19"), value: 309.49 },
    { date: new Date("2010-10-20"), value: 310.53 },
    { date: new Date("2010-10-21"), value: 309.52 },
    { date: new Date("2010-10-22"), value: 307.47 },
    { date: new Date("2010-10-25"), value: 308.84 },
    { date: new Date("2010-10-26"), value: 308.05 },
    { date: new Date("2010-10-27"), value: 307.83 },
    { date: new Date("2010-10-28"), value: 305.24 },
    { date: new Date("2010-10-29"), value: 300.98 },
    { date: new Date("2010-11-01"), value: 304.18 },
    { date: new Date("2010-11-02"), value: 309.36 },
    { date: new Date("2010-11-03"), value: 312.80 },
    { date: new Date("2010-11-04"), value: 318.27 },
    { date: new Date("2010-11-05"), value: 317.13 },
    { date: new Date("2010-11-08"), value: 318.62 },
    { date: new Date("2010-11-09"), value: 316.08 },
    { date: new Date("2010-11-10"), value: 318.03 },
    { date: new Date("2010-11-11"), value: 316.66 },
    { date: new Date("2010-11-12"), value: 308.03 },
    { date: new Date("2010-11-15"), value: 307.04 },
    { date: new Date("2010-11-16"), value: 301.59 },
    { date: new Date("2010-11-17"), value: 300.50 },
    { date: new Date("2010-11-18"), value: 308.43 },
    { date: new Date("2010-11-19"), value: 306.73 },
    { date: new Date("2010-11-22"), value: 313.36 },
    { date: new Date("2010-11-23"), value: 308.73 },
    { date: new Date("2010-11-24"), value: 314.80 },
    { date: new Date("2010-11-26"), value: 315.00 },
    { date: new Date("2010-11-29"), value: 316.87 },
    { date: new Date("2010-11-30"), value: 311.15 },
    { date: new Date("2010-12-01"), value: 316.40 },
    { date: new Date("2010-12-02"), value: 318.15 },
    { date: new Date("2010-12-03"), value: 317.44 },
    { date: new Date("2010-12-06"), value: 320.15 },
    { date: new Date("2010-12-07"), value: 318.21 },
    { date: new Date("2010-12-08"), value: 321.01 },
    { date: new Date("2010-12-09"), value: 319.76 },
    { date: new Date("2010-12-10"), value: 320.56 },
    { date: new Date("2010-12-13"), value: 321.67 },
    { date: new Date("2010-12-14"), value: 320.29 },
    { date: new Date("2010-12-15"), value: 320.36 },
    { date: new Date("2010-12-16"), value: 321.25 },
    { date: new Date("2010-12-17"), value: 320.61 },
    { date: new Date("2010-12-20"), value: 322.21 },
    { date: new Date("2010-12-21"), value: 324.20 },
    { date: new Date("2010-12-22"), value: 325.16 },
    { date: new Date("2010-12-23"), value: 323.60 },
    { date: new Date("2010-12-27"), value: 324.68 },
    { date: new Date("2010-12-28"), value: 325.47 },
    { date: new Date("2010-12-29"), value: 325.29 },
    { date: new Date("2010-12-30"), value: 323.66 },
    { date: new Date("2010-12-31"), value: 322.56 },
    { date: new Date("2011-01-03"), value: 329.57 },
    { date: new Date("2011-01-04"), value: 331.29 },
    { date: new Date("2011-01-05"), value: 334.00 },
    { date: new Date("2011-01-06"), value: 333.73 },
    { date: new Date("2011-01-07"), value: 336.12 },
    { date: new Date("2011-01-10"), value: 342.46 },
    { date: new Date("2011-01-11"), value: 341.64 },
    { date: new Date("2011-01-12"), value: 344.42 },
    { date: new Date("2011-01-13"), value: 345.68 },
    { date: new Date("2011-01-14"), value: 348.48 },
    { date: new Date("2011-01-18"), value: 340.65 },
    { date: new Date("2011-01-19"), value: 338.84 },
    { date: new Date("2011-01-20"), value: 332.68 },
    { date: new Date("2011-01-21"), value: 326.72 },
    { date: new Date("2011-01-24"), value: 337.45 },
    { date: new Date("2011-01-25"), value: 341.40 },
    { date: new Date("2011-01-26"), value: 343.85 },
    { date: new Date("2011-01-27"), value: 343.21 },
    { date: new Date("2011-01-28"), value: 336.10 },
    { date: new Date("2011-01-31"), value: 339.32 },
    { date: new Date("2011-02-01"), value: 345.03 },
    { date: new Date("2011-02-02"), value: 344.32 },
    { date: new Date("2011-02-03"), value: 343.44 },
    { date: new Date("2011-02-04"), value: 346.50 },
    { date: new Date("2011-02-07"), value: 351.88 },
    { date: new Date("2011-02-08"), value: 355.20 },
    { date: new Date("2011-02-09"), value: 358.16 },
    { date: new Date("2011-02-10"), value: 354.54 },
    { date: new Date("2011-02-11"), value: 356.85 },
    { date: new Date("2011-02-14"), value: 359.18 },
    { date: new Date("2011-02-15"), value: 359.90 },
    { date: new Date("2011-02-16"), value: 363.13 },
    { date: new Date("2011-02-17"), value: 358.30 },
    { date: new Date("2011-02-18"), value: 350.56 },
    { date: new Date("2011-02-22"), value: 338.61 },
    { date: new Date("2011-02-23"), value: 342.62 },
    { date: new Date("2011-02-24"), value: 342.88 },
    { date: new Date("2011-02-25"), value: 348.16 },
    { date: new Date("2011-02-28"), value: 353.21 },
    { date: new Date("2011-03-01"), value: 349.31 },
    { date: new Date("2011-03-02"), value: 352.12 },
    { date: new Date("2011-03-03"), value: 359.56 },
    { date: new Date("2011-03-04"), value: 360.00 },
    { date: new Date("2011-03-07"), value: 355.36 },
    { date: new Date("2011-03-08"), value: 355.76 },
    { date: new Date("2011-03-09"), value: 352.47 },
    { date: new Date("2011-03-10"), value: 346.67 },
    { date: new Date("2011-03-11"), value: 351.99 },
    { date: new Date("2011-03-14"), value: 353.56 },
    { date: new Date("2011-03-15"), value: 345.43 },
    { date: new Date("2011-03-16"), value: 330.01 },
    { date: new Date("2011-03-17"), value: 334.64 },
    { date: new Date("2011-03-18"), value: 330.67 },
    { date: new Date("2011-03-21"), value: 339.30 },
    { date: new Date("2011-03-22"), value: 341.20 },
    { date: new Date("2011-03-23"), value: 339.19 },
    { date: new Date("2011-03-24"), value: 344.97 },
    { date: new Date("2011-03-25"), value: 351.54 },
    { date: new Date("2011-03-28"), value: 350.44 },
    { date: new Date("2011-03-29"), value: 350.96 },
    { date: new Date("2011-03-30"), value: 348.63 },
    { date: new Date("2011-03-31"), value: 348.51 },
    { date: new Date("2011-04-01"), value: 344.56 },
    { date: new Date("2011-04-04"), value: 341.19 },
    { date: new Date("2011-04-05"), value: 338.89 },
    { date: new Date("2011-04-06"), value: 338.04 },
    { date: new Date("2011-04-07"), value: 338.08 },
    { date: new Date("2011-04-08"), value: 335.06 },
    { date: new Date("2011-04-11"), value: 330.80 },
    { date: new Date("2011-04-12"), value: 332.40 },
    { date: new Date("2011-04-13"), value: 336.13 },
    { date: new Date("2011-04-14"), value: 332.42 },
    { date: new Date("2011-04-15"), value: 327.46 },
    { date: new Date("2011-04-18"), value: 331.85 },
    { date: new Date("2011-04-19"), value: 337.86 },
    { date: new Date("2011-04-20"), value: 342.41 },
    { date: new Date("2011-04-21"), value: 350.70 },
    { date: new Date("2011-04-25"), value: 353.01 },
    { date: new Date("2011-04-26"), value: 350.42 },
    { date: new Date("2011-04-27"), value: 350.15 },
    { date: new Date("2011-04-28"), value: 346.75 },
    { date: new Date("2011-04-29"), value: 350.13 },
    { date: new Date("2011-05-02"), value: 346.28 },
    { date: new Date("2011-05-03"), value: 348.20 },
    { date: new Date("2011-05-04"), value: 349.57 },
    { date: new Date("2011-05-05"), value: 346.75 },
    { date: new Date("2011-05-06"), value: 346.66 },
    { date: new Date("2011-05-09"), value: 347.60 },
    { date: new Date("2011-05-10"), value: 349.45 },
    { date: new Date("2011-05-11"), value: 347.23 },
    { date: new Date("2011-05-12"), value: 346.57 },
    { date: new Date("2011-05-13"), value: 340.50 },
    { date: new Date("2011-05-16"), value: 333.30 },
    { date: new Date("2011-05-17"), value: 336.14 },
    { date: new Date("2011-05-18"), value: 339.87 },
    { date: new Date("2011-05-19"), value: 340.53 },
    { date: new Date("2011-05-20"), value: 335.22 },
    { date: new Date("2011-05-23"), value: 334.40 },
    { date: new Date("2011-05-24"), value: 332.19 },
    { date: new Date("2011-05-25"), value: 336.78 },
    { date: new Date("2011-05-26"), value: 335.00 },
    { date: new Date("2011-05-27"), value: 337.41 },
    { date: new Date("2011-05-31"), value: 347.83 },
    { date: new Date("2011-06-01"), value: 345.51 },
    { date: new Date("2011-06-02"), value: 346.10 },
    { date: new Date("2011-06-03"), value: 343.44 },
    { date: new Date("2011-06-06"), value: 338.04 },
    { date: new Date("2011-06-07"), value: 332.04 },
    { date: new Date("2011-06-08"), value: 332.24 },
    { date: new Date("2011-06-09"), value: 331.49 },
    { date: new Date("2011-06-10"), value: 325.90 },
    { date: new Date("2011-06-13"), value: 326.60 },
    { date: new Date("2011-06-14"), value: 332.44 },
    { date: new Date("2011-06-15"), value: 326.75 },
    { date: new Date("2011-06-16"), value: 325.16 },
    { date: new Date("2011-06-17"), value: 320.26 },
    { date: new Date("2011-06-20"), value: 315.32 },
    { date: new Date("2011-06-21"), value: 325.30 },
    { date: new Date("2011-06-22"), value: 322.61 },
    { date: new Date("2011-06-23"), value: 331.23 },
    { date: new Date("2011-06-24"), value: 326.35 },
    { date: new Date("2011-06-27"), value: 332.04 },
    { date: new Date("2011-06-28"), value: 335.26 },
    { date: new Date("2011-06-29"), value: 334.04 },
    { date: new Date("2011-06-30"), value: 335.67 },
    { date: new Date("2011-07-01"), value: 343.26 },
    { date: new Date("2011-07-05"), value: 349.43 },
    { date: new Date("2011-07-06"), value: 351.76 },
    { date: new Date("2011-07-07"), value: 357.20 },
    { date: new Date("2011-07-08"), value: 359.71 },
    { date: new Date("2011-07-11"), value: 354.00 },
    { date: new Date("2011-07-12"), value: 353.75 },
    { date: new Date("2011-07-13"), value: 358.02 },
    { date: new Date("2011-07-14"), value: 357.77 },
    { date: new Date("2011-07-15"), value: 364.92 },
    { date: new Date("2011-07-18"), value: 373.80 },
    { date: new Date("2011-07-19"), value: 376.85 },
    { date: new Date("2011-07-20"), value: 386.90 },
    { date: new Date("2011-07-21"), value: 387.29 },
    { date: new Date("2011-07-22"), value: 393.30 },
    { date: new Date("2011-07-25"), value: 398.50 },
    { date: new Date("2011-07-26"), value: 403.41 },
    { date: new Date("2011-07-27"), value: 392.59 },
    { date: new Date("2011-07-28"), value: 391.82 },
    { date: new Date("2011-07-29"), value: 390.48 },
    { date: new Date("2011-08-01"), value: 396.75 },
    { date: new Date("2011-08-02"), value: 388.91 },
    { date: new Date("2011-08-03"), value: 392.57 },
    { date: new Date("2011-08-04"), value: 377.37 },
    { date: new Date("2011-08-05"), value: 373.62 },
    { date: new Date("2011-08-08"), value: 353.21 },
    { date: new Date("2011-08-09"), value: 374.01 },
    { date: new Date("2011-08-10"), value: 363.69 },
    { date: new Date("2011-08-11"), value: 373.70 },
    { date: new Date("2011-08-12"), value: 376.99 },
    { date: new Date("2011-08-15"), value: 383.41 },
    { date: new Date("2011-08-16"), value: 380.48 },
    { date: new Date("2011-08-17"), value: 380.44 },
    { date: new Date("2011-08-18"), value: 366.05 },
    { date: new Date("2011-08-19"), value: 356.03 },
    { date: new Date("2011-08-22"), value: 356.44 },
    { date: new Date("2011-08-23"), value: 373.60 },
    { date: new Date("2011-08-24"), value: 376.18 },
    { date: new Date("2011-08-25"), value: 373.72 },
    { date: new Date("2011-08-26"), value: 383.58 },
    { date: new Date("2011-08-29"), value: 389.97 },
    { date: new Date("2011-08-30"), value: 389.99 },
    { date: new Date("2011-08-31"), value: 384.83 },
    { date: new Date("2011-09-01"), value: 381.03 },
    { date: new Date("2011-09-02"), value: 374.05 },
    { date: new Date("2011-09-06"), value: 379.74 },
    { date: new Date("2011-09-07"), value: 383.93 },
    { date: new Date("2011-09-08"), value: 384.14 },
    { date: new Date("2011-09-09"), value: 377.48 },
    { date: new Date("2011-09-12"), value: 379.94 },
    { date: new Date("2011-09-13"), value: 384.62 },
    { date: new Date("2011-09-14"), value: 389.30 },
    { date: new Date("2011-09-15"), value: 392.96 },
    { date: new Date("2011-09-16"), value: 400.50 },
    { date: new Date("2011-09-19"), value: 411.63 },
    { date: new Date("2011-09-20"), value: 413.45 },
    { date: new Date("2011-09-21"), value: 412.14 },
    { date: new Date("2011-09-22"), value: 401.82 },
    { date: new Date("2011-09-23"), value: 404.30 },
    { date: new Date("2011-09-26"), value: 403.17 },
    { date: new Date("2011-09-27"), value: 399.26 },
    { date: new Date("2011-09-28"), value: 397.01 },
    { date: new Date("2011-09-29"), value: 390.57 },
    { date: new Date("2011-09-30"), value: 381.32 },
    { date: new Date("2011-10-03"), value: 374.60 },
    { date: new Date("2011-10-04"), value: 372.50 },
    { date: new Date("2011-10-05"), value: 378.25 },
    { date: new Date("2011-10-06"), value: 377.37 },
    { date: new Date("2011-10-07"), value: 369.80 },
    { date: new Date("2011-10-10"), value: 388.81 },
    { date: new Date("2011-10-11"), value: 400.29 },
    { date: new Date("2011-10-12"), value: 402.19 },
    { date: new Date("2011-10-13"), value: 408.43 },
    { date: new Date("2011-10-14"), value: 422.00 },
    { date: new Date("2011-10-17"), value: 419.99 },
    { date: new Date("2011-10-18"), value: 422.24 },
    { date: new Date("2011-10-19"), value: 398.62 },
    { date: new Date("2011-10-20"), value: 395.31 },
    { date: new Date("2011-10-21"), value: 392.87 },
    { date: new Date("2011-10-24"), value: 405.77 },
    { date: new Date("2011-10-25"), value: 397.77 },
    { date: new Date("2011-10-26"), value: 400.60 },
    { date: new Date("2011-10-27"), value: 404.69 },
    { date: new Date("2011-10-28"), value: 404.95 },
    { date: new Date("2011-10-31"), value: 404.78 },
    { date: new Date("2011-11-01"), value: 396.51 },
    { date: new Date("2011-11-02"), value: 397.41 },
    { date: new Date("2011-11-03"), value: 403.07 },
    { date: new Date("2011-11-04"), value: 400.24 },
    { date: new Date("2011-11-07"), value: 399.73 },
    { date: new Date("2011-11-08"), value: 406.23 },
    { date: new Date("2011-11-09"), value: 395.28 },
    { date: new Date("2011-11-10"), value: 385.22 },
    { date: new Date("2011-11-11"), value: 384.62 },
    { date: new Date("2011-11-14"), value: 379.26 },
    { date: new Date("2011-11-15"), value: 388.83 },
    { date: new Date("2011-11-16"), value: 384.77 },
    { date: new Date("2011-11-17"), value: 377.41 },
    { date: new Date("2011-11-18"), value: 374.94 },
    { date: new Date("2011-11-21"), value: 369.01 },
    { date: new Date("2011-11-22"), value: 376.51 },
    { date: new Date("2011-11-23"), value: 366.99 },
    { date: new Date("2011-11-25"), value: 363.57 },
    { date: new Date("2011-11-28"), value: 376.12 },
    { date: new Date("2011-11-29"), value: 373.20 },
    { date: new Date("2011-11-30"), value: 382.20 },
    { date: new Date("2011-12-01"), value: 387.93 },
    { date: new Date("2011-12-02"), value: 389.70 },
    { date: new Date("2011-12-05"), value: 393.01 },
    { date: new Date("2011-12-06"), value: 390.95 },
    { date: new Date("2011-12-07"), value: 389.09 },
    { date: new Date("2011-12-08"), value: 390.66 },
    { date: new Date("2011-12-09"), value: 393.62 },
    { date: new Date("2011-12-12"), value: 391.84 },
    { date: new Date("2011-12-13"), value: 388.81 },
    { date: new Date("2011-12-14"), value: 380.19 },
    { date: new Date("2011-12-15"), value: 378.94 },
    { date: new Date("2011-12-16"), value: 381.02 },
    { date: new Date("2011-12-19"), value: 382.21 },
    { date: new Date("2011-12-20"), value: 395.95 },
    { date: new Date("2011-12-21"), value: 396.44 },
    { date: new Date("2011-12-22"), value: 398.55 },
    { date: new Date("2011-12-23"), value: 403.43 },
    { date: new Date("2011-12-27"), value: 406.53 },
    { date: new Date("2011-12-28"), value: 402.64 },
    { date: new Date("2011-12-29"), value: 405.12 },
    { date: new Date("2011-12-30"), value: 405.00 },
    { date: new Date("2012-01-03"), value: 411.23 },
    { date: new Date("2012-01-04"), value: 413.44 },
    { date: new Date("2012-01-05"), value: 418.03 },
    { date: new Date("2012-01-06"), value: 422.40 },
    { date: new Date("2012-01-09"), value: 421.73 },
    { date: new Date("2012-01-10"), value: 423.24 },
    { date: new Date("2012-01-11"), value: 422.55 },
    { date: new Date("2012-01-12"), value: 421.39 },
    { date: new Date("2012-01-13"), value: 419.81 },
    { date: new Date("2012-01-17"), value: 424.70 },
    { date: new Date("2012-01-18"), value: 429.11 },
    { date: new Date("2012-01-19"), value: 427.75 },
    { date: new Date("2012-01-20"), value: 420.30 },
    { date: new Date("2012-01-23"), value: 427.41 },
    { date: new Date("2012-01-24"), value: 420.41 },
    { date: new Date("2012-01-25"), value: 446.66 },
    { date: new Date("2012-01-26"), value: 444.63 },
    { date: new Date("2012-01-27"), value: 447.28 },
    { date: new Date("2012-01-30"), value: 453.01 },
    { date: new Date("2012-01-31"), value: 456.48 },
    { date: new Date("2012-02-01"), value: 456.19 },
    { date: new Date("2012-02-02"), value: 455.12 },
    { date: new Date("2012-02-03"), value: 459.68 },
    { date: new Date("2012-02-06"), value: 463.97 },
    { date: new Date("2012-02-07"), value: 468.83 },
    { date: new Date("2012-02-08"), value: 476.68 },
    { date: new Date("2012-02-09"), value: 493.17 },
    { date: new Date("2012-02-10"), value: 493.42 },
    { date: new Date("2012-02-13"), value: 502.60 },
    { date: new Date("2012-02-14"), value: 509.46 },
    { date: new Date("2012-02-15"), value: 497.67 },
    { date: new Date("2012-02-16"), value: 502.21 },
    { date: new Date("2012-02-17"), value: 502.12 },
    { date: new Date("2012-02-21"), value: 514.85 },
    { date: new Date("2012-02-22"), value: 513.04 },
    { date: new Date("2012-02-23"), value: 516.39 },
    { date: new Date("2012-02-24"), value: 522.41 },
    { date: new Date("2012-02-27"), value: 525.76 },
    { date: new Date("2012-02-28"), value: 535.41 },
    { date: new Date("2012-02-29"), value: 542.44 },
    { date: new Date("2012-03-01"), value: 544.47 },
    { date: new Date("2012-03-02"), value: 545.18 },
    { date: new Date("2012-03-05"), value: 533.16 },
    { date: new Date("2012-03-06"), value: 530.26 },
    { date: new Date("2012-03-07"), value: 530.69 },
    { date: new Date("2012-03-08"), value: 541.99 },
    { date: new Date("2012-03-09"), value: 545.17 },
    { date: new Date("2012-03-12"), value: 552.00 },
    { date: new Date("2012-03-13"), value: 568.10 },
    { date: new Date("2012-03-14"), value: 589.58 },
    { date: new Date("2012-03-15"), value: 585.56 },
    { date: new Date("2012-03-16"), value: 585.57 },
    { date: new Date("2012-03-19"), value: 601.10 },
    { date: new Date("2012-03-20"), value: 605.96 },
    { date: new Date("2012-03-21"), value: 602.50 },
    { date: new Date("2012-03-22"), value: 599.34 },
    { date: new Date("2012-03-23"), value: 596.05 },
    { date: new Date("2012-03-26"), value: 606.98 },
    { date: new Date("2012-03-27"), value: 614.48 },
    { date: new Date("2012-03-28"), value: 617.62 },
    { date: new Date("2012-03-29"), value: 609.86 },
    { date: new Date("2012-03-30"), value: 599.55 },
    { date: new Date("2012-04-02"), value: 618.63 },
    { date: new Date("2012-04-03"), value: 629.32 },
    { date: new Date("2012-04-04"), value: 624.31 },
    { date: new Date("2012-04-05"), value: 633.68 },
    { date: new Date("2012-04-09"), value: 636.23 },
    { date: new Date("2012-04-10"), value: 628.44 },
    { date: new Date("2012-04-11"), value: 626.20 },
    { date: new Date("2012-04-12"), value: 622.77 },
    { date: new Date("2012-04-13"), value: 605.23 },
    { date: new Date("2012-04-16"), value: 580.13 },
    { date: new Date("2012-04-17"), value: 609.70 },
    { date: new Date("2012-04-18"), value: 608.34 },
    { date: new Date("2012-04-19"), value: 587.44 },
    { date: new Date("2012-04-20"), value: 572.98 },
    { date: new Date("2012-04-23"), value: 571.70 },
    { date: new Date("2012-04-24"), value: 560.28 },
    { date: new Date("2012-04-25"), value: 610.00 },
    { date: new Date("2012-04-26"), value: 607.70 },
    { date: new Date("2012-04-27"), value: 603.00 },
    { date: new Date("2012-04-30"), value: 583.98 },
    { date: new Date("2012-05-01"), value: 582.13 },
];
//# sourceMappingURL=data.js.map

/***/ }),

/***/ "../../../../../src/app/sheet1/sheet1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sheet1/sheet1.component.html":
/***/ (function(module, exports) {

module.exports = "<graph [nodes]=\"nodes\" [links]=\"links\"></graph>"

/***/ }),

/***/ "../../../../../src/app/sheet1/sheet1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3__ = __webpack_require__("../../../../../src/app/d3/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sheet1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Sheet1Component = (function () {
    function Sheet1Component() {
        this.nodes = [];
        this.links = [];
        var N = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* default */].N, getIndex = function (number) { return number - 1; };
        /** constructing the nodes array */
        for (var i = 1; i <= N; i++) {
            this.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__d3__["c" /* Node */](i));
        }
        for (var i = 1; i <= N; i++) {
            for (var m = 2; i * m <= N; m++) {
                /** increasing connections toll on connecting nodes */
                this.nodes[getIndex(i)].linkCount++;
                this.nodes[getIndex(i * m)].linkCount++;
                /** connecting the nodes before starting the simulation */
                this.links.push(new __WEBPACK_IMPORTED_MODULE_2__d3__["e" /* Link */](i, i * m));
            }
        }
    }
    return Sheet1Component;
}());
Sheet1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-sheet1',
        template: __webpack_require__("../../../../../src/app/sheet1/sheet1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sheet1/sheet1.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Sheet1Component);

//# sourceMappingURL=sheet1.component.js.map

/***/ }),

/***/ "../../../../../src/app/visuals/graph/graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/visuals/graph/graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3__ = __webpack_require__("../../../../../src/app/d3/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GraphComponent = (function () {
    function GraphComponent(d3Service, ref) {
        this.d3Service = d3Service;
        this.ref = ref;
        // tslint:disable-next-line:member-ordering
        this._options = { width: 800, height: 600 };
    }
    GraphComponent.prototype.onResize = function (event) {
        this.graph.initSimulation(this.options);
    };
    // tslint:disable-next-line:use-life-cycle-interface
    GraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** Receiving an initialized simulated graph from our custom d3 service */
        this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
        /** Binding change detection check on each tick
         * This along with an onPush change detection strategy should enforce checking only when relevant!
         * This improves scripting computation duration in a couple of tests I've made, consistently.
         * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
         */
        this.graph.ticker.subscribe(function (d) {
            _this.ref.markForCheck();
        });
    };
    // tslint:disable-next-line:use-life-cycle-interface
    GraphComponent.prototype.ngAfterViewInit = function () {
        this.graph.initSimulation(this.options);
    };
    Object.defineProperty(GraphComponent.prototype, "options", {
        get: function () {
            return this._options = {
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        enumerable: true,
        configurable: true
    });
    return GraphComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])('nodes'),
    __metadata("design:type", Object)
], GraphComponent.prototype, "nodes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])('links'),
    __metadata("design:type", Object)
], GraphComponent.prototype, "links", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__d3__["d" /* ForceDirectedGraph */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__d3__["d" /* ForceDirectedGraph */]) === "function" && _a || Object)
], GraphComponent.prototype, "graph", void 0);
GraphComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        // tslint:disable-next-line:component-selector
        selector: 'graph',
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush,
        template: "\n    <svg #svg [attr.width]=\"_options.width\" [attr.height]=\"_options.height\">\n      <g [zoomableOf]=\"svg\">\n        <g [linkVisual]=\"link\" *ngFor=\"let link of links\"></g>\n        <g [nodeVisual]=\"node\" *ngFor=\"let node of nodes\"\n            [draggableNode]=\"node\" [draggableInGraph]=\"graph\"></g>\n      </g>\n    </svg>\n  ",
        styles: [__webpack_require__("../../../../../src/app/visuals/graph/graph.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__d3__["b" /* D3Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__d3__["b" /* D3Service */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ChangeDetectorRef */]) === "function" && _c || Object])
], GraphComponent);

var _a, _b, _c;
//# sourceMappingURL=graph.component.js.map

/***/ }),

/***/ "../../../../../src/app/visuals/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_visual_node_visual_component__ = __webpack_require__("../../../../../src/app/visuals/shared/node-visual/node-visual.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__link_visual_link_visual_component__ = __webpack_require__("../../../../../src/app/visuals/shared/link-visual/link-visual.component.ts");
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHARED_VISUALS; });




var SHARED_VISUALS = [
    __WEBPACK_IMPORTED_MODULE_0__node_visual_node_visual_component__["a" /* NodeVisualComponent */],
    __WEBPACK_IMPORTED_MODULE_1__link_visual_link_visual_component__["a" /* LinkVisualComponent */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/visuals/shared/link-visual/link-visual.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".link {\n    stroke-width: 0.25;\n    stroke: rgb(222,237,250);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/visuals/shared/link-visual/link-visual.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3__ = __webpack_require__("../../../../../src/app/d3/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkVisualComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LinkVisualComponent = (function () {
    function LinkVisualComponent() {
    }
    return LinkVisualComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])('linkVisual'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__d3__["e" /* Link */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__d3__["e" /* Link */]) === "function" && _a || Object)
], LinkVisualComponent.prototype, "link", void 0);
LinkVisualComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        // tslint:disable-next-line
        selector: '[linkVisual]',
        template: "\n    <svg:line\n        class=\"link\"\n        [attr.x1]=\"link.source.x\"\n        [attr.y1]=\"link.source.y\"\n        [attr.x2]=\"link.target.x\"\n        [attr.y2]=\"link.target.y\"\n    ></svg:line>\n  ",
        styles: [__webpack_require__("../../../../../src/app/visuals/shared/link-visual/link-visual.component.css")]
    })
], LinkVisualComponent);

var _a;
//# sourceMappingURL=link-visual.component.js.map

/***/ }),

/***/ "../../../../../src/app/visuals/shared/node-visual/node-visual.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".node {\n    cursor: pointer;\n    transition: stroke-width 0.1s ease-out,\n        fill 0.1s ease-out,\n        stroke 0.1s ease-out;\n\n    stroke: white;\n    stroke-width: 0.25;\n}\n\n.node-name {\n  font-family: 'Lato';\n  text-anchor: middle;\n  alignment-baseline: central;\n  font-weight: 300;\n  fill: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/visuals/shared/node-visual/node-visual.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3__ = __webpack_require__("../../../../../src/app/d3/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeVisualComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NodeVisualComponent = (function () {
    function NodeVisualComponent() {
    }
    return NodeVisualComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])('nodeVisual'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__d3__["c" /* Node */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__d3__["c" /* Node */]) === "function" && _a || Object)
], NodeVisualComponent.prototype, "node", void 0);
NodeVisualComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        // tslint:disable-next-line:component-selector
        selector: '[nodeVisual]',
        template: "\n    <svg:g [attr.transform]=\"'translate(' + node.x + ',' + node.y + ')'\">\n      <svg:circle\n          class=\"node\"\n          [attr.fill]=\"node.color\"\n          cx=\"0\"\n          cy=\"0\"\n          [attr.r]=\"node.r\">\n      </svg:circle>\n      <svg:text\n          class=\"node-name\"\n          [attr.font-size]=\"node.fontSize\">\n        {{node.id}}\n      </svg:text>\n    </svg:g>\n  ",
        styles: [__webpack_require__("../../../../../src/app/visuals/shared/node-visual/node-visual.component.css")]
    })
], NodeVisualComponent);

var _a;
//# sourceMappingURL=node-visual.component.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
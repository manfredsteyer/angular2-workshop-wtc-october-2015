var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var flug_service_1 = require('./services/flug-service');
var token_1 = require('./token');
var http_1 = require('angular2/http');
var angular2_2 = require('angular2/angular2');
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var flug_suchen_1 = require('./components/flug-suchen/flug-suchen');
var home_1 = require('./components/home/home');
var flug_edit_1 = require('./components/flug-edit/flug-edit');
var App = (function () {
    function App(location) {
        this.title = "Flug-Demo-App";
        this.location = location;
    }
    App.prototype.isActive = function (path) {
        return (this.location.path() == path);
    };
    App = __decorate([
        angular2_2.Component({
            selector: 'app'
        }),
        angular2_2.View({
            directives: [router_1.ROUTER_DIRECTIVES],
            templateUrl: 'app/app.html'
        }),
        router_1.RouteConfig([
            { path: '/', component: home_1.Home, as: 'Home' },
            { path: '/flug-suchen', component: flug_suchen_1.FlugSuchen, as: 'FlugSuchen' },
            { path: '/flug-edit/:id', component: flug_edit_1.FlugEdit, as: 'FlugEdit' }
        ]), 
        __metadata('design:paramtypes', [router_1.Location])
    ], App);
    return App;
})();
exports.App = App;
var provider = [
    angular2_1.FORM_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    angular2_1.provide(flug_service_1.FlugService, { useClass: flug_service_1.FlugService }),
    angular2_1.provide(token_1.BASE_URL, { useValue: 'http://www.angular.at' }),
    router_2.ROUTER_PROVIDERS,
    angular2_1.provide(router_2.LocationStrategy, { useClass: router_2.HashLocationStrategy }),
    router_1.Location
];
angular2_1.bootstrap(App, [provider]);
//# sourceMappingURL=app.js.map
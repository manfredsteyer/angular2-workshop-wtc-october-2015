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
// import {MY_DIRECTIVES} from './../registry';
var flug_service_1 = require('./../../services/flug-service');
var ort_pipe_1 = require('./../../pipes/ort-pipe');
var ort_validator_1 = require('./../../validation/ort-validator');
var show_error_1 = require('./../../validation/show-error');
var router_1 = require('angular2/router');
var FlugSuchen = (function () {
    function FlugSuchen(/*@Inject(FlugService)*/ flugService) {
        this.von = "Graz";
        this.nach = "Hamburg";
        this.fluege = [];
        this.flugService = flugService;
    }
    FlugSuchen.prototype.doStuff = function () {
        return "stuff";
    };
    FlugSuchen.prototype.suchen = function () {
        var _this = this;
        this
            .flugService
            .find(this.von, this.nach)
            .subscribe(function (f) {
            _this.fluege = f;
        });
    };
    FlugSuchen.prototype.selectFlug = function (flug) {
        this.selectedFlug = flug;
    };
    FlugSuchen = __decorate([
        angular2_1.Component({
            selector: 'flug-suchen'
        }),
        angular2_1.View({
            templateUrl: 'app/components/flug-suchen/flug-suchen.html',
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, ort_validator_1.OrtValidator, show_error_1.ShowError],
            pipes: [ort_pipe_1.OrtPipe]
        }), 
        __metadata('design:paramtypes', [flug_service_1.FlugService])
    ], FlugSuchen);
    return FlugSuchen;
})();
exports.FlugSuchen = FlugSuchen;
//# sourceMappingURL=flug-suchen.js.map
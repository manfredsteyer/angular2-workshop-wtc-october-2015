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
var angular2_2 = require('angular2/angular2');
var ort_validator_1 = require('./../../validation/ort-validator');
// import {MY_DIRECTIVES} from './../registry';
var flug_service_1 = require('./../../services/flug-service');
var ort_pipe_1 = require('./../../pipes/ort-pipe');
var FlugSuchen2 = (function () {
    function FlugSuchen2(
        /*@Inject(FlugService)*/ flugService, fb) {
        this.fluege = [];
        this.flugService = flugService;
        this.filter = fb.group({
            von: ['Graz',
                angular2_2.Validators.compose([
                    angular2_2.Validators.required,
                    ort_validator_1.OrtValidator.validate,
                    /*(control):any => {
                        if (this.filter.value.von == this.filter.value.nach) {
                            return {
                                city: true
                            }
                            return {}
                        }
                    },*/
                    angular2_2.Validators.minLength(2)])],
            nach: ['Hamburg',
                angular2_2.Validators.compose([
                    angular2_2.Validators.required,
                    ort_validator_1.OrtValidator.validate,
                    angular2_2.Validators.minLength(2)])]
        });
    }
    FlugSuchen2.prototype.doStuff = function () {
        return "stuff";
    };
    FlugSuchen2.prototype.suchen = function () {
        var _this = this;
        var filter = this.filter.value;
        this
            .flugService
            .find(filter.von, filter.nach)
            .subscribe(function (f) {
            _this.fluege = f;
        });
    };
    FlugSuchen2.prototype.selectFlug = function (flug) {
        this.selectedFlug = flug;
    };
    FlugSuchen2 = __decorate([
        angular2_1.Component({
            selector: 'flug-suchen'
        }),
        angular2_1.View({
            templateUrl: 'app/components/flug-suchen2/flug-suchen.html',
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES],
            pipes: [ort_pipe_1.OrtPipe]
        }), 
        __metadata('design:paramtypes', [flug_service_1.FlugService, angular2_2.FormBuilder])
    ], FlugSuchen2);
    return FlugSuchen2;
})();
exports.FlugSuchen2 = FlugSuchen2;
//# sourceMappingURL=flug-suchen2.js.map
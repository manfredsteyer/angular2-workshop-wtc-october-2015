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
var OrtValidator = (function () {
    function OrtValidator() {
    }
    OrtValidator.validate = function (control) {
        var cities = ['Graz', 'Hamburg', 'München', 'Rom'];
        if (!control.value)
            return {};
        if (cities.find(function (c) { return c == control.value; }))
            return {};
        return {
            city: true
        };
    };
    OrtValidator = __decorate([
        angular2_1.Directive({
            selector: '[city]',
            bindings: [new angular2_1.Provider(angular2_1.NG_VALIDATORS, { useValue: OrtValidator.validate, multi: true })]
        }), 
        __metadata('design:paramtypes', [])
    ], OrtValidator);
    return OrtValidator;
})();
exports.OrtValidator = OrtValidator;
//# sourceMappingURL=ort-validator.js.map
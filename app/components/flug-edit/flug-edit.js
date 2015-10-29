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
var router_1 = require('angular2/router');
var edit_form_1 = require('../edit-form/edit-form');
var flug_service_1 = require('../../services/flug-service');
var FlugEdit = (function () {
    function FlugEdit(params, flugService) {
        var _this = this;
        this.info = "Hier könnte auch Ihr Flug stehen!";
        this.id = params.get('id');
        this.flugService = flugService;
        this.flugService
            .findById(this.id)
            .subscribe(function (f) {
            _this.flug = f;
        });
    }
    FlugEdit.prototype.save = function () {
        var _this = this;
        this.flugService.save(this.flug).subscribe(function (f) {
            _this.message = "Gespeichert!!";
        });
    };
    FlugEdit = __decorate([
        angular2_1.Component({}),
        angular2_1.View({
            templateUrl: 'app/components/flug-edit/flug-edit.html',
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, edit_form_1.EditForm]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams, flug_service_1.FlugService])
    ], FlugEdit);
    return FlugEdit;
})();
exports.FlugEdit = FlugEdit;
//# sourceMappingURL=flug-edit.js.map
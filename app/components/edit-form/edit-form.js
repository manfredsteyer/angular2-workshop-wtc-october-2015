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
// <edit-form [data]="flug" [title]="Flüge editieren" (save)="save()"> 
var EditForm = (function () {
    function EditForm() {
        this.save = new angular2_1.EventEmitter();
    }
    EditForm.prototype.innerSave = function () {
        this.save.next(this.data);
    };
    __decorate([
        angular2_2.Input(), 
        __metadata('design:type', Object)
    ], EditForm.prototype, "data");
    __decorate([
        angular2_2.Input(), 
        __metadata('design:type', String)
    ], EditForm.prototype, "title");
    __decorate([
        angular2_2.Output(), 
        __metadata('design:type', Object)
    ], EditForm.prototype, "save");
    EditForm = __decorate([
        angular2_1.Component({
            selector: 'edit-form'
        }),
        angular2_1.View({
            templateUrl: 'app/components/edit-form/edit-form.html',
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], EditForm);
    return EditForm;
})();
exports.EditForm = EditForm;
//# sourceMappingURL=edit-form.js.map
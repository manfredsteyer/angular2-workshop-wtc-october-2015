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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
/*
<show-error
   control="von"
   [errors]="['required']"></show-error>
*/
var ShowError = (function () {
    function ShowError(formDir) {
        this.formDir = formDir;
    }
    Object.defineProperty(ShowError.prototype, "errorMessage", {
        get: function () {
            var control = this.formDir.form.find(this.controlPath);
            if (control != null && control.touched) {
                for (var i = 0; i < this.errorTypes.length; ++i) {
                    if (control.hasError(this.errorTypes[i])) {
                        return this._errorMessage(this.errorTypes[i]);
                    }
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    ShowError.prototype._errorMessage = function (code) {
        var config = {
            'required': 'Pflichtfeld!',
            'city': 'Unbekannte Stadt!',
            'minlength': 'Zu kurz',
            'maxlength': 'Zu lang'
        };
        return config[code];
    };
    ShowError = __decorate([
        angular2_1.Component({
            selector: 'show-error',
            inputs: ['controlPath: control', 'errorTypes: errors'] }),
        angular2_1.View({
            template: " \n    <span *ng-if=\"errorMessage !== null\">{{errorMessage}}</span> \n  ",
            directives: [angular2_1.CORE_DIRECTIVES]
        }),
        __param(0, angular2_1.Host()), 
        __metadata('design:paramtypes', [angular2_1.NgForm])
    ], ShowError);
    return ShowError;
})();
exports.ShowError = ShowError;
//# sourceMappingURL=show-error.js.map
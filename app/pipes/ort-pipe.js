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
var OrtPipe = (function () {
    function OrtPipe() {
    }
    OrtPipe.prototype.transform = function (value, args) {
        var fmt = args[0];
        switch (value) {
            case "Graz":
                if (fmt == 'long')
                    return "Graz Thalerhof";
                if (fmt == 'short')
                    return "GRZ";
            case "Hamburg":
                if (fmt == 'long')
                    return "Hamburg Airport";
                if (fmt == 'short')
                    return "HAM";
            case "München":
                if (fmt == 'long')
                    return "München Franz-Joseph-Strauss";
                if (fmt == 'short')
                    return "MUC";
        }
        return "ROM";
    };
    OrtPipe = __decorate([
        angular2_1.Pipe({ name: 'ort' }), 
        __metadata('design:paramtypes', [])
    ], OrtPipe);
    return OrtPipe;
})();
exports.OrtPipe = OrtPipe;
//# sourceMappingURL=ort-pipe.js.map
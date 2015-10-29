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
var token_1 = require('../token');
var http_1 = require('angular2/http');
var FlugService = (function () {
    function FlugService(baseUrl, http) {
        this.baseUrl = baseUrl;
        this.http = http;
    }
    FlugService.prototype.findById = function (id) {
        var url = this.baseUrl + "/api/flug";
        var params = new http_1.URLSearchParams();
        params.append('flugNummer', id);
        return this
            .http
            .get(url, { search: params })
            .map(function (r) { return r.json(); });
    };
    FlugService.prototype.save = function (flug) {
        var url = this.baseUrl + "/api/flug";
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'text/json');
        return this
            .http
            .post(url, JSON.stringify(flug), { headers: headers })
            .map(function (r) { return r.json(); });
    };
    FlugService.prototype.find = function (von, nach) {
        /*
        var url = this.baseUrl + "/api/flug"
                + "?abflugOrt="
                + encodeURIComponent(von)
                + "&zielOrt="
                + encodeURIComponent(nach);

        return fetch(url).then(r => r.json());
        */
        var url = this.baseUrl + "/api/flug";
        var params = new http_1.URLSearchParams();
        params.append('abflugOrt', von);
        params.append('zielOrt', nach);
        return this
            .http
            .get(url, { search: params })
            .map(function (r) { return r.json(); });
    };
    FlugService = __decorate([
        angular2_1.Injectable(),
        __param(0, angular2_1.Inject(token_1.BASE_URL)), 
        __metadata('design:paramtypes', [Object, http_1.Http])
    ], FlugService);
    return FlugService;
})();
exports.FlugService = FlugService;
//# sourceMappingURL=flug-service.js.map
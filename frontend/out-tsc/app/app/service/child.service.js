var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var ChildService = /** @class */ (function () {
    function ChildService() {
    }
    ChildService.prototype.getChildren = function () {
        return this.http.get('/api/child/list');
    };
    ChildService.prototype.getChild = function (id) {
        return this.http.get('/api/child/' + id + '/get');
    };
    ChildService.prototype.createChild = function (child) {
        return this.http.post('/api/child/create', child);
    };
    ChildService.prototype.updateChild = function (child) {
        return this.http.put('/api/child/' + child.id + '/update', child);
    };
    ChildService.prototype.deleteChild = function (child) {
        return this.http.delete('/api/child/' + child.id + '/delete', child);
    };
    ChildService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ChildService);
    return ChildService;
}());
export { ChildService };
//# sourceMappingURL=child.service.js.map
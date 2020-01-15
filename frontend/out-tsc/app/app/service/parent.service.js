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
import { HttpClient } from '@angular/common/http';
var ParentService = /** @class */ (function () {
    function ParentService(http) {
        this.http = http;
    }
    ParentService.prototype.getParents = function () {
        return this.http.get('/api/parent/list');
    };
    ParentService.prototype.getParent = function (id) {
        return this.http.get('/api/parent/' + id + '/get');
    };
    ParentService.prototype.createParent = function (parent) {
        return this.http.post('/api/parent/create', parent);
    };
    ParentService.prototype.updateParent = function (parent) {
        console.log(parent.id);
        return this.http.put('/api/parent/' + parent.id + '/update', parent);
    };
    ParentService.prototype.deleteParent = function (parent) {
        return this.http.delete('/api/parent/' + parent.id + '/delete', parent);
    };
    ParentService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ParentService);
    return ParentService;
}());
export { ParentService };
//# sourceMappingURL=parent.service.js.map
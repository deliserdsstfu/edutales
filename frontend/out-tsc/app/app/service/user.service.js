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
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
var UserService = /** @class */ (function () {
    function UserService(http, router, jwtHelperService) {
        this.http = http;
        this.router = router;
        this.jwtHelperService = jwtHelperService;
        this.accessTokenLocalStorageKey = 'access_token';
        this.isLoggedIn = new BehaviorSubject(false);
        var token = localStorage.getItem(this.accessTokenLocalStorageKey);
        if (token) {
            console.log('Token expiration date: ' + this.jwtHelperService.getTokenExpirationDate(token));
            var tokenValid = !this.jwtHelperService.isTokenExpired(token);
            this.isLoggedIn.next(tokenValid);
        }
    }
    UserService.prototype.login = function (userData) {
        var _this = this;
        this.http.post('/api/api-token-auth/', userData)
            .subscribe(function (res) {
            _this.isLoggedIn.next(true);
            localStorage.setItem('access_token', res.token);
            _this.router.navigate(['/user-profile']);
        }, function () {
            alert('wrong username or password');
        });
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem(this.accessTokenLocalStorageKey);
        this.isLoggedIn.next(false);
        this.router.navigate(['/signup']);
    };
    UserService.prototype.hasPermission = function (permission) {
        var token = localStorage.getItem(this.accessTokenLocalStorageKey);
        var decodedToken = this.jwtHelperService.decodeToken(token);
        var permissions = decodedToken.permissions;
        return permission in permissions;
    };
    UserService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, Router, JwtHelperService])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map
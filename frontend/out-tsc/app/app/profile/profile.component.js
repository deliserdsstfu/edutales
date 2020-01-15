var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ParentService } from '../service/parent.service';
import { UserService } from '../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(fb, http, route, router, parentService, userService) {
        this.fb = fb;
        this.http = http;
        this.route = route;
        this.router = router;
        this.parentService = parentService;
        this.userService = userService;
        this.test = new Date();
        this.displayedColumns = ['user', 'year_of_birth', 'region', 'children'];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentFormGroup = this.fb.group({
            'id': [null],
            'first_name': ['', Validators.required],
            'last_name': ['', Validators.required],
            'region': [null],
            'year_of_birth': [1, Validators.max(2000)],
            'children': [null]
        });
        var id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.http.get('/api/parent/' + id + '/get')
                .subscribe(function (response) {
                _this.parentFormGroup.patchValue(response, { emitEvent: false });
            });
        }
        this.parentService.getParents()
            .subscribe(function (response) {
            _this.parents = response;
        });
    };
    ProfileComponent.prototype.deleteParent = function (parent) {
        var _this = this;
        this.parentService.deleteParent(parent)
            .subscribe(function () {
            _this.ngOnInit();
        });
    };
    ProfileComponent.prototype.createParent = function () {
        var _this = this;
        var parent = this.parentFormGroup.value;
        if (parent.id) {
            this.parentService.updateParent(parent)
                .subscribe(function () {
                console.log(parent.id);
                _this.router.navigate(['/user-profile/' + parent.id]);
            });
        }
    };
    ProfileComponent = __decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.scss']
        }),
        __metadata("design:paramtypes", [FormBuilder, HttpClient, ActivatedRoute,
            Router, ParentService, UserService])
    ], ProfileComponent);
    return ProfileComponent;
}());
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map
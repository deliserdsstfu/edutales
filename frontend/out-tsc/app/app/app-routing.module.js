var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ChildFormComponent } from './child-form/child-form.component';
import { MapDestinationComponent } from './map-destination/map-destination.component';
import { MapRegionComponent } from './map-region/map-region.component';
import { MapWorldComponent } from './map-world/map-world.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from './auth.guard';
var routes = [
    { path: 'parent-form', component: ParentFormComponent, canActivate: [AuthGuard] },
    { path: 'child-form', component: ChildFormComponent, canActivate: [AuthGuard] },
    { path: 'map-destination', component: MapDestinationComponent, canActivate: [AuthGuard] },
    { path: 'map-region', component: MapRegionComponent, canActivate: [AuthGuard] },
    { path: 'map-world', component: MapWorldComponent, canActivate: [AuthGuard] },
    { path: 'home', component: ComponentsComponent },
    { path: 'user-profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'user-profile/:id', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'signup', component: SignupComponent },
    { path: 'landing', component: LandingComponent, canActivate: [AuthGuard] },
    { path: 'nucleoicons', component: NucleoiconsComponent, canActivate: [AuthGuard] },
    { path: 'about-us', component: AboutUsComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes),
                CommonModule,
                BrowserModule,
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParentFormComponent} from './parent-form/parent-form.component';
import {ComponentsComponent} from './components/components.component';
import {ProfileComponent} from './profile/profile.component';
import {SignupComponent} from './signup/signup.component';
import {LandingComponent} from './examples/landing/landing.component';
import {NucleoiconsComponent} from './components/nucleoicons/nucleoicons.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {ChildFormComponent} from './child-form/child-form.component';
import {MapDestinationComponent} from './map-destination/map-destination.component';
import {MapRegionComponent} from './map-region/map-region.component';
import {MapWorldComponent} from './map-world/map-world.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {AuthGuard} from './auth.guard';
import {ParentResolver} from './resolver/parent.resolver';
import {HomeComponent} from './home/home.component';
import {ChildListComponent} from './child-list/child-list.component';

const routes: Routes = [
  { path: 'parent-form', component: ParentFormComponent, canActivate: [AuthGuard]},
  { path: 'child-form', component: ChildFormComponent, canActivate: [AuthGuard]},
  { path: 'child-list', component: ChildListComponent, canActivate: [AuthGuard]},
  { path: 'map-destination', component: MapDestinationComponent, canActivate: [AuthGuard]},
  { path: 'map-region', component: MapRegionComponent, canActivate: [AuthGuard]},
  { path: 'map-world', component: MapWorldComponent, canActivate: [AuthGuard]},
  { path: 'home1',             component: ComponentsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user-profile',     component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'user-profile/:id', component: ParentFormComponent, canActivate: [AuthGuard], resolve: {
      parent: ParentResolver
    } },
  { path: 'signup',           component: SignupComponent },
  { path: 'landing',          component: LandingComponent, canActivate: [AuthGuard] },
  { path: 'nucleoicons',      component: NucleoiconsComponent, canActivate: [AuthGuard] },
  { path: 'about-us', component: AboutUsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

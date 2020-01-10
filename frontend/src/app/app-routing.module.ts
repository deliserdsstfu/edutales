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

const routes: Routes = [
  { path: 'parent-form', component: ParentFormComponent},
  { path: 'child-form', component: ChildFormComponent},
  { path: 'map-destination', component: MapDestinationComponent},
  { path: 'map-region', component: MapRegionComponent},
  { path: 'map-world', component: MapWorldComponent},
  { path: 'home',             component: ComponentsComponent },
  { path: 'user-profile',     component: ProfileComponent },
  { path: 'signup',           component: SignupComponent },
  { path: 'landing',          component: LandingComponent },
  { path: 'nucleoicons',      component: NucleoiconsComponent },
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



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
import {RegionmapComponent} from './regionmap/regionmap.component';
import {LogoutComponent} from './logout/logout.component';
import {DestinationmapComponent} from './destinationmap/destinationmap.component';
import {WorldmapComponent} from './worldmap/worldmap.component';

const routes: Routes = [
  //{path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'parent-form',    component: ParentFormComponent},
  { path: 'child-form',     component: ChildFormComponent},
  { path: 'worldmap',       component: WorldmapComponent},
  { path: 'regionmap',      component: RegionmapComponent},
  { path: 'destinationmap', component: DestinationmapComponent},
  { path: 'logout',         component: LogoutComponent},
  { path: 'parent-form',    component: ParentFormComponent},
  { path: 'home',           component: ComponentsComponent }, 
  { path: 'profile',        component: ProfileComponent },
  { path: 'signup',         component: SignupComponent },
  { path: 'landing',        component: LandingComponent },
  { path: 'nucleoicons',    component: NucleoiconsComponent },
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

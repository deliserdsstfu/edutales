import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParentFormComponent} from './parent-form/parent-form.component';
import {ComponentsComponent} from './components/components.component';
import {ProfileComponent} from './examples/profile/profile.component';
import {SignupComponent} from './examples/signup/signup.component';
import {LandingComponent} from './examples/landing/landing.component';
import {NucleoiconsComponent} from './components/nucleoicons/nucleoicons.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

const routes: Routes = [
<<<<<<< HEAD
  { path: 'parent-form',    component: ParentFormComponent},
  { path: 'child-form',     component: ChildFormComponent},
  { path: 'worldmap',       component: WorldmapComponent},
  { path: 'regionmap',      component: RegionmapComponent},
  { path: 'destinationmap', component: DestinationmapComponent},
  { path: 'logout',         component: LogoutComponent},
  { path: 'parent-form',    component: ParentFormComponent},
  { path: 'home',           component: ComponentsComponent },
  { path: 'user-profile',   component: ProfileComponent },
  { path: 'signup',         component: SignupComponent },
  { path: 'landing',        component: LandingComponent },
  { path: 'nucleoicons',    component: NucleoiconsComponent },
=======
  { path: 'parent-form', component: ParentFormComponent},
  { path: 'home',             component: ComponentsComponent },
  { path: 'user-profile',     component: ProfileComponent },
  { path: 'signup',           component: SignupComponent },
  { path: 'landing',          component: LandingComponent },
  { path: 'nucleoicons',      component: NucleoiconsComponent },
>>>>>>> parent of 073a922... Merge remote-tracking branch 'origin/clemens' into claudia
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



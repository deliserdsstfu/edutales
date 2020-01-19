import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParentListComponent} from './parent-list/parent-list.component';
import {ParentFormComponent} from './parent-form/parent-form.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {ChildListComponent} from './child-list/child-list.component';
import {ChildFormComponent} from './child-form/child-form.component';
import {ChildOptionsResolver} from './resolver/child-options.resolver';
import {ParentResolver} from './resolver/parent.resolver';
import {ChildResolver} from './resolver/child.resolver';
import {WorldMapComponent} from './world-map/world-map.component';


const routes: Routes = [
  { path: 'parent-list', component: ParentListComponent, canActivate: [AuthGuard] },
  { path: 'child-list', component: ChildListComponent, canActivate: [AuthGuard] },
  { path: 'world-map', component: WorldMapComponent, canActivate: [AuthGuard] },
  { path: 'parent-form', component: ParentFormComponent, canActivate: [AuthGuard], resolve: {
    childOptions: ChildOptionsResolver,
    } },
  { path: 'child-form', component: ChildFormComponent, canActivate: [AuthGuard] },
  { path: 'parent-form/:id', component: ParentFormComponent, canActivate: [AuthGuard], resolve: {
      childOptions: ChildOptionsResolver,  parent: ParentResolver
    } },
  { path: 'child-form/:id', component: ChildFormComponent, canActivate: [AuthGuard], resolve: {
    child: ChildResolver
    } },
  { path: '', redirectTo: 'parent-list', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

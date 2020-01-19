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
import {TaleFormComponent} from './tale-form/tale-form.component';
import {TaleListComponent} from './tale-list/tale-list.component';
import {TaleResolver} from './resolver/tale.resolver';
import {RewardListComponent} from './reward-list/reward-list.component';
import {RewardFormComponent} from './reward-form/reward-form.component';
import {RewardResolver} from './resolver/reward.resolver';


const routes: Routes = [
  { path: 'parent-list', component: ParentListComponent, canActivate: [AuthGuard] },
  { path: 'child-list', component: ChildListComponent, canActivate: [AuthGuard] },
  { path: 'world-map', component: WorldMapComponent, canActivate: [AuthGuard] },
  { path: 'reward-list', component: RewardListComponent, canActivate: [AuthGuard] },
  { path: 'parent-form', component: ParentFormComponent, canActivate: [AuthGuard], resolve: {
    childOptions: ChildOptionsResolver,
    } },
  { path: 'reward-form', component: RewardFormComponent, canActivate: [AuthGuard] },
  { path: 'child-form', component: ChildFormComponent, canActivate: [AuthGuard] },
  { path: 'parent-form/:id', component: ParentFormComponent, canActivate: [AuthGuard], resolve: {
      childOptions: ChildOptionsResolver,  parent: ParentResolver
    } },
  { path: 'child-form/:id', component: ChildFormComponent, canActivate: [AuthGuard], resolve: {
    child: ChildResolver
    } },
  { path: 'reward-form/:id', component: RewardFormComponent, canActivate: [AuthGuard], resolve: {
      reward: RewardResolver
    } },
  { path: '', redirectTo: 'parent-list', pathMatch: 'full' },
  { path: 'tale-list', component: TaleListComponent, canActivate: [AuthGuard] },
  { path: 'tale-form', component: TaleFormComponent, canActivate: [AuthGuard] },
  { path: 'tale-form/:id', component: TaleFormComponent, canActivate: [AuthGuard], resolve: {
      tale: TaleResolver
    }},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
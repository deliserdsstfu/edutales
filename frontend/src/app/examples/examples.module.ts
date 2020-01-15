import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import {SignupComponent} from '../signup/signup.component';
import {ProfileComponent} from '../profile/profile.component';
import {AppRoutingModule} from '../app-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        AppRoutingModule,
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent
    ]
})
export class ExamplesModule { }

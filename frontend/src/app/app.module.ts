import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import {HttpClientModule} from '@angular/common/http';
import { ParentFormComponent } from './parent-form/parent-form.component';
import {AppRoutingModule} from './app-routing.module';
<<<<<<< HEAD
import { WorldmapComponent } from './worldmap/worldmap.component';
import { RegionmapComponent } from './regionmap/regionmap.component';
import { DestinationmapComponent } from './destinationmap/destinationmap.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { ChildFormComponent } from './child-form/child-form.component';
import {SignupComponent} from './examples/signup/signup.component';
import {LandingComponent} from './examples/landing/landing.component';
=======
>>>>>>> parent of 073a922... Merge remote-tracking branch 'origin/clemens' into claudia


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
<<<<<<< HEAD
    ParentFormComponent,
    WorldmapComponent,
    RegionmapComponent,
    DestinationmapComponent,
    ProfileComponent,
    LogoutComponent,
    ChildFormComponent,
    SignupComponent,
    LandingComponent,
=======
    ParentFormComponent
>>>>>>> parent of 073a922... Merge remote-tracking branch 'origin/clemens' into claudia
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

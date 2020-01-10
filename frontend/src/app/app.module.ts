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
import { ChildFormComponent } from './child-form/child-form.component';
import { MapWorldComponent } from './map-world/map-world.component';
import { MapRegionComponent } from './map-region/map-region.component';
import { MapDestinationComponent } from './map-destination/map-destination.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ParentFormComponent,
    ChildFormComponent,
    MapWorldComponent,
    MapRegionComponent,
    MapDestinationComponent,
    LogoutComponent,
    AboutUsComponent
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

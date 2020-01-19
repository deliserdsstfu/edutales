import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ParentListComponent } from './parent-list/parent-list.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule, MatNativeDateModule,
  MatSelectModule, MatSliderModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {DateComponent} from './date/date/date.component';
import {BarRatingModule} from 'ngx-bar-rating';
import {JwtModule} from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ChildListComponent } from './child-list/child-list.component';
import { ChildFormComponent } from './child-form/child-form.component';
import { AgmCoreModule } from '@agm/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {HttperrorInterceptor} from './httperror.interceptor';
import { WorldMapComponent } from './world-map/world-map.component';
import { RewardFormComponent } from './reward-form/reward-form.component';
import { RewardListComponent } from './reward-list/reward-list.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    ParentListComponent,
    ParentFormComponent,
    DateComponent,
    LoginComponent,
    LogoutComponent,
    ChildListComponent,
    ChildFormComponent,
    WorldMapComponent,
    RewardFormComponent,
    RewardListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQULObsqi9Ta67z1coKGpT2RqOlmJ42Q8'
    }),
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    BarRatingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:4200']
      }
    }),
    MatSliderModule,
    MatSnackBarModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttperrorInterceptor,
    multi: true,
    deps: [MatSnackBar]
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

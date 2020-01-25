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
  MatAutocompleteModule,
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule, MatNativeDateModule, MatProgressBarModule, MatRadioModule,
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
import { TaleFormComponent } from './tale-form/tale-form.component';
import { TaleListComponent } from './tale-list/tale-list.component';
import { RewardFormComponent } from './reward-form/reward-form.component';
import { RewardListComponent } from './reward-list/reward-list.component';
import { HistoryFormComponent } from './history-form/history-form.component';
import { HistoryListComponent } from './history-list/history-list.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import {TaleQuizComponent} from './tale-quiz/tale-quiz.component';
import { HistoryQuizComponent } from './history-quiz/history-quiz.component';
import {MediainputComponent} from './mediainput/mediainput.component';
import {FileUploadModule} from 'ng2-file-upload';
import { ChildProfileComponent } from './child-profile/child-profile.component';
import {BackButtonDisableModule} from 'angular-disable-browser-back-button';
import { RewardExportComponent } from './reward-export/reward-export.component';

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
    TaleFormComponent,
    TaleListComponent,
    RewardFormComponent,
    RewardListComponent,
    HistoryFormComponent,
    HistoryListComponent,
    QuizFormComponent,
    QuizListComponent,
    TaleQuizComponent,
    HistoryQuizComponent,
    MediainputComponent,
    ChildProfileComponent
    RewardExportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FileUploadModule,
    ReactiveFormsModule,
    BackButtonDisableModule.forRoot(),
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSKOJGEKdNYe_Et8g3CC7rrJnPo6ff9qc'
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
    MatAutocompleteModule,
    MatRadioModule,
    MatProgressBarModule,
    MatDividerModule,
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

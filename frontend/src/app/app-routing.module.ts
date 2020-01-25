import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
import {HistoryFormComponent} from './history-form/history-form.component';
import {HistoryResolver} from './resolver/history.resolver';
import {HistoryListComponent} from './history-list/history-list.component';
import {QuizFormComponent} from './quiz-form/quiz-form.component';
import {QuizResolver} from './resolver/quiz.resolver';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {TaleQuizComponent} from './tale-quiz/tale-quiz.component';
import {QuizOptionsResolver} from './resolver/quiz-options.resolver';
import {TaleQuizResolver} from './resolver/taleQuiz.resolver';
import {HistoryQuizComponent} from './history-quiz/history-quiz.component';
import {TaleOptionsResolver} from './resolver/tale-options.resolver';
import {HistoryOptionsResolver} from './resolver/history-options.resolver';
import {LanguageOptionsResolver} from './resolver/language-options.resolver';
import {ChildProfileComponent} from './child-profile/child-profile.component';
import {RewardExportComponent} from './reward-export/reward-export.component';
import {WelcomeComponent} from './welcome/welcome.component';

const routes: Routes = [
  { path: 'parent-list', component: ParentListComponent, canActivate: [AuthGuard] },
  { path: 'child-list/:id', component: ChildListComponent, canActivate: [AuthGuard] },
  { path: 'world-map/:id', component: WorldMapComponent, canActivate: [AuthGuard] },
  { path: 'reward-list', component: RewardListComponent, canActivate: [AuthGuard] },
  { path: 'history-list', component: HistoryListComponent, canActivate: [AuthGuard] },
  { path: 'parent-form',
    component: ParentFormComponent,
    canActivate: [AuthGuard],
    resolve: {
    childrenOptions: ChildOptionsResolver,
    languageOptions: LanguageOptionsResolver,
    } },
  { path: 'reward-form',
    component: RewardFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      historyOptions: HistoryOptionsResolver,
      taleOptions: TaleOptionsResolver,
    }},
  { path: 'history-form',
    component: HistoryFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      quizOptions: QuizOptionsResolver
    }
  },
  { path: 'child-profile/:id', component: ChildProfileComponent, canActivate: [AuthGuard]},
  {path: 'child-form', component: ChildFormComponent, canActivate: [AuthGuard]},
  {
    path: 'parent-form/:id',
    component: ParentFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      childrenOptions: ChildOptionsResolver,
      languageOptions: LanguageOptionsResolver,
      parent: ParentResolver
    }
  },
  {
    path: 'child-form/:id',
    component: ChildFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      child: ChildResolver
    }
  },
  {
    path: 'reward-form/:id',
    component: RewardFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      historyOptions: HistoryOptionsResolver,
      taleOptions: TaleOptionsResolver,
      reward: RewardResolver
    }
  },
  {
    path: 'reward-export/:id', component: RewardExportComponent, canActivate: [AuthGuard]},
  {
    path: 'history-form/:id',
    component: HistoryFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      history: HistoryResolver,
      quizOptions: QuizOptionsResolver
    }
  },
  {path: '', redirectTo: 'parent-list', pathMatch: 'full'},
  {path: 'tale-list', component: TaleListComponent, canActivate: [AuthGuard]},
  {
    path: 'tale-form',
    component: TaleFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      quizOptions: QuizOptionsResolver
    }
  },
  {
    path: 'tale-form/:id',
    component: TaleFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      tale: TaleResolver,
      quizOptions: QuizOptionsResolver
    }
  },
  {path: 'quiz-list', component: QuizListComponent, canActivate: [AuthGuard]},
  {
    path: 'tale-quiz/:id', component: TaleQuizComponent, canActivate: [AuthGuard], resolve: {
      taleQuizResolver: TaleQuizResolver
    }
  },
  {
    path: 'history-quiz/:id', component: HistoryQuizComponent, canActivate: [AuthGuard], resolve: {
      taleQuizResolver: TaleQuizResolver
    }
  },
  {path: 'quiz-form', component: QuizFormComponent, canActivate: [AuthGuard]},
  {
    path: 'quiz-form/:id', component: QuizFormComponent, canActivate: [AuthGuard], resolve: {
      quiz: QuizResolver
    }
  },
  {path: '', redirectTo: 'parent-list', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

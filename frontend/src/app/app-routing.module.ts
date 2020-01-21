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
import {QuizFormComponent} from './quiz-form/quiz-form.component';
import {QuizResolver} from './resolver/quiz.resolver';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {TaleQuizComponent} from './tale-quiz/tale-quiz.component';
import {AnswerOptionsResolver} from './resolver/answer-options.resolver';
import {QuizOptionsResolver} from './resolver/quiz-options.resolver';
import {AnswerFormComponent} from './answer-form/answer-form.component';
import {AnswerResolver} from './resolver/answer.resolver';
import {AnswerListComponent} from './answer-list/answer-list.component';



const routes: Routes = [
  { path: 'parent-list', component: ParentListComponent, canActivate: [AuthGuard] },
  { path: 'child-list/:id', component: ChildListComponent, canActivate: [AuthGuard] },
  { path: 'world-map', component: WorldMapComponent, canActivate: [AuthGuard] },
  { path: 'child-form', component: ChildFormComponent, canActivate: [AuthGuard] },
  { path: 'answer-form', component: AnswerFormComponent, canActivate: [AuthGuard] },
  { path: 'answer-list', component: AnswerListComponent, canActivate: [AuthGuard] },
  { path: 'answer-form/:id', component: AnswerFormComponent, canActivate: [AuthGuard], resolve: {
    answer: AnswerResolver
    } },
  { path: 'parent-form', component: ParentFormComponent, canActivate: [AuthGuard], resolve: {
    childrenOptions: ChildOptionsResolver,
    } },
  { path: 'parent-form/:id', component: ParentFormComponent, canActivate: [AuthGuard], resolve: {
      childrenOptions: ChildOptionsResolver,  parent: ParentResolver
    } },
  { path: 'child-form/:id', component: ChildFormComponent, canActivate: [AuthGuard], resolve: {
    child: ChildResolver
    } },
  { path: 'tale-list', component: TaleListComponent, canActivate: [AuthGuard] },
  { path: 'tale-form', component: TaleFormComponent, canActivate: [AuthGuard] , resolve: {
      quizOptions: QuizOptionsResolver
    }},
  { path: 'tale-form/:id', component: TaleFormComponent, canActivate: [AuthGuard], resolve: {
      tale: TaleResolver, quizOptions: QuizOptionsResolver
    }},
  { path: 'quiz-list', component: QuizListComponent, canActivate: [AuthGuard] },
  { path: 'tale-quiz/:id', component: TaleQuizComponent, canActivate: [AuthGuard], resolve: {
      quizOptions: QuizOptionsResolver
    } },
  { path: 'quiz-form', component: QuizFormComponent, canActivate: [AuthGuard], resolve: {
      answerOptions: AnswerOptionsResolver
    } },
  { path: 'quiz-form/:id', component: QuizFormComponent, canActivate: [AuthGuard], resolve: {
      quiz: QuizResolver, answerOptions: AnswerOptionsResolver
    }},
  { path: '', redirectTo: 'parent-list', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizService} from '../service/quiz.service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {

  quizFormGroup;
  answerOptions;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
              private router: Router, private quizService: QuizService) {
  }

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.answerOptions = data.answerOptions;

    this.quizFormGroup = this.fb.group({
      'id': [null],
      'question': ['', Validators.required],
      'points': [null, Validators.required],
      'answer': [[]],
      'isTrue': false
    });

    if (data.quiz) {
      this.quizFormGroup.patchValue(data.quiz);
    }
  }

  createQuiz() {
    const quiz = this.quizFormGroup.value;
    if (quiz.id) {
      this.quizService.updateQuiz(quiz)
        .subscribe(() => {
          alert('updated successfully');
        });
    } else {
      this.quizService.createQuiz(quiz)
        .subscribe((response: any) => {
          this.router.navigate(['/quiz-form/' + response.id]);
        });
    }
  }

}

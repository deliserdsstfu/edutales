import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {AnswerService} from '../service/answer.service';
import {GameService} from '../service/game.service';
import {ParentService} from '../service/parent.service';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.scss']
})
export class AnswerFormComponent implements OnInit {

  answerFormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute, public answerService: AnswerService) {
  }


  ngOnInit() {
    const data = this.route.snapshot.data;
    this.answerFormGroup = this.fb.group({
      id: [null],
      answer: [''],
      isTrue: false
    });

    if (data.answer) {
      this.answerFormGroup.patchValue(data.answer);
    }
  }
  createAnswer() {
    const answer = this.answerFormGroup.value;
    if (answer.id) {
      this.answerService.updateAnswer(answer)
        .subscribe(() => {
          alert('updated successfully');
        });
    } else {
      this.answerService.createAnswer(answer)
        .subscribe((response: any) => {
          this.router.navigate(['/answer-form/' + response.id]);
        });
    }
  }


}

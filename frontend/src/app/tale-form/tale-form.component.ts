import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {TaleService} from '../service/tale.service';
import {TypeService} from '../service/type.service';

@Component({
  selector: 'app-tale-form',
  templateUrl: './tale-form.component.html',
  styleUrls: ['./tale-form.component.scss']
})
export class TaleFormComponent implements OnInit {

  taleFormGroup;
  quizOptions;


  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute, public taleService: TaleService, public typeService: TypeService) { }

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.quizOptions = data.quizOptions;

    this.taleFormGroup = this.fb.group({
      id: [null],
      title: ['', Validators.required],
      type: [null],
      text: ['', Validators.required],
      quiz: [null]
    });

    if (data.tale) {
      this.taleFormGroup.patchValue(data.tale);
    }
  }

  createTale() {
    const tale = this.taleFormGroup.value;
    if (tale.id) {
      this.taleService.updateTale(tale)
        .subscribe(() => {
          alert('updated successfully');
        });
    } else {
      this.taleService.createTale(tale)
        .subscribe((response: any) => {
          this.router.navigate(['/tale-form/' + response.id]);
        });
    }
  }
}

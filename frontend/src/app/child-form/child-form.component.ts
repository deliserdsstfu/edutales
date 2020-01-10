import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ChildService} from '../service/child.service';

@Component({
    selector: 'app-child-form',
    templateUrl: './child-form.component.html',
    styleUrls: ['./child-form.component.scss'],
})
export class ChildFormComponent implements OnInit {
    focus;
    childFormGroup;

    constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
                private router: Router, private childService: ChildService) {
    }

    ngOnInit() {
        this.childFormGroup = this.fb.group({
            'cid': [null],
            'user_name': ['', Validators.required],
            'year_of_birth': [1, Validators.max(2000)],
        });

        const cid = this.route.snapshot.paramMap.get('cid');
        if (cid) {
            this.http.get('/api/child/' + cid + '/get')
                .subscribe((response) => {
                    this.childFormGroup.patchValue(response, {emitEvent: false});
                });
        }
    }

    createChild() {
        const child = this.childFormGroup.value;
        this.childService.createChild(child)
            .subscribe(() => {
                this.router.navigate(['/login/']);
            });
    }
}

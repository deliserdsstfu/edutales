import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    test: Date = new Date();
    focus;
    focus1;
    loginFormGroup;
    constructor(private fb: FormBuilder, private userService: UserService) { }

    ngOnInit() {
        this.loginFormGroup = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    login() {
        this.userService.login(this.loginFormGroup.value);
    }
}

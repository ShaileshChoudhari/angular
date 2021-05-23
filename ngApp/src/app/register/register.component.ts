import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    constructor(private _auth: AuthService,
        private _router: Router,
        private fb: FormBuilder) { }

        public emailPattern = '^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$';
    public registrationForm = this.fb.group({
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
    });

    get email() {
        return this.registrationForm.get('email');
    }

    get password() {
        return this.registrationForm.get('password');
    }

    ngOnInit() {
    }

    registerUser() {
        this._auth.registerUser(this.registrationForm)
            .subscribe(
                res => {
                    localStorage.setItem('token', res.token);
                    this._router.navigate(['/special']);
                },
                err => console.error(err)
            );
    }
}

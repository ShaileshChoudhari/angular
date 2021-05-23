import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    constructor(private _auth: AuthService,
        private _router: Router,
        private fb: FormBuilder) { }

    public emailPattern = '^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$';
    public loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
    });

    get email() {
        return this.loginForm.get('email');
    }

    get password() {
        return this.loginForm.get('password');
    }

    ngOnInit(): void {
    }

    loginUser() {
        this._auth.loginUser(this.loginForm)
            .subscribe(
                res => {
                    localStorage.setItem('token', res.token);
                    this._router.navigate(['/profile']);
                },
                err => console.error(err)
            );
    }
}

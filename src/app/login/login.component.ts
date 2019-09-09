import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm;
  onSubmit;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private user: UserService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.onSubmit = () => {
      if (this.loginForm.status === 'VALID') {
        const username = this.loginForm.get('username').value;
        const password = this.loginForm.get('password').value;
        this.user.login(username, password);

        // hit login API here
        this.snackBar.open('Invalid Credentials!', 'Dismiss');
      }
    };
  }
}

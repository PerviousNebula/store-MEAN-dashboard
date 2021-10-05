import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent implements OnInit {
  loginFg: FormGroup;

  constructor(
    private readonly router: Router,
  ) {
    this.loginFg = new FormGroup({
      email: new FormControl('arturo@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('123456', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    this.router.navigateByUrl('/');
  }

}

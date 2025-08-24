import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../auth/login-service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {
 
  loginForm!: FormGroup;
  private formBuilder = inject(FormBuilder);
  private router = inject(Router)
  private loginService = inject(LoginService)

   ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

    get username() {
    return this.loginForm.get('username');
  }

  login() {
    if(this.loginForm.invalid) return;

    const body = this.loginForm.getRawValue();
    this.router.navigateByUrl('employee-list');
    this.loginService.authLogin(body).subscribe({
      next: (result) => {
        // go to employee list
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}

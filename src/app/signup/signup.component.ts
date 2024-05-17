import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get signupControl() {
    return this.signUpForm.controls;
  }
  handlesignUp() {
    console.log(this.signUpForm.controls);
    const { firstName, lastName, email, password } = this.signUpForm.value;
    this.userService
      .signupApi({
        userFirstName: 'firstName',
        userLastName: 'lastName',
        userEmail: 'email',
        userPassword: 'password',
      })
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
  }
}

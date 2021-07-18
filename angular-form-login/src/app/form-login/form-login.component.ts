import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  hide = true;
  formLogin: FormGroup | undefined;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]]

    })
  }

  submit() {
    const data =  this.formLogin?.value;
    console.log(data);
  }

  getErrorMessageMail() {
    if (this.email?.hasError('required')) {
      return "You must enter a value";
    }
    return this.email?.hasError('email') ? 'Not a valid email' : '';
  }

  // @ts-ignore
  getErrorMessagePassword(){
    if (this.password?.hasError('required')){
      return "You must fill this field"
    } else if (this.password?.hasError('minlength')) {
      return "Min is 6 characters";
    }
    return this.password?.hasError('maxlength') ? "Max is 32 characters" : "";
  }

  get email() {
    return this.formLogin?.get('email');
  }


  get password(){
    return this.formLogin?.get('password');
  }

}

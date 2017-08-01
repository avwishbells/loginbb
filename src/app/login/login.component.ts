import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  post:any;
  email:string="";
  pass:string="";

  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      email :[null, Validators.required],
      pass :[null, Validators.compose([Validators.required,Validators.minLength(5)])]
    })
   }

//this is where we connect to backend service
  processLogin(loginData){
    this.email = loginData.email;
    this.pass = loginData.pass;

  }
  ngOnInit() {
  }

}

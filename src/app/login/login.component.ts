import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide?=true
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.authService.login({
      email:form.value.email,
      password:form.value.password
    })
  }
  onSubmit1(form:NgForm){
    this.authService.registerUser(
      {
        email:form.value.regemail,
        password:form.value.regpw
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-and-register',
  templateUrl: './login-and-register.component.html',
  styleUrls: ['./login-and-register.component.css']
})
export class LoginAndRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  changeColorLogin() {
    let loginButton = document.getElementById("login");
    let registerButton = document.getElementById("register");
    // @ts-ignore
    if (loginButton.classList.contains("current")){
      // @ts-ignore
      loginButton.classList.remove("current");
      // @ts-ignore
      registerButton.classList.add("current");
    }
  }

  changeColorRegister() {
    let loginButton = document.getElementById("login");
    let registerButton = document.getElementById("register");
    // @ts-ignore
    if (registerButton.classList.contains("current")){
      // @ts-ignore
      loginButton.classList.add("current");
      // @ts-ignore
      registerButton.classList.remove("current");
    }
  }
}

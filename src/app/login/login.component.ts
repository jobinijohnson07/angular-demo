import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:string | undefined;
  password:string | undefined;

  constructor() { }

  ngOnInit() {
  }

  LoginUser()
  {
    if(this.user == "Admin" && this.password == "joby")
    {
      console.log("Login success");
    }
  }

}

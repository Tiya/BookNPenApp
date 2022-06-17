import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData: any = {}

//    Adminusers:any={
//     "_id":1,
//     "username":"Admin",
//     "email":"admin@domain.com",
//     "password":"admin1234",
//     "role":"Admin"
// }

  constructor(private _auth: AuthService,
    private _router: Router) { }


  ngOnInit(): void {
  }
  loginUser () {
    this._auth.loggingUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        // this.user = this._auth.getUser(res.token)

        alert("Welcome to BookNPen")
        this._router.navigate(['/dashboard'])
      },
      err => {
        console.log(err)
        alert("Hi User, Please enter valid credential to Log In")
      }
    ) 
  }

}

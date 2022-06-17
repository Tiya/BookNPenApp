import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

   registerUserData :any = {};
   role= [
     {id:1, role:"User",select:true, name:"Sign Up as User"},
     {id:2, role:"Author",select:false, name:"Sign Up as an Author"}
   ]

  //  onChangeRole($event){

  //  }

  constructor(private viewportScroller: ViewportScroller,
    private _router: Router, private _auth: AuthService) {}

  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }

  // onChangeRole($event){

  // }

  ngOnInit(): void {
  }
  registerUser(){
    this._auth.registeringUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token',res.token);
        // alert("Hi "+ this.registerUserData.username + "! Please proceed to Log In");
        this._router.navigate(['/dashboard']);
      },
      err => console.log(err) 
    )
  }
  

}

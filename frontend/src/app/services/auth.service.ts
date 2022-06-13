import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { UserModel } from '../components/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // get token() : any{
  //   return localStorage.getItem(this.token)
  // }

  private _signupUrl ="http://localhost:3000/api/signup"
  private _loginUrl ="http://localhost:3000/api/login"
  user!: UserModel;
  constructor(private http:HttpClient,
    private _router:Router) { 
      // this.user = this.getUser(this.token)
    }
  

  registeringUser(user:any){
    return this.http.post<any>(this._signupUrl, user)
  }

  loggingUser(user:any){
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  loggedOutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }
  getToken(){
    return localStorage.getItem('token');
  }

  userRoleAccess(){
    var token=localStorage.getItem('token')||"";
   var _roleAccess= JSON.parse(atob(token.split('.')[1]));
   console.log('Hi');
   console.log(_roleAccess);
   if(_roleAccess.role=='Admin'){
     return true
   }
   alert('No access')
   return false
  }
  // public getUser(token:string):UserModel{
  //   return JSON.parse(atob(token.split('.')[1])) as UserModel;
  // }
}

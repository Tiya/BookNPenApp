import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _signupUrl ="http://localhost:3000/api/signup"
  private _loginUrl ="http://localhost:3000/api/login"
  constructor(private http:HttpClient,
    private _router:Router) { }

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
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {

  constructor(private authService:AuthService,private route:Router){
  }
  canActivate(){
    if(this.authService.userRoleAccess())
    return true;
    else{
      this.route.navigate(['/dashboard'])
      return false 
    }
  }
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
          // return this.authService.user.roles.includes('Admin');
    // return this.isAuthorized(route);
  

  // private isAuthorized(route:ActivatedRouteSnapshot):boolean{
  //   const expectedRoles = ['Admin','Author'];
  //   const roles =route.data.roles;
  //   const roleMatches = expectedRoles.findIndex(role=>roles.indexOf(role)!==-1);
  //   return roleMatches < 0? false : true;
  // }
  
}

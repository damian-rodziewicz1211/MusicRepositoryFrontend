import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService} from "../service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser = this.authService.currentUserValue;
      if(currentUser){
        //user is authorized
        return true;
      }

      //user not logged in is redirected to login page
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url}});
      return false;
  }

}

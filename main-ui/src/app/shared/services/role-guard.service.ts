import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from 'src/app/core/model/user';
import { LoginService } from 'src/app/core/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {
  public isAdmin: boolean;
  public user: User;
  public role: boolean;
  constructor(
    private loginService: LoginService
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
      this.user = JSON.parse(localStorage.getItem("User"));
      this.role = JSON.parse(localStorage.getItem("Role"));
      if(this.user.IsAdmin === 'true') {
        return true;
      } else {
        return false;
      }
  }
}

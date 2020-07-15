import { Component, OnInit } from '@angular/core';
import { RoleGuardService } from '../../services/role-guard.service';
import { AuthGuardService } from '../../services/auth-guard.service';
import { LoginService } from 'src/app/core/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  public isShown:boolean = false;
  public isLogin: boolean;
  constructor(
    private roleGuardService: RoleGuardService,
    private authGuardService: AuthGuardService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
      this.isLogin = this.loginService.getLoggedInStatus();
  }
  public logout = () => {
    localStorage.removeItem("User");
    this.loginService.isLogin = false;
    this.isLogin = false;
    this.router.navigate(["/login"]);
  }
}

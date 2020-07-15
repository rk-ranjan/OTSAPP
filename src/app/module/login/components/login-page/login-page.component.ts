/* © Copyright 2019 Micro Focus or one of its affiliates.
The only warranties for products and services of Micro Focus and its affiliates and licensors (“Micro Focus”) are set forth in the express warranty statements accompanying
such products and services. Nothing herein should be construed as constituting an additional warranty. Micro Focus shall not be liable for technical or editorial errors
or omissions contained herein. The information contained herein is subject to change without notice.
Contains Confidential Information. Except as specifically indicated otherwise, a valid license is required for possession, use or copying. Consistent with FAR 12.211 and
12.212, Commercial Computer Software, Computer Software Documentation, and Technical Data for Commercial Items are licensed to the U.S. Government under vendor's standard
commercial license.
 */

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginUser } from 'src/app/core/model/login-user';
import { LoginService } from 'src/app/core/services/login.service';
import { User } from 'src/app/core/model/user';


@Component({
  selector: 'app-login-page',
  styleUrls: ['./login-page.component.scss'],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit, OnDestroy {
  public authenticating = false;
  public logo: string;
  public loginForm: FormGroup;
  public loading = true;
  public invalidLoginMessage: boolean = false;
  constructor(
    public router: Router,
    formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.loginForm = formBuilder.group({
      password: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required)
  });

  }
  public ngOnInit() {
    this.isLogin();
    this.stayOnLoginPage();
  }
  public ngOnDestroy() {
    // unsubscribe to avoid memory leakage.
  }

  
  public isLogin() {
    // const uid = this.userSessionManagement.getUID();
    let flag = false;
    if (localStorage.getItem('_temp_9898jdjk_y783h') && localStorage.getItem('_temp_9898jdjk_y783h') === '787_uwdj_646'){
      flag = true;
    }
    // if (uid && flag) {
    //   this.inactivityService.renewAuth();
    //   if (this.userSessionManagement.getUserType()) {
    //     this.router.navigate(['/dashboard']);
    //   } else {
    //     this.router.navigate(['/userConsoleHome/privSessions']);
    //   }
    // }
  }

  public login() {
    this.authenticating = true;
    let cred: LoginUser = new LoginUser();
    cred.username = this.loginForm.controls.userName.value;
    cred.password = this.loginForm.controls.password.value;
    this.loginService.checkLogin(cred).subscribe(
      (res:User) => {
          localStorage.setItem("User", JSON.stringify(res));
          this.router.navigate(["/orders"]);
          this.loginService.setLoggedInStatus();
      },
      (error: any) => {
        this.stayOnLoginPage();
        this.invalidLoginMessage = true;
      }
    )
  }

  stayOnLoginPage() {
    localStorage.removeItem("User");
    this.loginForm.controls.userName.setValue('');
    this.loginForm.controls.password.setValue('');
  }
}

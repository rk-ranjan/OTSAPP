import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoginUser } from '../model/login-user';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public checkUserUrl: string;
  public headers: HttpHeaders;
  public userName: string;
  public userRole: string;
  public isLogin: boolean;

  constructor(
    private http: HttpClient
  ) { 
    this.checkUserUrl = '/rest-api/user/login',
    this.headers = new HttpHeaders();
    this.headers.set('Content-Type', 'application/json');
  }

  public checkLogin = (user: LoginUser) : Observable<any> => {
    return this.http.post<any>(this.checkUserUrl, user).pipe(
      map((response:User) =>{
        this.userName = response.UserName;
        this.userRole = response.IsAdmin;
        return response;
      })
    )
  }

  public getUserName() {
    return this.userName;
  }

  public getUserRole = () => {
    return this.userRole;
  }

 public setLoggedInStatus = () => {
  this.isLogin = true;
 }

 public getLoggedInStatus = () => {
   return this.isLogin;
 }
 
}

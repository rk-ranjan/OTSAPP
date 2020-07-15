import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public listUserUrl: string;
  public updateUserUrl: string;
  public headers: HttpHeaders;
  constructor(
    private http: HttpClient
  ) { 
    this.listUserUrl = '/rest-api/user',
    this.updateUserUrl = '/rest-api/user/update',
    this.headers = new HttpHeaders();
    this.headers.set('Content-Type', 'application/json');
  }

  public getUsers = () : Observable<any> => {
    return this.http.get<any>(this.listUserUrl).pipe(
      map((response:User[]) =>{
        return response;
      })
    )
  }

  public AddUser = (user: User) : Observable<any> => {
    return this.http.post<any>(this.listUserUrl, user).pipe(
      map((response: any) =>{
        return response;
      })
    )
  }

  public updateUser = (user: User) : Observable<any> => {
    return this.http.post<any>(this.updateUserUrl, user).pipe(
      map((response: any) =>{
        return response;
      })
    )
  }
}

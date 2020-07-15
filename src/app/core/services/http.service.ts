/*
 * © Copyright 2019 Micro Focus or one of its affiliates.
 * The only warranties for products and services of Micro Focus and its affiliates and licensors (“Micro Focus”)
 * are set forth in the express warranty statements accompanying such products and services.
 * Nothing herein should be construed as constituting an additional warranty.
 * Micro Focus shall not be liable for technical or editorial errors or omissions contained herein.
 * The information contained herein is subject to change without notice.
 * Contains Confidential Information. Except as specifically indicated otherwise, a valid license is required for possession, use or copying.
 * Consistent with FAR 12.211 and 12.212, Commercial Computer Software, Computer Software Documentation,
 * and Technical Data for Commercial Items are licensed to the U.S. Government under vendor's standard commercial license.
 */
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  /**
   * @param  {HttpClient} httpClient
   */
  constructor(private httpClient: HttpClient) {
  }

  /**
   * @param  {string} path
   * @param  {[{key:string, value:string}]} params?
   * @returns Observable<T>
   */
  public get = <T>(path: string, params?: [{key: string, value: string}], responsetype?: any): Observable<T> => {
      return this.httpClient.get<T>(path, {responseType: responsetype})
        .pipe(catchError(this.formatErrors));
  }

  /**
   * @param  {string} path
   * @param  {object={}} body
   * @param  {HttpHeaders} headerObject?
   * @param  {any} responseType?
   * @param  {any} observe?
   * @returns Observable<any>
   */
  public post = <T>(path: string, body: any, headerObject?: HttpHeaders, responseType?: any, observe?: any,
                    paramsObj?: HttpParams): Observable<any> => {
    return this.httpClient.post<T>(path, body, { headers: headerObject, observe, params: paramsObj, responseType })
    .pipe(catchError(this.formatErrors));
  }

  /**
   * @param  {string} path
   * @param  {object={}} body
   * @returns Observable<T>
   */
  public put = <T>(path: string, body: object = {}, header?: HttpHeaders): Observable<T> => {
    return this.httpClient.put<T>(path, body )
    .pipe(catchError(this.formatErrors));
  }

  /**
   * @param  {string} path
   * @returns Observable<T>
   */
  public delete = <T>(path: string): Observable<T> => {
    return this.httpClient.delete<T>(path)
    .pipe(catchError(this.formatErrors));
  }

  /**
   * @param  {[{key:string, value:string}]} params
   * @returns HttpParams
   */
  private getParameters(params: [{key: string, value: string}]): HttpParams {
    const parameters = new HttpParams();
    if (params.length > 0) {
      params.forEach((item) => {
        parameters.set(item.key, item.value);
      });
    }
    return parameters;
  }

  /**
   * @param  {any} error
   */
  private formatErrors(error: HttpErrorResponse) {
    let errorMessage = 'Something bad happened: ';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `${errorMessage}  ${error.error.message}`;
    } else {
      errorMessage = `${errorMessage} ${error.status} ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

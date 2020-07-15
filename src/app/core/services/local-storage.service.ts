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
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  /**
   * @description Get the value of a given key from the browser local storage
   * @param  {string} key
   */
  public getItem(key: string) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        return localStorage.getItem(key);
    }
  }

  /**
   * @description Store a given key and value in the browser local storage
   * @param  {} key
   * @param  {} value
   */
  public setItem(key, value) { // key[String], value[Object or String]
    localStorage[key] = typeof value === 'object' ? JSON.stringify(value) : value;
  }

  /**
   * @description Remove a given key from the browser local storage
   * @param  {string} key
   */
  public removeItem(key: string) {
    localStorage.removeItem(key);
  }
}

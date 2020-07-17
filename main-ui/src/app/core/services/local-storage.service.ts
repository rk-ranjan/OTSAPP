
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

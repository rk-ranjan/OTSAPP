/*
 * © Copyright 2019 - 2020 Micro Focus or one of its affiliates.
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
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  // tslint:disable-next-line:no-empty
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  /**
   * Get the start date for the duration passed as parameter.
   *
   * @public
   * @memberof MonitoringDashboardComponent
   */
  public getStartDate = (hours: number): string => {
    // '1970-01-01T00:00:00.000Z'
    const todayDate = new Date();
    if (hours < 24) {
      todayDate.setHours(todayDate.getHours() - hours);
      return todayDate.toISOString();
    }
    const days = hours / 24;
    todayDate.setDate(todayDate.getDate() - days);
    return todayDate.toISOString();
  }

  /**
   * Get the current date.
   *
   * @public
   * @memberof MonitoringDashboardComponent
   */
  public getCurrentDate = (): string => {
    // '2019-03-13T14:41:01.078Z'
    return new Date().toISOString();
  }

  /**
   * Update the query params when there is a updated value.
   *
   * @memberof UtilsService
   */
  public updateQueryParam = (key: string, value: number): void => {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: { [key]: value },
        queryParamsHandling: 'merge'
      });
  }

  /**
   * @description Update the value of query parameter 'key' to its new 'value' in the given url
   * @param {string} url
   * @param {string} key
   * @param {number} value
   * @returns string
   */
  public getModifiedQueryParam(url: string, key: string, value: number): string {
    const urlTree = this.router.parseUrl(url);
    urlTree.queryParams[key] = value;
    return urlTree.toString();
  }

  /**
   * @description Handle special characters in the filter value by preceding it with a backslash
   * @param {string} value
   * @returns string
   */
  public escapeSpecialChars(value: string): string {
    const specialChars = ['+', '-', ':', '\\', '[', ']', '"', '(', ')', '{', '}'];
    for (let i = 0; i < value.length; i++) {
      if (specialChars.indexOf(value[i]) > -1) {
        value = value.substring(0, i) + '\\' + value.substring(i, value.length);
        i++;
      }
    }
    return value;
  }

  /**
   * @Desscription Check whether the string is empty or not.
   * @param {string} string
   * @returns boolean.
   */
  public isStringEmpty = (str: string) => {
    if (str  && str.length !== 0 && str.trim()) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Validate whether the input string is valid IP4 or not.
   * @param string
   */
  public isValidIPv4address = (ipaddress: string) => {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
      return (true);
    }
    return (false);
  }

  /**
   * @description Regular expression for validating email address
   * @returns RegExp
   */
  public getEmailValidationRegEx(): RegExp {
    return new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
  }
}

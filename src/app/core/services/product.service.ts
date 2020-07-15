import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PlaceOrder } from '../model/place-order';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public listOrderUrl: string;
  public orderUrl: string;
  public headers: HttpHeaders;
  constructor(
    private http: HttpClient
  ) { 
    this.listOrderUrl = '/rest-api/product',
    this.orderUrl = '/rest-api/saveOrder';
    this.headers = new HttpHeaders();
    this.headers.set('Content-Type', 'application/json');
  }
 /**
   * To get the List of all Orders.
   * @memberof OrdersService
  */
  public getAllProducts = (): Observable<Product[]> => {
    return this.http.get<Product[]>(this.listOrderUrl).pipe(
      map((response: Product[]) => {
        return response;
      }));
  }
}

import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'; 
import { Order } from 'src/app/core/model/order';
import { PlaceOrder } from 'src/app/core/model/place-order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public listOrderUrl: string;
  public deleteOderUrl: string;
  public headers: HttpHeaders;
  constructor(
    private http: HttpClient
  ) { 
    this.listOrderUrl = '/rest-api/orders',
    this.deleteOderUrl = '/rest-api/orders',
    this.headers = new HttpHeaders();
    this.headers.set('Content-Type', 'application/json');
  }
 /**
   * To get the List of all Orders.
   * @memberof OrdersService
  */
  public getAllOrders = (): Observable<any> => {
    return this.http.get<any>(this.listOrderUrl).pipe(
      map((response: Order) => {
        return response;
      }));
  }

  public saveOrder = (order: PlaceOrder): Observable<any> => {
    return this.http.post<PlaceOrder>(this.listOrderUrl,order).pipe(
      map((res: any) => {
        return res;
      })
    )
  }

  public deleteOrder = (order: Order): Observable<any> => {
    return this.http.delete<any>(this.deleteOderUrl+"?id="+order._id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}

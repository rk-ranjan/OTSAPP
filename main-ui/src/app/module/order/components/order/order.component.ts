import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/core/model/order';
import { User } from 'src/app/core/model/user';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {


  @Input() public order: Order;

  constructor(
    private orderService: OrdersService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  public cancelOrder = (order: Order) => {
     this.orderService.deleteOrder(order).subscribe(
       (response: any) => {
        this.router.routeReuseStrategy.shouldReuseRoute = ()  => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(["/orders"]);
     });
  }
}

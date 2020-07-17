import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { PlaceOrder } from 'src/app/core/model/place-order';
import { Order } from 'src/app/core/model/order';
import { User } from 'src/app/core/model/user';
import { Router } from '@angular/router';
import { OrderDetail } from 'src/app/core/model/order-detail';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() public product: Product;
  @ViewChild("quntity", {static: false}) quantity: ElementRef
  @ViewChild("address", {static: false}) address: ElementRef
  @ViewChild("address1", {static: false}) address1: ElementRef
  @ViewChild("country", {static: false}) country: ElementRef
  @ViewChild("state", {static: false}) state: ElementRef
  @ViewChild("zipCode", {static: false}) zipCode: ElementRef
  public saveOrder: PlaceOrder = new PlaceOrder();
  public orderAddress: boolean = false;
  public currUser: User;
  constructor(
    private router: Router,
    private orderService: OrdersService
  ) { }
 
  ngOnInit() {   
  }

  public placeOrder(prod: Product) {
    this.saveOrder.order = new Order();
    this.saveOrder.detail = new OrderDetail();
    this.currUser = JSON.parse(localStorage.getItem("User")); 
    console.log(this.currUser);
    this.saveOrder.order.EmployeeId = this.currUser.UserId.toString();
    this.saveOrder.order.CustomerID = this.currUser.UserId.toString();
    this.saveOrder.detail.ProductId = prod.ProductId;
    this.saveOrder.detail.Quantity = this.quantity.nativeElement.value;
    this.saveOrder.detail.UnitPrice = prod.UnitPrice;
    this.saveOrder.detail.Discount = prod.Discontinued;
    this.saveOrder.order.OrderDate = new Date().toDateString();
    this.orderAddress = true;
    console.log(this.saveOrder);
  }

  public submitOrder() {
    this.saveOrder.order.ShipAddress = this.address.nativeElement.value;
    this.saveOrder.order.ShipAddress = this.address1.nativeElement.value;
    this.saveOrder.order.ShipCountry = this.country.nativeElement.value;
    this.saveOrder.order.ShipCity = this.state.nativeElement.value;
    this.saveOrder.order.ShipPostalCode = this.zipCode.nativeElement.value;
    console.log(this.saveOrder);
    this.orderService.saveOrder(this.saveOrder).subscribe(
      (res: any) => {
        this.router.navigate(["/orders"]);
      }
    )
  }

}

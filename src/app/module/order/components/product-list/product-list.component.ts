import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  public productList: Product[] = [];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
      this.productService.getAllProducts().subscribe(
        (res: Product[]) =>{
          this.productList = res;
          console.log(this.productList);
        }
      )
  }

}

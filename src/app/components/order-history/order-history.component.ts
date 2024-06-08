import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { Order } from 'src/app/common/order';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { OrderHistory } from '../../common/order-history';
import { OrderHistoryService } from '../../services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orderHistoryList: OrderHistory[] = [];
  storage: Storage = sessionStorage;
  loading: boolean = false;
  cartItem: CartItem;

  constructor(private orderHistoryService: OrderHistoryService,
              private productService: ProductService,
              private cartService: CartService          
    ) { }

  ngOnInit(): void {
    this.loading = true;
    this.handleOrderHistory();
    //this.loading = false;
  }

  handleOrderHistory() {

    // read the user's email address from browser storage
    const theEmail = JSON.parse(this.storage.getItem('userEmail'));

    // retrieve data from the service
    this.orderHistoryService.getOrderHistory(theEmail).subscribe(
      data => {
        this.loading = false;
        this.orderHistoryList = data._embedded.orders;
        //console.log(this.orderHistoryList);
      }
    );
  }

  onBuyItAgain(productId: number){
    //console.log(productId);
    this.productService.getProductById(productId).subscribe(
      data=>{
        this.cartItem = new CartItem(data);
        //console.log(this.cartItem);
        this.cartService.addToCart(this.cartItem);
      }
    );
  }

}

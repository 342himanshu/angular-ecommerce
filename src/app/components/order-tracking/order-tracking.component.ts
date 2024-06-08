import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderHistory } from 'src/app/common/order-history';
import { OrderHistoryService } from 'src/app/services/order-history.service';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent implements OnInit {

  orderDetail: OrderHistory;

  constructor(private route: ActivatedRoute,
              private orderHistoryService: OrderHistoryService          
    ) { }

  ngOnInit(): void {

    const id = +this.route.snapshot.paramMap.get('id');
    //console.log(id);
    this.orderHistoryService.getOrderItemById(id).subscribe(
      data=>{
        this.orderDetail = data;
        //console.log(this.orderDetail);
      }
    );

  }

}

import { Component, OnInit } from '@angular/core';
import { OrderHistory } from 'src/app/common/order-history';
import { OrderHistoryService } from 'src/app/services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orderHistoryList:OrderHistory[] = [];
  storage: Storage = sessionStorage;
    isLoading: boolean = true; // 👈 NEW

  constructor(private orderHistoryService:OrderHistoryService) { }

  ngOnInit(): void {
    this.handleOrderHistory();
  }
  handleOrderHistory() {
    // read the email from browser storage
    const theEmail = JSON.parse(this.storage.getItem('userEmail')!);
    
    // now get the order history for this email
    this.orderHistoryService.getOrderHistory(theEmail).subscribe(
      data => {
        this.orderHistoryList = data._embedded.orders;
        this.isLoading = false; // 👈 stop spinner

      }
    );
  }

}

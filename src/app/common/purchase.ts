import { Address } from "./address";
import { Customer } from "./customer";
import { Order } from "./order";
import { OrderItem } from "./order-item";

export class Purchase {
  customer: Customer; 
  order: Order; 
  orderItems: OrderItem[];
  shippingAddress: Address; 
  billingAddress: Address;

  constructor() {
    this.customer = new Customer();
    this.order = new Order();
    this.orderItems = [];
    this.shippingAddress = new Address();
    this.billingAddress = new Address();
  }
}

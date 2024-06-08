import { Address } from "./address";
import { Customer } from "./customer";
import { OrderItem } from "./order-item";

export class OrderHistory {
    id: string;
    orderTrackingNumber: string;
    totalPrice: number;
    totalQuantity: number;
    dateCreated: Date;
    orderItems: OrderItem[];
    shippingAddress: Address;
    billingAddress: Address;
    customer: Customer;
}

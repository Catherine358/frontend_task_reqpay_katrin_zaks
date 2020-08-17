import { Order } from "../types/reducers-types";

class OrderClass {
    id: string;
    order: Order;

   constructor(id: string, order: Order) {
       this.id = id;
       this.order = order;
   }
}

export default OrderClass;

import { baseUrl } from "./utils/baseUrl";
import { opt } from "./utils/fetchOpt";

export class OrdersCrud {
  static async Create() {
    try {
      fetch(baseUrl + "Order/Create", {
        method: "POST",
        ...opt,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async Accept(id) {
    try {
      fetch(baseUrl + "Order/Accept" + `?orderId=${id}`, {
        method: "POST",
        ...opt,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async GetAvailableOrders() {
    try {
      const res = await fetch(baseUrl + "Order/GetAllAvailable", {
        method: "GET",
        ...opt,
      });
      const orders = res.json();
      return orders;
    } catch (error) {
      console.log(error);
    }
  }
  static async GetAcceptedOrders() {
    try {
      const res = await fetch(baseUrl + "Order/GetAllAccepted", {
        method: "GET",
        ...opt,
      });
      const orders = res.json();
      return orders;
    } catch (error) {
      console.log(error);
    }
  }
}

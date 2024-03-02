export class Orders {
  static Create(data) {
    try {
      fetch("Order/Create", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  static async GetOrders() {
    try {
      const res = await fetch("", { method: "GET" });
      const orders = res.json();
      return orders;
    } catch (error) {
      console.log(error);
    }
  }
}

import { Component } from "react";
import OrderTable from "../HTML/OrderTable";
import { OrdersCrud } from "../services/orders";

class Orders extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      loading: true,
      loadingAccepted: true,
      acceptedOrders: [],
      patchLoading: false,
    };
  }
  componentDidMount() {
    this.requestOrders();
  }

  createOrder() {
    OrdersCrud.Create().then(() => {
      this.requestOrders();
    });
  }

  acceptHandler(id) {
    this.setState({ ...this.state, patchLoading: true });
    OrdersCrud.Accept(id).then(() => {
      this.requestOrders().then(() =>
        this.setState({ ...this.state, patchLoading: false })
      );
    });
  }

  async requestOrders() {
    OrdersCrud.GetAvailableOrders()
      .then((orders) =>
        this.setState({ ...this.state, orders, loading: false })
      )
      .catch(() => this.setState({ ...this.state, loading: false }));
  }

  renderAccepted() {
    OrdersCrud.GetAcceptedOrders()
      .then((acceptedOrders) => {
        this.setState({
          ...this.state,
          acceptedOrders,
          loadingAccepted: false,
        });
      })
      .catch(() => {
        this.setState({ ...this.state, loadingAccepted: false });
      });
  }
  render() {
    return (
      !this.state.loading && (
        <OrderTable
          orders={this.state.orders}
          acceptedOrders={this.state.acceptedOrders}
          renderAccepted={this.renderAccepted.bind(this)}
          createOrder={this.createOrder.bind(this)}
          acceptOrder={this.acceptHandler.bind(this)}
          disableBtn={this.state.patchLoading}
        />
      )
    );
  }
}

export default Orders;

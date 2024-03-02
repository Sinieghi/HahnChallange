import { Component } from "react";
import CreateInputs from "../HTML/CreateInputs";
import { OrdersCrud } from "../services/orders";

class CreateOrder extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      order: {
        id: 0,
        load: 0,
        value: 0,
        deliveryDate: Date,
        expirationDate: Date,
      },
    };
  }
  handleChange(e) {
    this.setState({
      ...this.state,
      order: { [e.target.name]: e.target.value },
    });
  }
  handleSubmit() {
    OrdersCrud.Create(this.state.order);
  }
  render() {
    return <CreateInputs handleChange={this.handleChange} state={this.state} />;
  }
}

export default CreateOrder;

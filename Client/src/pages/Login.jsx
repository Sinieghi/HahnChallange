import { Component } from "react";
import { User } from "../services/login";
import LoginInputs from "../HTML/LoginInputs";

class Login extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      password: "",
      userName: "",
      coinAmount: 1000,
    };
  }
  componentDidMount() {}
  handleChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    User.login(this.state);
  }
  render() {
    return (
      <LoginInputs
        handleChange={(e) => this.handleChange(e)}
        handleSubmit={(e) => this.handleSubmit(e)}
      />
    );
  }
}

export default Login;

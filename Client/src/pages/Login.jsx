import { Component } from "react";
import { User } from "../services/login";
import LoginInputs from "../HTML/LoginInputs";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: { password: "", name: "", coinAmount: 1000 },
    };
  }
  componentDidMount() {}
  handleChange(e) {
    this.setState({ ...this.state, user: { [e.target.name]: e.target.value } });
  }
  handleSubmit() {
    User.login(this.state.user);
  }
  render() {
    return <LoginInputs />;
  }
}

export default Login;

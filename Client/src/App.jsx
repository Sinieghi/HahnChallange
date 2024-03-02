import { Component } from "react";
import "./App.css";
import NavMenu from "./Menu/NavMenu";
import Login from "./Pages/login";
import Orders from "./Pages/ordes";
import CreateOrder from "./pages/CreateOder";
import { pathname } from "./utils/pathName";
import { User } from "./services/login";
import Home from "./pages/Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: { userName: "", coins: 0 },
      loading: true,
    };
  }
  componentDidMount() {
    User.getUserCoins()
      .then((coins) => {
        this.setState({
          ...this.state,
          user: { userName: window.localStorage.getItem("userName"), coins },
          token: window.localStorage.getItem("Bearer"),
          loading: false,
        });
      })
      .catch(() => {
        this.setState({
          ...this.state,
          loading: false,
        });
      });
  }
  render() {
    return (
      !this.state.loading && (
        <>
          <NavMenu
            coins={this.state.user.coins}
            userName={this.state.user.userName}
          />
          {pathname() == "/" && <Home />}
          {pathname() == "/orders" && <Orders />}
          {pathname() == "/orders/create" && <CreateOrder />}
          {pathname() == "/login" && <Login />}
          {pathname() == "/cargo" && <Orders />}
        </>
      )
    );
  }
}

export default App;

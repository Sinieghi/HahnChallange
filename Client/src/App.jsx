import { Component } from "react";
import "./App.css";
import NavMenu from "./Menu/NavMenu";
import Login from "./Pages/login";
import Orders from "./Pages/ordes";
import CreateOrder from "./pages/CreateOder";
import { pathname } from "./utils/pathName";
import { User } from "./services/login";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: { userName: "", coins: 0, isLogin: "" },
      loading: true,
      start: false,
    };
  }
  componentDidMount() {
    User.getUserCoins()
      .then((coins) => {
        this.setState({
          ...this.state,
          user: { userName: window.localStorage.getItem("userName"), coins },
          token: window.localStorage.getItem("Bearer"),
          isLogin: window.localStorage.getItem("status"),
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
            uStatus={this.state.isLogin}
          />
          {pathname() == "/orders" && <Orders />}
          {pathname() == "/orders/create" && <CreateOrder />}
          {pathname() == "/" && this.state.isLogin !== "login" && <Login />}
        </>
      )
    );
  }
}

export default App;

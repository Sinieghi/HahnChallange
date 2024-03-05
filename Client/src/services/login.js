import { baseUrl } from "./utils/baseUrl";
import { opt } from "./utils/fetchOpt";

export class User {
  static async login(data) {
    console.log(data);
    const res = await fetch(baseUrl + "User/Login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const user = await res.json();
    window.localStorage.setItem("Bearer", user.token);
    window.localStorage.setItem("userName", user.userName);
    window.localStorage.setItem("status", "login");
    return user;
  }
  static async getUserCoins() {
    const res = await fetch(baseUrl + "User/CoinAmount", {
      method: "GET",
      ...opt,
    });
    const coin = await res.json();
    return coin;
  }
  static logout() {
    window.localStorage.removeItem("Bearer");
    window.localStorage.removeItem("userName");
    window.localStorage.removeItem("status");
  }
}

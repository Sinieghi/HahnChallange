export class User {
  static async login(data) {
    const res = await fetch("User/Login", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const user = await res.json();
    return user;
  }
}

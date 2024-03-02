import "./App.css";
import NavMenu from "./Menu/NavMenu";
import Login from "./Pages/login";
import Orders from "./Pages/ordes";
import CreateOrder from "./pages/CreateOder";
import { pathname } from "./utils/pathName";

function App() {
  return (
    <>
      <NavMenu />
      {pathname() == "/orders" && <Orders />}
      {pathname() == "/orders/create" && <CreateOrder />}
      {pathname() == "/login" && <Login />}
      {pathname() == "/cargo" && <Orders />}
    </>
  );
}

export default App;

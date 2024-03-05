import { User } from "../services/login";
import { pathname } from "../utils/pathName";

const NavMenu = ({ userName, coins, uStatus }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Hahn Cargo Simulator
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            {uStatus !== "login" && (
              <li className="nav-item">
                <a
                  className={pathname() == "/" ? "nav-link active" : "nav-link"}
                  href="/"
                >
                  Login
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
            )}
            {uStatus === "login" && (
              <li className="nav-item">
                <a
                  className={
                    pathname() == "/orders" ? "nav-link active" : "nav-link"
                  }
                  href="/orders"
                >
                  Orders
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
            )}
          </ul>
          <div className="d-flex" style={{ columnGap: "9px", color: "white" }}>
            <button className="btn btn-primary btn-sm" onClick={User.logout}>
              Logout
            </button>
            <p className="mb-0">
              User: <span>{userName}</span>
            </p>
            <p className="mb-0">
              Coins: <span style={{ color: "gold" }}>{coins}</span>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;

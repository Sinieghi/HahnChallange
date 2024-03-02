const LoginInputs = ({ handleChange, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "500px",
        height: "400px",
        margin: "20px auto",
        boxShadow: "var(--shadow-1)",
        padding: "15px",
      }}
    >
      <fieldset>
        <legend>Login</legend>
        <div>
          <label htmlFor="name" className="form-label mt-4">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Christian"
            name="userName"
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Password you should keep in secret Mr. Hahn.
          </small>
        </div>
        <div>
          <label htmlFor="password" className="form-label mt-4">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Hahn"
            autoComplete="off"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default LoginInputs;

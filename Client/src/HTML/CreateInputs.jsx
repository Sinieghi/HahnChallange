/* eslint-disable react/no-unescaped-entities */
const CreateInputs = () => {
  return (
    <>
      <div>
        <fieldset disabled="">
          <label className="form-label" htmlFor="disabledInput">
            Disabled input
          </label>
          <input
            className="form-control"
            id="disabledInput"
            type="text"
            placeholder="Disabled input here..."
            disabled=""
          />
        </fieldset>
      </div>
      <div>
        <fieldset>
          <label className="form-label mt-4" htmlFor="readOnlyInput">
            Readonly input
          </label>
          <input
            className="form-control"
            id="readOnlyInput"
            type="text"
            placeholder="Readonly input here..."
            readOnly=""
          />
        </fieldset>
      </div>
      <div className="has-success">
        <label className="form-label mt-4" htmlFor="inputValid">
          Valid input
        </label>
        <input
          type="text"
          value="correct value"
          className="form-control is-valid"
          id="inputValid"
        />
        <div className="valid-feedback">Success! You've done it.</div>
      </div>
      <div className="has-danger">
        <label className="form-label mt-4" htmlFor="inputInvalid">
          Invalid input
        </label>
        <input
          type="text"
          value="wrong value"
          className="form-control is-invalid"
          id="inputInvalid"
        />
        <div className="invalid-feedback">
          Sorry, that username's taken. Try another?
        </div>
      </div>
      <div>
        <label
          className="col-form-label col-form-label-lg mt-4"
          htmlFor="inputLarge"
        >
          Large input
        </label>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder=".form-control-lg"
          id="inputLarge"
        />
      </div>
      <div>
        <label className="col-form-label mt-4" htmlFor="inputDefault">
          Default input
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Default input"
          id="inputDefault"
        />
      </div>
      <div>
        <label
          className="col-form-label col-form-label-sm mt-4"
          htmlFor="inputSmall"
        >
          Small input
        </label>
        <input
          className="form-control form-control-sm"
          type="text"
          placeholder=".form-control-sm"
          id="inputSmall"
        />
      </div>
      <div>
        <label className="form-label mt-4">Input addons</label>
        <div>
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
            <span className="input-group-text">.00</span>
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </div>
        </div>
      </div>
      <div>
        <label className="form-label mt-4">Floating labels</label>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            autoComplete="off"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
      </div>
    </>
  );
};

export default CreateInputs;

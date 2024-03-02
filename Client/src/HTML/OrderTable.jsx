import { useState } from "react";

const OrderTable = ({
  orders,
  acceptedOrders,
  renderAccepted,
  createOrder,
}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr style={{ position: "relative" }}>
            <th scope="col">Orders</th>
            <th scope="col">Load</th>
            <th scope="col">Value</th>
            <th scope="col">Delivery date</th>
            <th scope="col">Expires in</th>
            <th
              scope="col"
              style={{
                cursor: "pointer",
                position: "absolute",
                right: "20px",
                backgroundColor: "lightblue",
              }}
              onClick={() => createOrder()}
            >
              Create new order
            </th>
          </tr>
        </thead>
        {orders.map((order, i) => {
          return (
            <tbody key={i}>
              <tr className="table-active">
                <th scope="row">Active</th>
                <td>{order.load}</td>
                <td>{order.value}</td>
                <td>{order.deliveryDateUtc}</td>
                <td>{order.expirationDateUtc}</td>
              </tr>
            </tbody>
          );
        })}
      </table>

      {acceptedOrders.length > 0 && (
        <>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Cargo</th>
                <th scope="col">Load</th>
                <th scope="col">Value</th>
                <th scope="col">Delivery date</th>
                <th scope="col">Expires in</th>
              </tr>
            </thead>

            {acceptedOrders.map((order, i) => {
              return (
                <tbody key={i}>
                  <tr className="table-success">
                    <th scope="row">Accepted</th>
                    <td>{order.load}</td>
                    <td>{order.value}</td>
                    <td>{order.deliveryDateUtc}</td>
                    <td>{order.expirationDateUtc}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </>
      )}
      {show ? null : (
        <div className="d-grid gap-2">
          <button
            className="btn btn-lg btn-primary"
            type="button"
            onClick={() => {
              setShow(true);
              renderAccepted();
            }}
          >
            Show accepted Cargos
          </button>
        </div>
      )}
    </>
  );
};

export default OrderTable;

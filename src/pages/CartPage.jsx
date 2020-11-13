import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeButton from "src/components/StripeButton";
import { REMOVE_CART_ITEM } from "src/store/reducers/cart";

import {
  selectCartItems,
  selectCartTotal,
} from "src/store/selectors/cartSelectors";

const CartPage = () => {
  const total = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleDelete = (id) =>
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });

  return (
    <div className="container mt-5">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <td>Product</td>
                <td>Description</td>
                <td>Quantity</td>
                <td>Price</td>
                <td>Action</td>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((cart) => (
                <tr key={cart.id}>
                  <td style={{ height: "90px" }}>
                    <figure className="image is-48x48 m-1 p-1">
                      <img src={cart.imageUrl} alt={cart.name} />
                    </figure>
                  </td>
                  <td>{cart.name}</td>
                  <td>
                    <div className="quantity" style={{ display: "flex" }}>
                      <div className="arrow" style={{ cursor: "pointer" }}>
                        &#10094;
                      </div>
                      <span className="value" style={{ margin: "0 10px" }}>
                        {cart.quantity}
                      </span>
                      <div className="arrow" style={{ cursor: "pointer" }}>
                        &#10095;
                      </div>
                    </div>
                  </td>
                  <td>{cart.price}</td>
                  <td>
                    <span
                      className="icon"
                      onClick={() => handleDelete(cart.id)}
                    >
                      <i className="fas fa-trash has-text-danger"></i>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>
                  <label>Total: ${total}</label>
                  <StripeButton price={total} />
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

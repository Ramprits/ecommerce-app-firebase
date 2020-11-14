import React from "react";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "store/reducers/cart";

const CardComponent = ({ id, name, imageUrl, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imageUrl} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
          <a href="#">{name}</a>
          <br />
          <label>11:09 PM - 1 Jan 2016</label>
          <br />
          <button
            className="button is-small mt-1 is-link is-outlined"
            onClick={() =>
              dispatch({
                type: ADD_TO_CART,
                payload: { id, name, imageUrl, price },
              })
            }
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;

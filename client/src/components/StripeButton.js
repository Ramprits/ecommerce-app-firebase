import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price, description }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_hpTBOriVe0iEtyNa1mvss4AX";
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "POST",
      data: {
        amount: priceForStripe,
        token,
        description,
      },
    })
      .then((response) => alert(JSON.stringify(response)))
      .catch((error) => console.log(error));
  };
  return (
    <StripeCheckout
      style={{ display: "flex" }}
      label="Pay now"
      name="Dhanai fruits mart"
      shippingAddress
      billingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeButton;

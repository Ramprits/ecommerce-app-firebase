import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_hpTBOriVe0iEtyNa1mvss4AX";
  const onToken = (token) => {
    console.log(token);
    alert("Payment successfully");
  };
  return (
    <div>
      <StripeCheckout
        label="Pay now"
        name="Dhanai fruits mart"
        billingAddress
        shippingAddress
        image="https://bulma.io/images/bulma-logo.png"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        token={onToken}
        stripeKey={publishableKey}
      ></StripeCheckout>
    </div>
  );
};

export default StripeButton;

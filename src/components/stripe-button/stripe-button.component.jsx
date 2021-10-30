import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JqCr3SHE8f9yLbykRkLBC82QZzz7WyQ7LKINSabl1u3sFyOJxANX4qS63b4FrnOCZ2t8GWtcLVyoqvzIEDeunEq00jEzaadfu";

  const onToken = token => {
    console.log(token);
    alert("Payment processed successfully!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="TrendSide"
      billingAddress
      shippingAddress
      image="https://user-images.githubusercontent.com/78133928/139527587-111f5623-590d-4c5e-9333-aa9b7958801b.png"
      description={`Your total: $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

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
      image=""
      description={`Your total: $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

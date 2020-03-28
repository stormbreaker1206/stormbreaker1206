import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price}) =>{

  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_24jaf1SjXL4AHfs0bP6nRRB8';

  const onToken = token =>{
      alert('Payment Successful');
      console.log(token);
    };

  return (
      <StripeCheckout
          label='Pay Now'
          name='Nemo Clothing'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}/>
  )


};

export default StripeCheckoutButton;
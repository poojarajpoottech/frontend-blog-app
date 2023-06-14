import React, { useEffect } from 'react';
import { Button } from '@mui/material';

const CheckoutPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    const response = await fetch(`process.env.STRIPE_SECRET_KEY/api/payment`, { method: 'POST' });
    const { orderId, amount, currency } = await response.json();

    const options = {
      key: 'YOUR_RAZORPAY_KEY',
      amount,
      currency,
      name: 'UnboxHub',
      description: 'Payment for sorce code',
      order_id: orderId,
      async handler() {
        console.log('Payment success:', response);
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: 'Customer Contact',
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div>
      <Button
        onClick={handlePayment}
        variant="contained"
        target="_blank"
        rel="noopener"
        type="submit"
        role="link"
        sx={{
          color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.300'),
        }}
      >
        Get Source Code - Rs 99
      </Button>
    </div>
  );
};

export default CheckoutPage;

import React from 'react';
import './Payment.css'; // Assuming styles are in this CSS file

const Payment = () => {
  const handlePayment = () => {
    const options = {
      key: 'rzp_test_9raH3Ams4ZlDWn', 
      amount: 50000, 
      currency: 'INR',
      name: 'Tekspiral',
      description: 'Test Transaction',
      image: 'https://teckspiral.com/moores/storage/app/public/company/2024-05-28-6654dfdeadc32.webp',
      order_id: '', 
      handler: function (response) {
        alert(`Payment successful: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '+91',
      },
      notes: {
        address: 'Sample Address',
      },
      theme: {
        color: '#F37254',
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="payment-container">
      <div className="content-box">
        <h2 className="heading">Seamless Payment Gateway</h2>
        <p className="description">
          Make secure and fast payments with our Razorpay integration. Your convenience is our priority.
        </p>
        <button className="pay-button" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;

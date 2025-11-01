import { useContext, useState } from "react";
    
import { AppContext } from "../../context";

import "./Checkout.css";

/**
 * Checkout Page Component
 * Displays order summary and mock payment form
 */
export const CheckoutPage = ({ navigate }) => {
  const { selectedPlan, duration, isSubscription, finalAmount, monthlyPrice } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Mock payment submission
  const handlePay = (e) => {
    e.preventDefault();
    // Simulate a successful payment
    // In a real app, you'd call a payment API here
    console.log('Payment Submitted:', { name, email, finalAmount });
    navigate('#/success');
  };

  return (
    <div className="section">
      <h2 className="heading2 mb-32 text-center">Checkout</h2>
      <div className="checkout">    
        {/* Order Summary */}
        <div className="card flex-1">
          <h3 className="heading3 mb-16">Order Summary</h3>
            <div className="flex justify-between mb-12">
              <span className="body1">Plan:</span>
              <span className="heading4">{selectedPlan.name}</span>
            </div>
            <div className="flex justify-between mb-12">
              <span className="body1">Duration:</span>
              <span className="heading4">{duration.label}</span>
            </div>
            <div className="flex justify-between mb-12">
              <span className="body1">Payment Type:</span>
              <span className="heading4">
                {isSubscription ? 'Subscription' : 'One-Time'}
              </span>
            </div>
            <hr className="my-24" />
            {isSubscription && (
                <div className="flex justify-between mb-12">
                    <span className="body1">Total:</span>
                    <div className='text-right'>
                        <span className="heading4">
                            {finalAmount.toLocaleString('en-IN', {
                                style: 'currency',
                                currency: 'INR',
                            }) }
                        </span>
                        <p className="body2 text-right">
                            (₹{monthlyPrice.toFixed(2)}/month)
                        </p>
                    </div>
                </div>
            )}
            <div className="flex justify-between align-center">
              <span className="body1">Payment Due:</span>
              <p className="heading1">
                {isSubscription ? `₹${monthlyPrice.toFixed(2)}` : finalAmount.toLocaleString('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                })}
              </p>
            </div>
        </div>

        {/* Payment Form */}
        <div className="card flex-1">
          <form onSubmit={handlePay}>
            <h3 className="heading3 mb-16">Billing Information</h3>
            <div className='flex flex-col mb-12'>
                <label htmlFor="name" className="body1">Full Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input"
                    required
                />
            </div>
            <div className='flex flex-col mb-12'>
                <label htmlFor="email" className="body1">Email Address</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    required
                />
            </div>

            {/* Mock Payment Methods */}
            <div className="mb-12">
                <span className="body1">Payment Method</span>
                <div className="button-group button-group--transparent">
                    <button type="button" className="button">
                        Credit Card
                    </button>
                    <button type="button" className="button">
                        PayPal
                    </button>
                    <button type="button" className="button">
                        Crypto
                    </button>
                </div>
            </div>

            {/* Promo Code (Optional) */}
            <div className="mb-12">
                <label htmlFor="promo" className="body1">Promo Code</label>
                <div className="input-group">
                    <input
                        type="text"
                        id="promo"
                        placeholder="ENTER-CODE"
                        className="input"
                    />
                    <button type="button" className="button button--secondary">
                        Apply
                    </button>
                </div>
            </div>
            <hr className="my-24" />

            <div className="flex flex-col gap-16">
              <button
                type="submit"
                className="button button--primary"
              >
                Pay Now ({isSubscription ? `₹${monthlyPrice.toFixed(2)}` : finalAmount.toLocaleString('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                })})
              </button>
              <button
                type="button"
                onClick={() => navigate('#/cancel')}
                className="button"
              >
                Cancel Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

import { useContext } from 'react';

import { AppContext } from '../../context';

/**
 * Success Page Component
 * Confirms a successful transaction
 */
export const SuccessPage = ({ navigate }) => {
  const { selectedPlan, duration, finalAmount, isSubscription, monthlyPrice } = useContext(AppContext);
  const orderId = Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="section py-16 text-center">
      <div className="card dialog-box">
        <div className="dialog-box-icon success">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
        </div>
        <h2 className="heading2">Payment Successful!</h2>
        <p className="body1">Thank you for your purchase. Your plan is now active.</p>
        
        <div className="order-table">
          <h4 className="body1 mb-8">Order Details</h4>
          <div className="flex justify-between mb-12">
            <span className="body1">Order ID:</span>
            <span className="heading4">{orderId}</span>
          </div>
          <div className="flex justify-between mb-12">
            <span className="body1">Plan:</span>
            <span className="heading4">{selectedPlan.name}</span>
          </div>
          <div className="flex justify-between mb-16">
            <span className="body1">Duration:</span>
            <span className="heading4">{duration.label}</span>
          </div>
          <hr />
          <div className="flex justify-between mx-16">
            <span className="subtitle1">Total Paid:</span>
            <span className="heading1">
                {isSubscription ? `₹${monthlyPrice.toFixed(2)}` : finalAmount.toLocaleString('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                })}
            </span>
          </div>
        </div>

        <button
          onClick={() => navigate('#/pricing')}
          className="button button--primary"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

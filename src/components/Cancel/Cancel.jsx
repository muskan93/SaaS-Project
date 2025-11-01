/**
 * Cancel Page Component
 * Informs the user the payment was canceled
 */
export const CancelPage = ({ navigate }) => {
  return (
    <div className="section py-16 text-center">
      <div className="card dialog-box">
        <div className="dialog-box-icon error">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h2 className="heading2">Payment Canceled</h2>
        <p className="body1">Your payment was not processed. You have not been charged.</p>
        
        <div className="flex justify-center dialog-box-button-wrapper">
        <button
            type='button'
            onClick={() => navigate('#/checkout')}
            className="button button--primary"
          >
            Retry Checkout
          </button>
          <button
            type='button'
            onClick={() => navigate('#/pricing')}
            className="button button--secondary"
          >
            Back to Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

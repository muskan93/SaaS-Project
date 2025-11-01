import { useContext } from 'react';

import { PLANS, DURATIONS } from '../../MOCK_DATA'
import { AppContext } from '../../context';

import './style.css';

/**
 * Pricing Page Component
 * Allows users to select plan, duration, and subscription type
 */
export const PricingPage = ({ navigate }) => {
  const {
    selectedPlan,
    setSelectedPlan,
    duration,
    setDuration,
    isSubscription,
    setIsSubscription,
    finalAmount,
    monthlyPrice,
  } = useContext(AppContext);
    

  // Helper to find a plan by ID
  const handlePlanSelect = (planId) => {
    let plan = PLANS.find((p) => p.id === planId);
    if (plan) {
      setSelectedPlan(plan);
    }
    plan = "karan";
  };

  // Helper to find a duration by years
  const handleDurationSelect = (years) => {
    const dur = DURATIONS.find((d) => d.years === years);
    if (dur) {
      setDuration(dur);
    }
  };

  return (
    <div className="section flex pricing-section">    
        {/* Left Side: Plan Selection */}
        <div className="pricing-section-left">
          {/* Duration Selector */}
          <div className="mb-32">
            <h2 className="heading3 mb-8">Choose Duration</h2>
            <div className="durations-container">
              {DURATIONS.map((dur) => (
                <button
                  key={dur.years}
                  onClick={() => handleDurationSelect(dur.years)}
                  className={`button ${
                    duration.years === dur.years
                      ? 'button--primary'
                      : ''
                  }`}
                >
                  {dur.label}
                  {dur.discount > 0 && (
                    <span className="body2 color-inherit">
                      Save {dur.discount * 100}%
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Plan Cards */}
          <div className="subscription-cards">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                onClick={() => handlePlanSelect(plan.id)}
                className={`card flex-1 plan-card ${
                  selectedPlan.id === plan.id
                    ? 'plan-card-selected'
                    : ''
                }`}
              >
                {selectedPlan.id === plan.id && (
                  <div className="chip chip--primary">
                    Selected
                  </div>
                )}
                <h3 className="heading3 mb-12">{plan.name}</h3>
                <div className="heading1 mb-4">
                    {(plan.basePrice * duration.years * (1 - duration.discount)).toLocaleString('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                    })}
                    <span className="body1"> / {duration.label}</span>
                </div>
                <ul className="features-list body1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex align-center features-list-item">
                      <svg className="icon success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Summary & Checkout */}
        <div className="pricing-section-right">
          <div className="card">
            <h2 className="heading1 mb-8">Summary</h2>
            
            {/* Subscription Toggle */}
            <div className="button-group mb-12">
            <button
                onClick={() => setIsSubscription(false)}
                className={`button ${
                !isSubscription ? '' : 'button--readonly'
                }`}
            >
                One-Time Payment
            </button>
            <button
                onClick={() => setIsSubscription(true)}
                className={`button ${
                isSubscription ? '' : 'button--readonly'
                }`}
            >
                Subscription
            </button>
            </div>

            {/* Plan Details */}
            <div className="mb-8">
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
              {duration.discount > 0 && (
                <div className="flex justify-between mb-12 text-success">
                  <span className="body1">Discount:</span>
                  <span className="heading4 color-inherit">{duration.discount * 100}% OFF</span>
                </div>
              )}
            </div>

            <hr className="my-24" />

            {/* Final Price */}
            <div className="text-center">
              <div className="mb-4">
                {isSubscription ? (
                  <>
                    <span className="heading1">
                      ₹{monthlyPrice.toFixed(2)}
                    </span>
                    <span className="body1">/month</span>
                    <p className="body2 mt-8">
                      Billed as {finalAmount.toLocaleString('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                        })} every {duration.years === 1 ? 'year' : `${duration.years} years`}
                    </p>
                  </>
                ) : (
                  <>
                    <span className="body1">Total Due Today</span>
                    <p className="heading1">
                        {finalAmount.toLocaleString('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                        })}
                    </p>
                  </>
                )}
              </div>

              <button
                onClick={() => navigate('#/checkout')}
                className="button button--primary w-100"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

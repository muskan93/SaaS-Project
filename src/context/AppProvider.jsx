import { useState } from 'react';
import { DURATIONS, PLANS } from '../MOCK_DATA';

import { AppContext } from './AppContext';

export const AppProvider = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState(PLANS[1]); // Default to Standard
  const [duration, setDuration] = useState(DURATIONS[0]); // Default to 1 Year
  const [isSubscription, setIsSubscription] = useState(false); // Default to One-Time

  // Dynamic Price Calculation
  const finalAmount = 
    selectedPlan.basePrice * duration.years * (1 - duration.discount);

  const monthlyPrice = finalAmount / (duration.years * 12);

  const value = {
    selectedPlan,
    setSelectedPlan,
    duration,
    setDuration,
    isSubscription,
    setIsSubscription,
    finalAmount,
    monthlyPrice,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

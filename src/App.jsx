
import { CancelPage, CheckoutPage, Header, PricingPage, SuccessPage} from './components';

import { AppProvider } from './context';

import { useHashRouter } from './hooks';

/**
 * Main App Component
 * Handles routing and renders the correct page
 */
export default function App() {
  const { route, navigate } = useHashRouter();

  // Simple router logic
  const renderPage = () => {
    switch (route) {
      case '#/checkout':
        return <CheckoutPage navigate={navigate} />;
      case '#/success':
        return <SuccessPage navigate={navigate} />;
      case '#/cancel':
        return <CancelPage navigate={navigate} />;
      case '#/pricing':
      default:
        return <PricingPage navigate={navigate} />;
    }
  };

  return (
    <AppProvider>
      <div className="container">
        <Header />
        <main className='content'>
          {renderPage()}
        </main>
      </div>
    </AppProvider>
  );
}

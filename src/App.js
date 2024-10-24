
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import UserQuiz from './components/QuizPage/userQuiz';
import CheckoutPage from './components/CheckoutPage/checkoutPage';
import OrderConfirmed from './components/OrderConfirmedPage/OrderConfirmed';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/quiz" element={<UserQuiz />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/order-confirmed" element={<OrderConfirmed />} />
            </Routes>
        </Router>
    );
};

export default App;

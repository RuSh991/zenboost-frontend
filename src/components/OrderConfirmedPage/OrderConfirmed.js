import React from 'react';
import { useLocation } from 'react-router-dom';
import './OrderConfirmed.css';

const OrderConfirmed = () => {
    const location = useLocation();
    const { customerName } = location.state || {};

    return (
        <div className="order-confirmed-container">
            <h1>Order Confirmed</h1>
            <p>Your order has been successfully placed!</p>
            <p>Thank you, {customerName || 'Valued Customer'}, for choosing ZenBoost. You will receive a confirmation email shortly.</p>
            <button onClick={() => window.location.href = '/'}>Go back Home</button>
        </div>
    );
};

export default OrderConfirmed;

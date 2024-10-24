import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./checkoutPage.css";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState("");

  const { discount } = location.state || {};
  const basePrice = 29;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [paymentInputLabel, setPaymentInputLabel] = useState("Card Number");
  const [creditCard, setCreditCard] = useState("");
  const [total, setTotal] = useState(basePrice);

  const handlePaymentMethodChange = (e) => {
    const method = e.target.value;
    setPaymentMethod(method);
    setPaymentInputLabel(
      method === "Google Pay" || method === "Paytm"
        ? "UPI Number"
        : "Card Number"
    );
  };

  useEffect(() => {
    setTotal(basePrice - (basePrice * discount) / 100);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTimeout(() => {
      navigate("/order-confirmed", { state: { customerName: name } });
    }, 2000);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {" "}
      <div className="checkout-container">
        <div className="left-section">
          <h2>Checkout Information</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            required
          />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            required
          />
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="State"
            required
          />
          <input
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder="Zip Code"
            required
          />
          <div className="image-card">
            <img src="/energyCan.png" alt="Energy Can" />
            <span className="quantity">X 12</span>
          </div>
        </div>
        <div className="right-section">
          <h2>Order Summary</h2>
          <div className="summary-details">
            <p>Discount: {discount}%</p>
            <p>Price Before Discount: ${basePrice.toFixed(2)}</p>
            <p>Total: ${total.toFixed(2)}</p>
          </div>
          <div className="payment-methods">
            <label>Payment Method</label>
            <select value={paymentMethod} onChange={handlePaymentMethodChange}>
              <option value="Google Pay">Google Pay</option>
              <option value="Paytm">Paytm</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
            </select>
            <input
              className="input-credit-card"
              type="text"
              value={creditCard}
              onChange={(e) => setCreditCard(e.target.value)}
              placeholder={paymentInputLabel}
              required
            />
          </div>
          <button type="submit">Submit Order</button>{" "}
        </div>
      </div>
    </form>
  );
};

export default CheckoutPage;

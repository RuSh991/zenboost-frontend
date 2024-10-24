import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./userQuiz.css";

const UserQuiz = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [reason, setReason] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      ageRange: age,
      zipCode: zipCode,
      deviceType: isMobile ? "mobile" : "desktop",
      deviceValue: isMobile ? 999 : 2999,
    };

    try {
      const response = await fetch(
        "https://zenboost-backend.onrender.com/api/calculate-discount",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const discount = data.discount || 0;

        navigate("/checkout", {
          state: { discount },
        });
      } else {
        console.error("Failed to calculate discount");
        alert("Failed to calculate discount. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing your request.");
    }
  };

  return (
    <div className="quiz-main-container">
    <div className="quiz-container">
      <h1 className="quiz-title">ZenBoost User Quiz</h1>
      <form onSubmit={handleSubmit} className="quiz-form">
        <div className="form-group">
          <label>Age Range:</label>
          <select value={age} onChange={(e) => setAge(e.target.value)} required>
            <option value="" disabled>
              Select your age range
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36-50">36-45</option>
            <option value="51+">46+</option>
          </select>
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other/Prefer not to say</option>
          </select>
        </div>
        <div className="form-group">
          <label>Reason for Purchase:</label>
          <select
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a reason
            </option>
            <option value="work">Work productivity</option>
            <option value="sports">Sports performance</option>
            <option value="study">Study aid</option>
            <option value="energy">General energy boost</option>
          </select>
        </div>
        <div className="form-group">
          <label>Zip Code:</label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
            minLength="5"
            maxLength="5"
          />
        </div>
        <button type="submit" className="submit-button">
          Submit Quiz
        </button>
      </form>
    </div>
    </div>
  );
};

export default UserQuiz;

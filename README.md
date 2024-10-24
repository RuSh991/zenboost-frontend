# ZenBoost Frontend

This repository implements the frontend for a web application simulating a purchase experience for ZenBoost. It includes a user quiz and a checkout page with a dynamic discount based on estimated purchasing power.

## Table of Contents

- [Features](#features)
- [Technical Requirements](#technical-requirements)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

## Features

1. **User Quiz**

   - Age range (18-25, 26-35, 36-45, 46+)
   - Gender (Male, Female, Other/Prefer not to say)
   - Reason for purchase (Work productivity, Sports performance, Study aid, General energy boost)
   - Zip code (5-digit US zip code)

2. **Checkout Page**

   - Display a simple product (ZenBoost, $29 for a pack of 12)
   - Show a personalized discount based on estimated purchasing power
   - Include fields for name, email, and payment methods

3. **Discount Calculation / Estimated Purchasing Power**

4. **Responsive Design**

## Technical Requirements

- Frontend Framework: React.js
- Backend: Find it [here](https://github.com/RuSh991/zenboost-backend).

## Getting Started

### Prerequisites

- Node.js installed on your local machine
- Git installed on your local machine

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/RuSh991/zenboost-frontend.git
   ```

2. Navigate to the project directory:

   ```sh
   cd zenboost-frontend
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

### Running the Application

1. Make sure the backend server is running.

2. If you want to connect to the local backend perform this step, else Skip: Update the URL for the API in [userQuiz.js](https://github.com/RuSh991/zenboost-frontend/blob/main/src/components/QuizPage/userQuiz.js) with `http://localhost:5500`

3. Start the frontend development server:

   ```sh
   npm start
   ```

4. Open your browser and go to `http://localhost:3000`

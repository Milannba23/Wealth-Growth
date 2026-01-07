# Wealth Growth Predictor (Compound Interest) 💰

The **Wealth Growth Predictor** is a high-performance web tool designed to help users visualize the power of compound interest and long-term savings. It features a modern, user-friendly interface that simplifies complex financial calculations.


## 🚀 Live Demo
**Test the application here:** [**https://milannba23.github.io/Wealth-Growth/**](https://milannba23.github.io/Wealth-Growth/)


## ✨ Features

* **Compound Interest Visualization**: See exactly how much your savings will grow over time with compounding.
* **Monthly Contribution Logic**: Calculates final wealth including initial deposits and recurring monthly savings.
* **Inflation-Adjusted Thinking**: Helps users plan their financial future by understanding growth rates.
* **Clean UI/UX**: Built with a focus on simplicity and mobile responsiveness.
* **Instant Reset**: Clear all inputs with a single click to perform new simulations.

## 🧪 QA Engineering Insights
To ensure financial accuracy, the following testing methods were applied:
- **Mathematical Verification**: Calculations cross-checked against standard financial formulas.
- **Data Integrity**: Verified that the app handles large numbers (millions) and decimals correctly without rounding errors.
- **Edge Case Testing**: Tested with 0% interest rates and 0 monthly contributions to ensure no crashes or logic loops.

## 🛠️ Technical Stack

* **HTML5**: Structured input fields for financial data.
* **CSS3**: Modern styling with focus on clarity and responsive design.
* **JavaScript (ES6+)**: Core calculation engine using the compound interest formula.

## 🧮 Calculation Logic

The application uses the following financial formula:

$$A = P(1 + r)^n + PMT \times \frac{(1 + r)^n - 1}{r}$$

*Where: A = Final Amount, P = Principal, r = Interest Rate, n = Number of periods, PMT = Monthly Payment.*

*Developed as part of a professional QA & Development portfolio.*
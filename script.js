function calculateSavings() {
    // 1. Get values from input fields
    let deposit = parseFloat(document.getElementById('initialDeposit').value);
    let monthlyAdd = parseFloat(document.getElementById('monthlyAdd').value);
    let annualInterest = parseFloat(document.getElementById('interestRate').value);
    let years = parseInt(document.getElementById('years').value);
    let currency = document.getElementById('currency').value;

    // 2. Basic validation to prevent errors
    if (isNaN(deposit) || isNaN(monthlyAdd) || isNaN(annualInterest) || isNaN(years)) {
        document.getElementById('result').innerHTML = "Please enter valid numbers in all fields.";
        return;
    }

    // 3. Conversion for the calculation
    let monthlyInterest = (annualInterest / 100) / 12;
    let totalMonths = years * 12;
    let balance = deposit;

    // 4. Calculation Loop
    for (let i = 1; i <= totalMonths; i++) {
        balance += monthlyAdd; 
        balance += balance * monthlyInterest; 
    }

    // 5. Calculate total amount invested vs profit
    let totalInvested = deposit + (monthlyAdd * totalMonths);
    let profit = balance - totalInvested;

    // 6. Display the result with 2 decimal places and formatted numbers
    // Using 'de-DE' for professional dot separator (e.g., 10.540,25)
    let options = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
    
    let formattedBalance = balance.toLocaleString('de-DE', options);
    let formattedInvested = totalInvested.toLocaleString('de-DE', options);
    let formattedProfit = profit.toLocaleString('de-DE', options);

    document.getElementById('result').innerHTML =
        `<div class="result-item">Future Wealth: <strong>${formattedBalance} ${currency}</strong></div>
         <div class="result-details">
            Total Invested: ${formattedInvested} ${currency} <br>
            Total Profit: <span class="profit-text">${formattedProfit} ${currency}</span>
         </div>`;
}

/**
 * Resets all input fields and clears the result display
 */
function resetFields() {
    // 1. Clear all numeric input values
    document.getElementById('initialDeposit').value = '';
    document.getElementById('monthlyAdd').value = '';
    document.getElementById('interestRate').value = '';
    document.getElementById('years').value = '';
    
    // 2. Reset currency selection to the first option (EUR)
    document.getElementById('currency').selectedIndex = 0;
    
    // 3. Remove the displayed result from the UI
    document.getElementById('result').innerHTML = '';
}
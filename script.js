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

    // 4. The Loop
    for (let i = 1; i <= totalMonths; i++) {
        balance += monthlyAdd; 
        balance += balance * monthlyInterest; 
    }

    // 5. Calculate total amount invested vs profit
    let totalInvested = deposit + (monthlyAdd * totalMonths);
    let profit = balance - totalInvested;

    // 6. Display the result with 2 decimal places and formatted numbers
    // Using 'de-DE' to get that professional dot separator (e.g., 10.540,25)
    let options = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
    
    let formattedBalance = balance.toLocaleString('de-DE', options);
    let formattedInvested = totalInvested.toLocaleString('de-DE', options);
    let formattedProfit = profit.toLocaleString('de-DE', options);

    document.getElementById('result').innerHTML =
        `After <b>${years}</b> years, your wealth will grow to <b>${formattedBalance} ${currency}</b>.<br>` +
        `Total invested: ${formattedInvested} ${currency} | Profit: <b>${formattedProfit} ${currency}</b>`;
}
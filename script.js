const currBalance = (amount) => {
    // Get the current balance and remove the '$' symbol if it exists
    let currAmount = document.getElementById('currBalance').value;
    
    // Remove the '$' symbol and convert to a number
    currAmount = parseInt(currAmount.replace('$', '').trim());

    // Convert the deposit amount to an integer and add to the current balance
    const newAmount = currAmount + parseInt(amount);

    // Update the balance with the new amount, adding the '$' symbol back
    document.getElementById('currBalance').value = `$ ${newAmount}`;
};

function amountDeposited() {
    const depositAmount = document.querySelector('#depositAmount').value;
    console.log(depositAmount);
    
    // Call the currBalance function with the deposit amount
    currBalance(depositAmount);  
}

function amountWithdraw() {
    const withdrawAmount = document.querySelector('#withdrawalAmount').value;
    let currAmount = document.querySelector('#currBalance').value;

    // Remove the '$' symbol and convert to an integer
    currAmount = parseInt(currAmount.replace('$', '').trim());

    // Check if the current balance is less than the withdrawal amount
    if (currAmount < parseInt(withdrawAmount)) {
        alert('Account balance is too low for this withdrawal');
        return;
    }

    // Subtract the withdrawal amount from the current balance
    const newAmount = currAmount - parseInt(withdrawAmount);

    // Update the balance
    document.getElementById('currBalance').value = `$ ${newAmount}`;
}

//input field function
function getInputValue(depositId) {
    //debugger;
    const inputField = document.getElementById(depositId);
    const inputAmountText = inputField.value;
    const inputAmountValue = parseFloat(inputAmountText);

    //empty input box
    inputField.value = '';
    return inputAmountValue;
}
// summary of the money field function
function updateTotalField(totalID, totalAmount) {
    const total = document.getElementById(totalID);
    const totalText = total.innerText;
    const previousTotal = parseFloat(totalText);

    total.innerText = totalAmount + previousTotal;
    return total;
}
//get current balance 
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

//Total Balance update fuction
function totalBalance(amount, isadd) {
    const balanceTotal = document.getElementById('balance-total');

    const previousBalanceTotal = getCurrentBalance();
    //if isadd == true then add the balance else isadd == false minus the balance
    if (isadd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
    //return balanceTotal;
}

//-------------------handle deposit btn---------------------
document.getElementById('deposit-btn').addEventListener('click', function () {

    //get new deposite balance 
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        // get current deposite balance and update with new Balance
        updateTotalField('deposite-total', depositAmount);
        // get previous Total balance and update new Balance
        totalBalance(depositAmount, true);
    }
    else {
        alert('Please input a positve number for deposit');
    }
});

//-------------------handle withdraw btn---------------------
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //get new withdraw balance 
    const newWithdrawInput = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (newWithdrawInput > 0) {
        if (newWithdrawInput <= currentBalance) {
            //get current withdraw amount and add new withdraw balance
            updateTotalField('withdraw-total', newWithdrawInput);
            // get previous Total balance and update new Balance
            totalBalance(newWithdrawInput, false);
        }
        else {
            alert('You can not withdraw more than what you have in your account');
        }
    }

    else {
        alert('Please input a positve number');
    }
});
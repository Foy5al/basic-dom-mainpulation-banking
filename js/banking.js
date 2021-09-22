//handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
    //get amount of new deposite
    const depositInput = document.getElementById('deposit-input');
    //convert deposit amount text to number
    const depositAmount = parseFloat(depositInput.value);

    //get total deposite amount 
    const depositeTotal = document.getElementById('deposite-total');
    //convert it from text to number
    const previousDepositTxt = depositeTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositTxt);

    //add new deposit input to previous deposite
    const newDepositTotal = previousDepositAmount + depositAmount;

    //update the previous deposite value
    depositeTotal.innerText = newDepositTotal;

    //update Balance
    const mainBalance = document.getElementById('balance-total');
    const balancetxt = mainBalance.innerText;
    const balance = parseFloat(balancetxt);

    mainBalance.innerText = balance + newDepositTotal;


    //clear input field of deposite
    depositInput.value = '';
    // inner text na dile update hobe na span er vitorer text karon oita input field na 

});

//withdraw balance 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //get the input withdraw amount and convert them into number
    const withdraw = document.getElementById('withdraw-input');
    //const withdrawTxt = withdraw.value;
    const withdrawInput = parseFloat(withdraw.value);

    //current amount get an convert to number
    const currentWithdrawAmount = document.getElementById('withdraw-total');
    const currentWithdrawAmountTxt = currentWithdrawAmount.innerText;
    const withdrawAmountNum = parseFloat(currentWithdrawAmountTxt);

    //add input withdraw amount with current amount
    currentWithdrawAmount.innerText = withdrawAmountNum + withdrawInput;

    //update balance 
    const balance = document.getElementById('balance-total');
    const balanceNum = parseFloat(balance.innerText);

    balance.innerText = balanceNum - withdrawInput;

    withdraw.value = '';
    // const currentWithdrawAmount = document.getElementById('withdraw-total');


});
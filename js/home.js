document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const amountMoney = document.getElementById('add-money-input').value; //getting the amount of money
    const inputPin = document.getElementById('input-pin').value; //getting the pin
    // verification of the pin
    //wrong way to validate the pin
    if(inputPin === '1234'){
        const balance = document.getElementById('current-balance').innerText
        //adding money to the account
        let newBalance = parseFloat(balance) + parseFloat(amountMoney);
        //updating total balance
        document.getElementById('current-balance').innerText = newBalance;

    }
    else{
        console.log('failed to add money');
    }
});
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const amountMoney = document.getElementById('add-money-input').value; //getting the amount of money
    const inputPin = document.getElementById('input-pin').value; //getting the pin
    // verification of the pin
    //wrong way to validate the pin
    if(inputPin === '1234'){
        const balance = document.getElementById('current-balance').innerText
        //adding money to the account
        let newBalance = parseFloat(balance) - parseFloat(amountMoney);
        //updating total balance
        document.getElementById('current-balance').innerText = newBalance;

    }
    else{
        console.log('failed to add money');
    }
});

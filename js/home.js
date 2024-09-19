document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const amountMoney = document.getElementById('add-money-input').value; //getting the amount of money
    console.log(amountMoney);
    const inputPin = document.getElementById('input-pin').value;
    console.log(inputPin);
});
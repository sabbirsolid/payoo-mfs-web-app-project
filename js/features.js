document.getElementById('cash-out-button-1').addEventListener('click',function(){
    document.getElementById('add-money-page').classList.add('hidden')
    document.getElementById('cash-out-page').classList.remove('hidden')
});
document.getElementById('add-money-button-1').addEventListener('click',function(){
    document.getElementById('add-money-page').classList.remove('hidden')
    document.getElementById('cash-out-page').classList.add('hidden')
});

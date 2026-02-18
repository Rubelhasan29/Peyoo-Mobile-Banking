document.getElementById('cashout-btn')
    .addEventListener('click', function(){
        // 1. get the agent number & validate
        const agentNumber = document.getElementById('cashout-number');
        const cashoutNumber = agentNumber.value;

        if(cashoutNumber.length !=11){
            alert('Invalid Agent Number');
            return;
        }
        // console.log(cashoutNumber);

        // 2. get the amount
        const cashoutAmountInput = document.getElementById('cashout-amount');
        const cashoutAmount = cashoutAmountInput.value;
        // console.log(cashoutAmount);

        // 3. get the current balance
        const balanceElement = document.getElementById('balance');
        const balance = balanceElement.innerText;
        // console.log(balance)

        // 4. calculate new balance

        const newBalance = Number(balance) - Number(cashoutAmount);
        console.log('newBalance', newBalance);

        if(newBalance < 0){
            alert('Insufficient Balance')
            return;
        }
        // 5. get the pin verify
        const cashoutPinInput = document.getElementById('cashout-pin');
        const pin = cashoutPinInput.value;
        if(pin == '1129'){
            // 5-1. true:: show alert > set balance
            alert('Cashout Successful')
            balanceElement.innerText = newBalance;

        }else{
            // 5-1. true:: show an error alert > return

            alert('Invalid Pin')
            return;
        }

    })
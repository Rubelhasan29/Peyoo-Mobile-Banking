











document.getElementById('add-money-btn')
    .addEventListener('click', function () {
        console.log('add-money button clicked')

        // 1. bank-account

        const bankAccount = getValueFromInput('add-money-bank');
        if (bankAccount === 'Select Bank') {
            alert('Please Select a Bank')
            return;
        }

        // 2. get the account Number

        const accno = getValueFromInput('add-money-number')
        if (accno.length != '11') {
            alert('Invalid acc Number')
            return;
        }
        
        //3. get amount

        const amount = getValueFromInput('add-money-amount')

        const newBalance = getBalance() + Number(amount);

        const pin = getValueFromInput('add-money-pin');
        if(pin == "1129"){
            alert('Add money Success')
            setBalance(newBalance);
        }else{
            alert('Invalid Pin')
        }


    })
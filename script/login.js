// document.getElementById("login-btn")
//     .addEventListener('click', function () {
//         // 1. Get the mobile Number
//         const numberInput = document.getElementById('input-number');
//         const contactNumber = numberInput.value;
//         // 2. Get the pin

//         const InputPin = document.getElementById('input-pin');
//         const pinNumber = InputPin.value;
//         // 3. Match the mobile number
//         if(contactNumber == '01406229091' && pinNumber == '1129'){
//             // 4. true :::>> alert> homepage

//             alert("Login Success")

//             // window.location.replace('/home.html')
//             window.location.assign('/home.html')
//         }else{
//             // 5. true :::>> alert> Return

//             alert('Login Failed')
//             return;
//         }
//     })

document.getElementById('login-btn')
    .addEventListener('click', function(){
        const inputNumber = document.getElementById('input-number')
        const contactNumber = inputNumber.value;
        

        const inputPin = document.getElementById('input-pin')
        const pin = inputPin.value;
        
        if(contactNumber == '01406229091' && pin == '1129'){
            alert('Login Success')
            window.location.assign('/home.html')
        }else{
            alert('Login Filed')
            return;
        }
    })
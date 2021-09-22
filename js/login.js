document.getElementById('subBtn').addEventListener('click', function () {
    //get user mail
    let emailField = document.getElementById('email');
    const emailAdd = emailField.value;
    //get user password
    let passField = document.getElementById('password');
    const pass = passField.value;
    //check validation 
    if (emailAdd == 'abc@bap.com' && pass == 'secret') {
        window.location.href = "banking.html";
    }
    else {
        alert('invalid user or password');
    }
})
document.getElementById('subBtn').addEventListener('click', function () {
    //get user mail
    let emailField = document.getElementById('email');
    const emailAdd = emailField.value;
    //get user password
    let passField = document.getElementById('password');
    const pass = passField.value;
    //check validation 
    if (emailAdd == 'money@heist.com' && pass == 'professor') {
        window.location.href = "banking.html";
    }
    else {
        alert('invalid user or password');
    }
});
document.getElementById('access').addEventListener('click', function () {
    const para = document.createElement('p');
    const paraText = document.createTextNode("mail: money@heist.com || pass: professor");
    para.appendChild(paraText);

    const accessBtn = document.getElementById('acc-sec');
    accessBtn.appendChild(para);
});
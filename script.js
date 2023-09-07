const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*=-_";

const pLength = document.getElementById('plength');
const upperCase = document.getElementById('puppercase');
const lowerCase = document.getElementById('plowercase');
const pNumber = document.getElementById('pnumber');
const pSymbol = document.getElementById('psymbol');
const submit = document.getElementById('submit');
const password = document.getElementById('pwd');

submit.addEventListener('click', () => {
    const length = parseInt(pLength.value);
    let initPwd = '';

    if (getCheckedCount([upperCase, lowerCase, pNumber, pSymbol]) < 2) {
        alert("Please select at least two options.");
        return;
    }

    if (upperCase.checked) initPwd += uCase;
    if (lowerCase.checked) initPwd += lCase;
    if (pNumber.checked) initPwd += number;
    if (pSymbol.checked) initPwd += symbol;

    password.value = generatePwd(length, initPwd);
});

function generatePwd(length, initPwd) {
    let pass = '';
    const initPwdLength = initPwd.length;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * initPwdLength);
        pass += initPwd.charAt(randomIndex);
    }
    return pass;
}

const copy = document.getElementById('copy');
copy.addEventListener('click', () => {
    if (password.value === '') {
        alert("Please generate a password!");
    } else {
        password.select();
        document.execCommand("copy");
        $("#pwdcopy").show();
        setTimeout(function () {
            $("#pwdcopy").hide();
        }, 7000);
    }
});

function getCheckedCount(checkboxes) {
    return checkboxes.filter(checkbox => checkbox.checked).length;
}

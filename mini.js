let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let sum = document.getElementById("sum");
let sub = document.getElementById("sub");
let divi = document.getElementById("divi");
let multi = document.getElementById("multi");
let result = document.querySelector(".result");

sum.addEventListener("click",()=>{
    let total = parseFloat(num1.value) + parseFloat(num2.value);
    result.innerHTML = total;

})

sub.addEventListener("click",()=>{
    let sub = parseFloat(num1.value) - parseFloat(num2.value);
    result.textContent = sub;

})

divi.addEventListener("click",()=>{
    let divi = parseFloat(num1.value) / parseFloat(num2.value);
    result.textContent = divi;

})

multi.addEventListener("click",()=>{
    let multi = parseFloat(num1.value) * parseFloat(num2.value);
    result.textContent = multi;

})

// anything typed inside thetextbox is seeen as a string
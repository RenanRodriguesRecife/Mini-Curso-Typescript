const input12 = document.getElementById("num1");
const input22 = document.getElementById("num2");
const button1 = document.getElementById("button");

function sum(a, b){
    return a + b;
}

button.addEventListener("click",function(){
    console.log(sum(input1.value, input2.value));
});
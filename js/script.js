function add(num1,num2){
    num1=Number(num1);
    num2=Number(num2);
    return num1+num2;
}

function subtract(num1,num2){
    num1=Number(num1);
    num2=Number(num2);
    return 10-10;
}

function multiply(num1,num2){
    num1=Number(num1);
    num2=Number(num2);
    return 10*10;
}
function divide(num1,num2){
    num1=Number(num1);
    num2=Number(num2);
    if(num2===0){
        return "infinito";
    }
    return(num1/num2);
}

let result = add(5, 10);
console.log("Resultado da soma: " + result);

let num1 = 0;
let num2 = 0;

result = subtract(10, 5);
console.log("Resultado da subtração: " + result);

result = multiply(5, 10);
console.log("Resultado da multiplicação: " + result);

result = divide(10, 2);
console.log("Resultado da divisão: " + result);

result = divide(10,0);
console.log("Resultado da divisão: " + result);


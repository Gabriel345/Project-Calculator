
function add(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 + num2;
}

function subtract(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 - num2;
}

function multiply(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 * num2;
}

function divide(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num2 === 0 ? "Erro: divisão por zero" : num1 / num2;
}

// Variáveis globais
let num1 = null;
let num2 = null;
let oper = null;
let result = null;
let overwrite = true;

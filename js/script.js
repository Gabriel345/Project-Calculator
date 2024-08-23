document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('button'));
    let currentOperation = '';
    let firstNumber = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.textContent;

            // Se o botão clicado for um número ou ponto decimal
            if (value >= '0' && value <= '9' || value === '.') {
                currentOperation += value;
                display.value = currentOperation;
            } 
            // Se o botão clicado for 'C' para limpar a operação
            else if (value === 'C') {
                currentOperation = '';
                firstNumber = '';
                operator = '';
                display.value = '';
            } 
           
            else if (value === '=') {
                if (firstNumber && operator && currentOperation) {
                    display.value = calculate(firstNumber, operator, currentOperation);
                    currentOperation = display.value; // Atualiza a operação com o resultado
                    operator = '';
                    firstNumber = '';
                }
            } 
            // Se o botão clicado for um operador (+, -, ×, ÷)
            else if (['+', '-', '×', '÷'].includes(value)) {
                if (currentOperation) {
                    firstNumber = currentOperation;
                    operator = value;
                    display.value = `${firstNumber} ${operator}`;
                    currentOperation = ''; 
                }
            }
        });
    });

    function calculate(num1, operator, num2) {
        switch (operator) {
            case '+':
                return add(num1, num2);
            case '-':
                return subtract(num1, num2);
            case '×':
                return multiply(num1, num2);
            case '÷':
                return divide(num1, num2);
            default:
                return '';
        }
    }

    function add(num1, num2) {
        return Number(num1) + Number(num2);
    }

    function subtract(num1, num2) {
        return Number(num1) - Number(num2);
    }

    function multiply(num1, num2) {
        return Number(num1) * Number(num2);
    }

    function divide(num1, num2) {
        return num2 === 0 ? 'Erro: divisão por zero' : Number(num1) / Number(num2);
    }
});
// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')();

let peso = Number(prompt('Digite seu peso em kg: '));
let altura = Number(prompt('Digite sua altura em metros: '));

if (altura <= 0) {
    console.log('Erro: A altura deve ser um valor positivo e diferente de zero.');
} else {
    let imc = peso / (altura ** 2);
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);

    if (imc < 18.5) {
        console.log('Abaixo do peso');
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log('Peso normal');
    } else if (imc >= 25 && imc <= 29.9) {
        console.log('Sobrepeso');
    } else if (imc >= 30 && imc <= 34.9) {
        console.log('Obesidade grau I');
    } else if (imc >= 35 && imc <= 39.9) {
        console.log('Obesidade grau II');
    } else {
        console.log('Obesidade grau III');
    }
}

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar,
// utilizando uma estrutura de controle if

const prompt = require('prompt-sync')();

let num = Number(prompt('Digite um número para saber se é par ou ímpar: '));

if (isNaN(num)) {
    console.log('Erro: Você não digitou um número válido.');
} else {
    if (num % 2 === 0) {
        console.log(`O número ${num} é par.`);
    } else {
        console.log(`O número ${num} é ímpar.`);
    }
}

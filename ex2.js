//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require('prompt-sync')();

let age = Number(prompt('Digite sua idade: '));
let ageGroup;

if (age <= 12) {
    ageGroup = 'criança';
} else if (age <= 17) {
    ageGroup = 'adolescente';
} else if (age <= 59) {
    ageGroup = 'adulto';
} else {
    ageGroup = 'idoso';
}

console.log(`Você é ${ageGroup}`);

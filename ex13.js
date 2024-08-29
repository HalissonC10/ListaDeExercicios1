// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')();

let soma = 0;
let contagem = 0;

for (let i = 0; i < Infinity; i++) {
    let numero = parseFloat(prompt('Digite um número decimal (ou 0 para terminar): '));
     if (numero === 0) {
        break;
    }
    soma += numero;
    contagem++;
}
 if (contagem > 0) {
    let media = soma / contagem;
    console.log(`A média aritmética dos números é: ${media}`);
} else {
    console.log('Nenhum número válido foi digitado.');
}

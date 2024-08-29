// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')()

let numApple = Number(prompt('Digite o quanto de maças foi comprada: '))
let preco = 0;

if (isNaN(numApple) || numApple < 0) {
    console.log('Por favor, insira um número válido de maçãs.');
} else if( numApple < 12){
   preco =  numApple * 0.3
    console.log(`A unidade custou 30 centavos e o total foi R$${preco.toFixed(2)} reais`)
} else {
    preco = numApple * 0.25
    console.log(`A unidade custou 25 centavos e o total foi R$${preco.toFixed(2)} reais`)
}
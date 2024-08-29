// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.  

const prompt = require('prompt-sync')()

let A = Number(prompt('Digite o valor A: '))
let B = Number(prompt('Digite o valor B: '))
let C = Number(prompt('Digite o valor C: '))

if (A + B > C && A + C > B && B + C > A) {
    if (A === B && B === C) {
        console.log("Triângulo Equilátero");
    } else if (A === B || A === C || B === C) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
} else {
    console.log("Os valores fornecidos não formam um triângulo.");
}
1
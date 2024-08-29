// Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let fib1 = 0;
let fib2 = 1;
const quantidade = 10;

console.log('Sequência de Fibonacci:');
for (let i = 0; i < quantidade; i++) {
    console.log(fib1);

    let proximoFib = fib1 + fib2;
    fib1 = fib2;
    fib2 = proximoFib;
}

//Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')()
console.log('Escolha uma opção:')
console.log('1. Descobrir meu nome')
console.log('2. Exibir a data e hora atuais')
console.log('3. Sair')

let option = prompt('Digite o número da sua escolha: ')

switch (option) {
    case '1':
        console.log('Eu me chamo Halisson')
        break
    case '2':
        let currentDate = new Date();3
        console.log(`A data e hora atuais são: ${currentDate}`)
        break
    case '3':
        console.log('Saindo.. Até logo!')
        break
    default:
        console.log('Opção inválida. Por favor, escolha uma opção entre 1 e 3.')
}
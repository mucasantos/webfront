/*
Quinta:basico javascript /  getElementbyId

*/

const titulo = document.getElementById("titulo")
//Inputs
const nomeInput = document.getElementById("nome")
const emailInput = document.getElementById("email")
const foneInput = document.getElementById("telefone")

//Outputs
const resultNome = document.getElementById("result-nome")
const resultEmail = document.getElementById("result-email")
const resultFone = document.getElementById("result-fone")

titulo.textContent = "Senai Cotia 2023"

function salvar() {

    resultNome.textContent = nomeInput.value
    resultEmail.textContent = emailInput.value
    resultFone.textContent = foneInput.value

}














/*
//Git básico
//Introdução Javascript


var nome = "Samuel"
let idade = 45.8
const anoNascimento = 1977
let idadeEsposa = "45"
let idadeString = "45"

//= atribuição
//== comparar se é igual
//=== comparar se é exatamente igual

let num = 98 
const pi = 3.14

console.log(typeof(nome))

switch (num) {
    case 7:
        console.log("Sete")
        break;
    case 5:
        console.log("Cinco")
        break;
    case 3:
        console.log("Tres")
        break;
    case 4:
        console.log("quatro")
        break;

    default:
        console.log("Não sei....")
        break;
}

//Array

//Acessamos o array fazendo ref ao index


let lista = [1,2,3,4,5,6]

// && 
// ||
// !

for (let index = 0; index < lista.length + 1 ; index++) {
    const element = lista[index];

    console.log(element)
    
}
*/





/*
Se o cliente comprar mais de 8 Kg em frutas ou o 
valor total da compra ultrapassar R$ 25,00, 
receberá ainda um desconto de 10% sobre este total.  

Crie uma aplicação para ler a quantidade (em Kg) 
de morangos e a quantidade (em Kg) de maças adquiridas 
e escreva o valor a ser pago pelo cliente. 

Morango até 5kg => 2.5 // Acima de 5kg =>2.2
Maça    até 5kg => 1.8 // Acima de 5kg =>1.5

*/
const precoMaca = 2.5
const precoMorango = 1.8
const diferenca = 0.3
const descontoPorcent = 0.9

let totalMorango = 0
let totalMaca = 0


//inputs do usuario
const qtdMaca = document.getElementById("qtdMaca")
const qtdMorango = document.getElementById("qtdMorango")

//output dos valores
const valorFinal = document.getElementById("final")
const valorFinalDesconto = document.getElementById("final-desc")

function calcular() {

    if (qtdMaca.value > 5) {
        totalMaca = qtdMaca.value * (precoMaca - diferenca)
    }else {
        totalMaca = qtdMaca.value * precoMaca
    }

    if (qtdMorango.value > 5) {
        totalMorango = qtdMorango.value * (precoMorango - diferenca)
    } else {
        totalMorango = qtdMorango.value * precoMorango
    }

    valorFinal.textContent = totalMaca + totalMorango

    if ((qtdMaca.value + qtdMorango.value) > 8 || (totalMaca + totalMorango) > 25) {
        valorFinalDesconto.textContent = ((totalMaca + totalMorango) * descontoPorcent).toFixed(2)
    } else {
        valorFinalDesconto.textContent = (Number(totalMaca + totalMorango)).toFixed(2)
    }

}




//

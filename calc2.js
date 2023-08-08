const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const resultado = document.getElementById('resultado')


function calculo(params) {

    //a função eval verifica se pode executar o que foi passado

    let valor = eval("Number(number1.value)" + params + "Number(number2.value)")
    resultado.textContent = valor

}


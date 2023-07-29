const numberOne = document.getElementById("number1")
const numberTwo = document.getElementById("number2")

const resultado = document.getElementById("resultado")


function calculo(operacao) {

    switch (operacao) {
        case "somar":
            resultado.textContent =
                Number(numberOne.value)
                + Number(numberTwo.value)
            break;

        case "dividir":
            resultado.textContent =
                Number(numberOne.value)
                / Number(numberTwo.value)
            break;

        case "subtrair":
            resultado.textContent =
                Number(numberOne.value)
                - Number(numberTwo.value)
            break;

        case "multiplicar":
            resultado.textContent =
                Number(numberOne.value)
                * Number(numberTwo.value)
            break;
        default:
            alert("Não conheço ... :0(")

            break;
    }

}


const numberOne = document.getElementById("number1")
const numberTwo = document.getElementById("number2")

const resultado = document.getElementById("resultado")
const statusDiv = document.getElementById("status")


function calculo(operacao) {


    try {
       const finalResult = eval("Number(numberOne.value)" + operacao + "Number(numberTwo.value)")
        if (isNaN(finalResult) || !isFinite(finalResult)) {
            statusDiv.style.backgroundColor = "red"
            statusDiv.style.borderRadius = "15px"

            alert("Algo Errado aconteceu...")
            return
        }
        resultado.textContent = finalResult

/*
Menor q 0 ==> cor vermelha
maior q 50 ==> cor azul
maior q 100 ==> cor verde
*/


resultado.style.color = "blue"

    } catch (error) {
        alert(error)
    }

}


//Criar um componente HTML
//usar o innerHTML
//Usar a concatenação de Javascript

const titulo = document.getElementById("titulo")
const minhaDiv = document.getElementById("minha-div")
const buttonAdd = document.getElementById("button")
const userName = document.getElementById("nome")

let idade = 26

buttonAdd.addEventListener('click', () => {


    minhaDiv.innerHTML = `
    <h2>${idade}</h2>
    <button>Pode clicar...</button>
    `

})


minhaDiv.addEventListener(
    "click", function () {
        titulo.textContent = "Mudei mesmo!!"
        titulo.style.color = "yellow"
        titulo.style.backgroundColor = "red"
        minhaDiv.style.borderRadius = "10px"
    }
)


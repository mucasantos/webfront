//Criar um componente HTML
//usar o innerHTML
//Usar a concatenação de Javascript


checked

const titulo = document.getElementById("titulo")
const minhaDiv = document.getElementById("minha-div")
const buttonAdd = document.getElementById("button")

const userName = document.getElementById("nome")
const userEmail = document.getElementById("email")
const userProfissao = document.getElementById("profissao")


buttonAdd.addEventListener('click', () => {

    const novaTag = document.createElement("div")
    novaTag.classList.add("flip-card")

    novaTag.innerHTML = `
    
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="avatar/pig1.png" alt="Avatar" style="width:300px;height:300px;">
              </div>
              <div class="flip-card-back">
                <h1>${userName.value}</h1>
                <p>${userProfissao.value}</p>
                <p>${userEmail.value}</p>
              </div>
            </div>
          
    `
    minhaDiv.appendChild(novaTag)

})


minhaDiv.addEventListener(
    "click", function () {
        titulo.textContent = "Mudei mesmo!!"
        titulo.style.color = "yellow"
        titulo.style.backgroundColor = "red"
        minhaDiv.style.borderRadius = "10px"
    }
)


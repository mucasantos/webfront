const titulo = document.getElementById("titulo")
const minhaDiv = document.getElementById("minha-div")


minhaDiv.addEventListener(
   "click", function () {
        titulo.textContent = "Mudei mesmo!!"
        titulo.style.color = "yellow"
        titulo.style.backgroundColor = "red"
        minhaDiv.style.borderRadius ="10px"
    }
)


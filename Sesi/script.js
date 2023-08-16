/*
Review:
DOM: 
- addEventListener
- textContent - OK

Variáveis - OK
For / if - OK
Function - OK

*/

const minhaDiv = document.getElementById("minha-div")
const buttons = document.querySelectorAll('button')

//forEach na lista de botoes, como melhoria de código
// ao invés de criar uma const para cada id

buttons.forEach(element => {
    element.addEventListener('click', ()=> {
        minhaDiv.style.backgroundColor = element.id
    }) 
})

minhaDiv.addEventListener('mouseover', ()=> {
    minhaDiv.style.backgroundColor = 'pink'  
})

//addEventListener -> Ele precisa de 2 parâmentros: a ação e a função que será executada

/**
 * //melhoria do código
const buttons = document.querySelectorAll('button')

buttons.forEach(element => {
    element.addEventListener('click', ()=>{
        minhaDiv.style.backgroundColor = element.id
    })
})

 * 
 */
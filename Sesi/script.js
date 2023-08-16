/*
Review:
DOM: 
- addEventListener
- textContent - OK
Variáveis - OK
For / if - OK
Function - OK
*/
//Percorrendo listas
/* const listaCores = [
    { cor: 'blue', local: 'Brazil' }, //elemento 0
    { cor: 'green', local: 'England' } // elemento 1
]

listaCores.forEach(element => {
    console.log(element.local)
}) */

const minhaDiv = document.getElementById("minha-div")
//ME devolve uma lista --> elementos html
const buttons = document.querySelectorAll('button')

//forEach na lista de botoes, como melhoria de código
// ao invés de criar uma const para cada id

buttons.forEach(element => {
    element.addEventListener('click', () => {
        minhaDiv.style.backgroundColor = element.id
    })
})

/**Utilizando o createElement e o appendChild, elimine 
 * os botões do HTML, criando-os de forma dinâmica
 * a partir de uma lista de cores (Cores em inglês).
 * 
 */
/*
var px = 0;
var py = 0;

document.addEventListener('keydown', (event) => {
    var tecla = event.key;


    console.log(tecla)
    if (tecla == "ArrowLeft") {
        //Esquerda
        px -= 10;
        minhaDiv.style.left = px + "px";
    } else if (tecla == "ArrowRight") {
        //Direita
        px += 10;
        minhaDiv.style.left = px + "px";
    }
    if (tecla == "ArrowUp") {
        //Cima
        py -= 10;
        minhaDiv.style.top = py + "px";
    } else if (tecla == "ArrowDown") {
        //baixo
        py += 10;
        minhaDiv.style.top = py + "px";
    }
})
*/
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
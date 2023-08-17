/*
Review:
DOM: 
- addEventListener
- textContent - OK
Variáveis - OK
For / if - OK
Function - OK
forEach - OK
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
const elementos = document.getElementById("elementos")
//Criar a lista com as cores
const listColors = [
    { cor: 'blue', nome: 'Azul' }, 
    { cor: 'yellow', nome: 'Amarelo' },
    { cor: 'green', nome: 'Verde' },
    { cor: 'grey', nome: 'Cinza' },
    { cor: 'gold', nome: 'Dourado' },
    { cor: 'white', nome: 'Branco' },
]
//Criar elementos a partir da lista
listColors.forEach(elemento => {
    //Criei o botão e em seguida, atribuir os valores
    let buttonColor = document.createElement('button')
    //Propriedades do botão
    buttonColor.id = elemento.cor
    buttonColor.textContent = elemento.nome
    buttonColor.style.borderColor = elemento.cor
    buttonColor.style.color = 'black'   
    //Adcionei o listener...
    buttonColor.addEventListener('click', () => {
        minhaDiv.style.backgroundColor = elemento.cor
    })
    elementos.appendChild(buttonColor)
})
//ME devolve uma lista --> elementos html
//const buttons = document.querySelectorAll('button')

//forEach na lista de botoes, como melhoria de código
// ao invés de criar uma const para cada id
//buttons.forEach(element => {
//    element.addEventListener('click', () => {
//        minhaDiv.style.backgroundColor = element.id
//    })
//})

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
// Fazer ref ao dad
const elementDad = document.getElementById('elementos')
const resultado = document.getElementById('resultado')
//passo 02
const myElement = document.createElement('button')

myElement.classList.add('my-btn')

myElement.textContent = "Pode Clicar"


myElement.addEventListener('click', () => {
    alert('Você clicou....')
})

//passo 03
elementDad.appendChild(myElement)

//Utilizando um 'for', crie 10 botões.

for (let index = 1; index < 11; index++) {
    const myElement = document.createElement('button')
    myElement.textContent = index
    elementDad.appendChild(myElement)
}

let botoes = [
    {
        id: 'btn-blue',
        name: "Azul",
        color: 'blue',
    },
    {
        id: 'btn-green',
        name: "Verde",
        color: 'green',
    },
    {
        id: 'btn-violet',
        name: "Violet",
        color: 'violet',
    },
    {
        id: 'btn-red',
        name: "Vermelho",
        color: 'red',
    },
    {
        id: 'btn-grey',
        name: "Cinza",
        color: 'grey',
    },
    {
        id: 'btn-yellow',
        name: "Yellow",
        color: 'yellow',
    },
]

botoes.forEach(item => {
    const myElement = document.createElement('button');
    myElement.textContent = item.name;
    myElement.id = item.id;
    myElement.style.backgroundColor = item.color;

    myElement.addEventListener('click', ()=>{
        resultado.textContent = item.name
    })
    elementDad.appendChild(myElement)
})




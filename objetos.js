//Criar objetos em Javascript
//1.Forma - literal
const userName = document.getElementById("name")
const prod = document.getElementById("product")
const color = document.getElementById("cor")
const button = document.getElementById("btn")


const person = { 
    name: "Samuel Santos", 
    age: 45, 
    weight: "98kb", 
    gender: "Mininu",
    height: 1.83,
    family: {
        wife: "Dora Santos",
        son: "Felipe Santos",
        son2: "Luis Antônio"
    },
    cars: ["Dodge","Fit", "Hillux", "BMW", "Ferrari"],
    work: {
        company: "Senai SP",
        address: "Rua Direita, 222",
        ocuppation: "Instrutor PIII",
        salary: "R$116.235,89"
    }, 
}

let produto = {}
let produtos = []

button.addEventListener('click', ()=>{

    produto = {
        id: Math.floor(Math.random() * 21),
        name: prod.value,
        color: color.value
    }
    
    produtos.push(produto)
    console.log(produtos)

})

userName.textContent= person.name




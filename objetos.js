//Criar objetos em Javascript
//1.Forma - literal
const userName = document.getElementById("name")
const prod = document.getElementById("product")
const color = document.getElementById("cor")
const button = document.getElementById("btn")


const person = { 
    name: "Samuel Santos", 
    born: 1977, 
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
    calcAge: function () {
        const currentData = new Date(Date.now())
        return currentData.getFullYear() - this.born       
    }

}



let produto = {}
let produtos = []

button.addEventListener('click', ()=>{
    produto = {
        //Gera id randomico e arredonda
        id: Math.floor(Math.random() * 21),
        name: prod.value,
        color: color.value
    }
    //método para adicionar dado em uma lista
    produtos.push(produto)
    console.log(produtos)

    console.log(person.calcAge())
   
   
   



})

userName.textContent= person.name




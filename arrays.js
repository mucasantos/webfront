//Métodos de array
//join() --> transf em uma string

let a = ["s", "a", "m", "u"]

console.log(a.join(""))

//reverse()

let nums = [1, 2, 3, 4]

console.log(nums.reverse())

//sort() --> ordena

let meuNome = ["S", "a", "m", "u", "e", "l"]
console.log(meuNome.slice(0, 4))

let stack = [1, 2, 3, 4]

console.log(stack)
stack.pop()
console.log("Dpois do pop")
console.log(stack)


let namesOb = [
    {
        id: 1,
        name: "Samuel Santos",
        end: "Rua Dart"
    },
    {
        id: 2,
        name: "Jojoca",
        end: "Rua JAva"
    },
    {
        id: 3,
        name: "Bilu Nla",
        end: "Rua Python"
    },
    {
        id: 4,
        name: "Ted Burd",
        end: "Rua Javascript"
    },


]

let euQuero = "Ted Burd"

let final = namesOb.find(produto => produto.name === euQuero)

console.log(final)
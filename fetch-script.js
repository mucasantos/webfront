const url = "https://dummyjson.com/products";
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/ditto"
const urlRick = "https://rickandmortyapi.com/api/character"

//Fetch ==> vai no servidor (nodeJS - feito por nós)
//e através do endpoint/url, PEGA as informações

//nomedafunc(URL, {})



fetch(url, { method: "get" })
.then(result => result.json())
.then(dados => showInfo(dados))

function showInfo(result) {
    
    console.log(result.products)

    result.products.forEach(element => {
        console.log(element.description)
        console.log(element.images[0])
    });
}
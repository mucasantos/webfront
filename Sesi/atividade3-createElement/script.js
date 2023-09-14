
//elemento pai para inserir os cards
const elementoDad = document.getElementById('container')

//objeto card 

const cards = [
  {
    imagem: "imagens/londres.jpg",
    city: "Paraiba",
    temp: "60 F",
    days: ['DOM', 'SEG', 'TER'],
    icons: ['imagens/moon.png', 'imagens/moon2.png', 'imagens/rain.png'],
    report: [
      {
        day: 'MON',
        icon: 'imagens/moon.png'
      }
    ]
  },
  {
    imagem: "imagens/img_london.jpg",
    city: "London",
    temp: "60 F",
    days: ['MON', 'TUE', 'WED'],
    icons: ['imagens/moon.png', 'imagens/moon2.png', 'imagens/rain.png'],
    report: [
      {
        day: 'MON',
        icon: 'imagens/moon.png'
      }
    ]
  },
  {
    imagem: "imagens/img_london.jpg",
    city: "London",
    temp: "60 F",
    days: ['MON', 'TUE', 'WED'],
    icons: ['imagens/moon.png', 'imagens/moon2.png', 'imagens/rain.png'],
    report: [
      {
        day: 'MON',
        icon: 'imagens/moon.png'
      }
    ]
  },
  {
    imagem: "imagens/img_london.jpg",
    city: "London",
    temp: "60 F",
    days: ['MON', 'TUE', 'WED'],
    icons: ['imagens/moon.png', 'imagens/moon2.png', 'imagens/rain.png'],
    report: [
      {
        day: 'MON',
        icon: 'imagens/moon1.png'
      },
      {
        day: 'MON',
        icon: 'imagens/moon.png'
      },
      {
        day: 'MON',
        icon: 'imagens/rain.png'
      }
    ]
  },
]

/*
for (let index = 0; index < cards.length; index++) {
  const element = cards[index];
  
}
*/

cards.forEach(element => {
  const mySon = document.createElement("div")
  mySon.classList.add('w3-card-4')
  mySon.classList.add('w3-margin')
  mySon.style.width = '40%'

  mySon.innerHTML = `
  <div class="w3-display-container w3-text-white">
    <img src="${element.imagem}" alt="Lights" style="width:100%">
    <div class="w3-xlarge w3-display-bottomleft w3-padding">${element.city} 60&deg; F</div>
  </div>
  <div class="w3-row">
    <div class="w3-third w3-center">
      <h3>${element.report[0].day}</h3>
      <img src="${element.report[0].icon}" alt="sun" style="width:80px">
    </div>
    <div class="w3-third w3-center">
      <h3>${element.days[1]}</h3>
      <img src="${element.icons[1]}" alt="cloud" style="width:80px">
    </div>
    <div class="w3-third w3-center w3-margin-bottom">
      <h3>${element.days[2]}</h3>
      <img src="${element.icons[2]}" alt="clouds" style="width:80px">
    </div>
  </div>`

  elementoDad.appendChild(mySon)
})
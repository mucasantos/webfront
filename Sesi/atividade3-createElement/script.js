const myDad = document.getElementById("dad");
//Meu Objeto Javascript para representar o meu
//card do html
const cardWeather = {
  image: "imagens/londres.jpg",
  city: "LONDON",
  temp: "60&deg",
  listWeather: [
    {
      day: "MON",
      image: "imagens/img_weather_cloud.jpg",
    },
    {
      day: "TUE",
      image: "imagens/img_weather_clouds.jpg",
    },
    {
      day: "WED",
      image: "imagens/img_weather_sun.jpg",
    },
  ],
};

const cards = [
  {
    image: "imagens/londres.jpg",
    city: "LONDON",
    temp: "60&deg",
    listWeather: [
      {
        day: "MON",
        image: "imagens/img_weather_cloud.jpg",
      },
      {
        day: "TUE",
        image: "imagens/img_weather_clouds.jpg",
      },
      {
        day: "WED",
        image: "imagens/img_weather_sun.jpg",
      },
    ],
  },
  {
    image: "imagens/londres.jpg",
    city: "PARAIBA",
    temp: "60&deg",
    listWeather: [
      {
        day: "MON",
        image: "imagens/img_weather_cloud.jpg",
      },
      {
        day: "TUE",
        image: "imagens/img_weather_clouds.jpg",
      },
      {
        day: "WED",
        image: "imagens/img_weather_sun.jpg",
      },
    ],
  },
  {
    image: "imagens/londres.jpg",
    city: "BAHIA",
    temp: "60&deg",
    listWeather: [
      {
        day: "MON",
        image: "imagens/img_weather_cloud.jpg",
      },
      {
        day: "TUE",
        image: "imagens/img_weather_clouds.jpg",
      },
      {
        day: "WED",
        image: "imagens/img_weather_sun.jpg",
      },
    ],
  },
  {
    image: "imagens/londres.jpg",
    city: "CARUARU",
    temp: "60&deg",
    listWeather: [
      {
        day: "MON",
        image: "imagens/img_weather_cloud.jpg",
      },
      {
        day: "TUE",
        image: "imagens/img_weather_clouds.jpg",
      },
      {
        day: "WED",
        image: "imagens/img_weather_sun.jpg",
      },
    ],
  },
  {
    image: "imagens/londres.jpg",
    city: "COTIA",
    temp: "60&deg",
    listWeather: [
      {
        day: "MON",
        image: "imagens/img_weather_cloud.jpg",
      },
      {
        day: "TUE",
        image: "imagens/img_weather_clouds.jpg",
      },
      {
        day: "WED",
        image: "imagens/img_weather_sun.jpg",
      },
    ],
  },
  {
    image: "imagens/londres.jpg",
    city: "BARUERI",
    temp: "60&deg",
    listWeather: [
      {
        day: "MON",
        image: "imagens/img_weather_cloud.jpg",
      },
      {
        day: "TUE",
        image: "imagens/img_weather_clouds.jpg",
      },
      {
        day: "WED",
        image: "imagens/img_weather_sun.jpg",
      },
    ],
  },
  {
    image: "imagens/londres.jpg",
    city: "CAUCAIA",
    temp: "60&deg",
    listWeather: [
      {
        day: "MON",
        image: "imagens/img_weather_cloud.jpg",
      },
      {
        day: "TUE",
        image: "imagens/img_weather_clouds.jpg",
      },
      {
        day: "WED",
        image: "imagens/img_weather_sun.jpg",
      },
    ],
  },
  {
    image: "imagens/londres.jpg",
    city: "RIO DE JANEIRO",
    temp: "60&deg",
    listWeather: [
      {
        day: "MON",
        image: "imagens/img_weather_cloud.jpg",
      },
      {
        day: "TUE",
        image: "imagens/img_weather_clouds.jpg",
      },
      {
        day: "WED",
        image: "imagens/img_weather_sun.jpg",
      },
    ],
  },
  {
    image: "imagens/londres.jpg",
    city: "CARAPICUIBA",
    temp: "60&deg",
    listWeather: [
      {
        day: "MON",
        image: "imagens/img_weather_cloud.jpg",
      },
      {
        day: "TUE",
        image: "imagens/img_weather_clouds.jpg",
      },
      {
        day: "WED",
        image: "imagens/img_weather_sun.jpg",
      },
    ],
  },
];

//for

cards.forEach((card) => {
  const littleBoy = document.createElement("div");

  //Estou adicionando o nome das classes a minha div
  littleBoy.classList.add("w3-card-4")
  littleBoy.classList.add("w3-margin")
  littleBoy.style.width = "40%"
  
//Finalizar o código abaixo, com os dados vindo da lista
  littleBoy.innerHTML = `
  
  <div class="w3-display-container w3-text-white">
    <img src="${card.image}" alt="Lights" style="width:100%">
    <div class="w3-xlarge w3-display-bottomleft w3-padding">${card.city} ${card.temp} F</div>
  </div>
  <div class="w3-row">
    <div class="w3-third w3-center">
      <h3>${card.listWeather[0].day}</h3>
      <img src="${card.listWeather[0].image}" alt="sun" style="width:80px">
    </div>
    <div class="w3-third w3-center">
      <h3>${card.listWeather[1].day}</h3>
      <img src="${card.listWeather[1].image}" alt="cloud" style="width:80px">
    </div>
    <div class="w3-third w3-center w3-margin-bottom">
      <h3>${card.listWeather[2].day}</h3>
      <img src="${card.listWeather[2].image}" alt="clouds" style="width:80px">
    </div>
  </div>

    
  `
  myDad.appendChild(littleBoy)
});

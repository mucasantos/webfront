//Estudo e implementação de gráficos,
//utilizando a biblioteca Chart.js
//(https://www.chartjs.org/)

//este é o primeiro parâmetro (canvas HTML)
var ctx = document.getElementById("myChart");
const btn = document.getElementById("newGraph");

const name = document.getElementById("name");
const agua = document.getElementById("agua");
const luz = document.getElementById("luz");
const fone = document.getElementById("fone");

var namesLabel = [];

var waterData = [];
var lightData = [];
var phoneData = [];

//Criar uma variável para add o gráfico
var myChart;

createBar({});

btn.addEventListener("click", () => {
  //Apagar a área do gráfico para fazer a atualização
  myChart.destroy();

  namesLabel.push(name.value);
  phoneData.push(fone.value);
  waterData.push(agua.value);
  lightData.push(luz.value);

  createBar({
    light: lightData,
    phone: phoneData,
    water: waterData,
    names: namesLabel,
  });
});

//Criação da função
function createBar(data) {
  console.log(data);
  myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.names,
      datasets: [
        {
          label: "Água",
          data: data.water,
          borderWidth: 1,
        },
        {
          label: "Luz",
          data: data.light,
          borderWidth: 1,
        },
        {
          label: "Telefone",
          data: data.phone,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

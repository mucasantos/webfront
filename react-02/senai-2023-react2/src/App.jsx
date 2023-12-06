import "./App.css";
import Card from "./components/Card";
import FoodCard from "./components/FoodCard";

function App() {
  return (
    //Fragmento
    <>
      <h1>Hello World!</h1>
      <h3>React is nice!</h3>
      <Card
        urlName="https://d21wiczbqxib04.cloudfront.net/_pWe2l632CaryxGKtn7lZXuA8ns=/730x710/smart/https://osuper-vitrine-viezzer.s3-sa-east-1.amazonaws.com/1582290318919-hamburger.png"
        description="Hamburguer muito gostoso!!"
      />

      <FoodCard></FoodCard>
      
    </>
  );
}

//Mande pra o mundo la fora, este arquivo!
export default App;

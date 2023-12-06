//Cuidado com o end absoluto!
import "./Header.css";
import {users} from "../users";

function Header() {
  //Variáveis
  const titulo = "Sou um componente";
  const parag = "Sou um parágrafo!...";
  return (
    <>
      <h1 className="test">{titulo}</h1>
      <h2>Meus cards legais em React</h2>
      <div className="container">
        {users.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt="User avatar"></img>
            <h3>{item.name}</h3>
            <h4>{item.telefone}</h4>
          </div>
        ))}
      </div>
      <p>{parag}</p>
    </>
  );
}

export default Header;

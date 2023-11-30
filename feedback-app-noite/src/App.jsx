import "./index.css";
//Criar componente e importar!
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {
  return (
    <>
      <Header title="Feedback UI" />
      <FeedbackItem />
    </>
  );
}

export default App;

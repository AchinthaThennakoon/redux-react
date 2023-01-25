import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  return (
    <div className="App">
      <h1>counter : {counter}</h1>
      {isLogged ? "You are logged in": 'please login'}
    </div>
  );
}

export default App;

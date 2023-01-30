import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./action";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>counter : {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>increment</button>
      <button onClick={() => dispatch(decrement(5))}>decrement</button>
      <hr />
      {isLogged ? "You are logged in" : "please login"}
    </div>
  );
}

export default App;

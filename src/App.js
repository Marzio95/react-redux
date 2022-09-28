import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login, logout } from "./actions";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const logged = useSelector((state) => state.loggedReducer);
  console.log(counter);
  console.log(logged);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Aumenta</button>
      <button onClick={() => dispatch(decrement())}>Decrementa</button>
      <button onClick={() => dispatch(login())}>LOG IN</button>
      <button onClick={() => dispatch(logout())}>LOG OUT</button>
      {logged ? <h2>Sei Loggato</h2> : <h2>Loggati please</h2>}
    </div>
  );
}

export default App;

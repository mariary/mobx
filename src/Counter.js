import './App.css';
import counter from "./store/counter";
import {observer} from "mobx-react-lite";

const Counter = observer(() => {
  return (
    <div style={{margin: 20}}>
      <p>{counter.count}</p>
      <button onClick={() => counter.increment()}>+</button>
      <button onClick={() => counter.decrement()}>-</button>
      <p>calculated value {counter.calculated}</p>
    </div>
  );
})

export default Counter;

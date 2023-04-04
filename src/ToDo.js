import './App.css';
import todo from "./store/todo";
import {observer} from "mobx-react-lite";
import { v4 as uuidv4 } from 'uuid';

const randomId = () => uuidv4()

const ToDo = observer(() => {
  const list = todo.list
  const fetchedTodos = todo.fetchedTodos

  return (
    <div>
      <hr/>
      <div>
        <button onClick={() => todo.addTodo(prompt())}>add todo</button>
        <button onClick={() => todo.removeLastTodo()}>remove last todo</button>
        <div>
          {list && list.map(item => <p key={randomId}>{item}</p>)}
        </div>
      </div>
      <hr/>
      <div >
        <button onClick={() => todo.fetchTodos()}>fetch todos</button>
        <div>
          {fetchedTodos.length > 0 && (
              <>
                <p>Fetched todos:</p>
                {todo.fetchedTodos.map(item => <p key={item.id}>{item.title}</p>)}
              </>
          )}
        </div>
      </div>
    </div>
  );
})

export default ToDo;

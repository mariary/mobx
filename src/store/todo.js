import {makeAutoObservable} from "mobx";

class ToDo {
  list = ['Ground control to major Tom','Ground control to major Tom','Take your protein pills and put your helmet on']
  fetchedTodos = []

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(todo) {
    this.list.push(todo)
  }

  removeLastTodo() {
    this.list.pop()
  }

  fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => response.json())
        .then(json => this.fetchedTodos = json)
  }
}

const todo = new ToDo()

export default todo

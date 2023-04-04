import {makeAutoObservable} from "mobx";

class Counter {
  count = 0
  value = 10

  constructor() {
    makeAutoObservable(this)
  }

  increment() {
    this.count = this.count + 1
  }

  decrement() {
    this.count = this.count - 1
  }

  get calculated() {
    return this.count * this.value
  }
}

const counter = new Counter()

export default counter

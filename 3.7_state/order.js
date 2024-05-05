class Order {
  constructor(state) {
    this.state = state;
    this.observers = [];
  }

  setState(state) {
    this.state = state;
    this.notifyObservers();
  }

  getState() {
    return this.state;
  }

  proceed() {
    this.state.proceed(this);
  }

  registerObserver(observer) {
    this.observers.push(observer);
  }

  unregisterObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer.update(this));
  }
}

module.exports = Order;

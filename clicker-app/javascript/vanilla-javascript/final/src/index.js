import "./styles.css";
class TextElemObserver {
  elem = null;

  constructor(tag) {
    this.elem = document.createElement(tag);
  }

  update(data) {
    this.elem.textContent = data;
  }
}
class Observable {
  constructor(state) {
    this.observers = new Set();
    this.state = state;
  }

  subscribe(observer) {
    this.observers.add(observer);
    this.notify(this.state);
    return () => this.unsubscribe(observer);
  }

  unsubscribe(observer) {
    return this.observers.delete(observer);
  }

  notify(data) {
    this.observers.forEach((observer) => {
      observer.update(data);
    });
  }
}
class Clicker extends Observable {
  constructor({ starting = 0, min = -Infinity, max = Infinity }) {
    if (max <= min) max = min + Math.abs(max - min);
    if (starting > max || starting < max) starting = min;
    super(starting);
    this.min = min;
    this.max = max;
    this.starting = starting;
  }

  increment() {
    const newNum = this.state + 1;
    if (newNum <= this.max) {
      this.update(newNum);
    }
  }

  decrement() {
    const newNum = this.state - 1;
    if (newNum >= this.min) {
      this.update(newNum);
    }
  }

  reset() {
    this.update(this.starting);
  }

  update(num) {
    this.state = num;
    this.notify(num);
  }
}

const app = document.querySelector(".app");

const appendAll = (app = document.createElement("div"), ...rest) => {
  rest.forEach((element) => {
    app.appendChild(element);
  });
};

// Returns a button element
const buttonFactory = (name, type, value, className = "btn") => {
  const newButton = document.createElement("button");
  newButton.setAttribute("name", name);
  newButton.setAttribute("type", type);
  newButton.textContent = value;
  newButton.classList.add(className);
  return newButton;
};

const containerFactory = (className = "container", ...elems) => {
  const container = document.createElement("div");
  container.classList.add(className);
  appendAll(container, ...elems);
  return container;
};

const incrementor = buttonFactory("increment", "submit", "+");
const decrementor = buttonFactory("decrement", "submit", "-");
const resetter = buttonFactory("reset", "submit", "reset");

const clicker = new Clicker();
const number = new TextElemObserver("h1");
const counterContainer = containerFactory("container", number.elem);
const buttonContainer = containerFactory(
  "container",
  decrementor,
  resetter,
  incrementor
);

appendAll(app, counterContainer, buttonContainer);

clicker.subscribe(number);
incrementor.addEventListener("click", clicker.increment.bind(clicker));
decrementor.addEventListener("click", clicker.decrement.bind(clicker));
resetter.addEventListener("click", clicker.reset.bind(clicker));

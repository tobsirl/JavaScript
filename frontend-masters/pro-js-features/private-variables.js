/*
Define a class with a private variable using the # prefix
*/
class MyClass {
  constructor() {
    this.#privateVar = 34;
  }

  get privateVar() {
    return this.#privateVar;
  }
}

const instance = new MyClass();
console.log(instance.privateVar);

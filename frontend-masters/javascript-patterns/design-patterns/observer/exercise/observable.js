let observers = [];

export default Object.freeze({
  subscribe: (func) => observers.push(func),
  notify: (data) => observers.forEach((observer) => observer(data)),
});

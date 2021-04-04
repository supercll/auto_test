import axios from "axios";

export function add(a, b) {
  return a + b;
}
export function minus(a, b) {
  return a - b;
}
export function multi(a, b) {
  return a * b;
}
export const asyncFunc = () => {
  const p = new Promise((resolve, reject) => {
    reject(404);
    resolve({ success: true });
  });
  return p
    .then(value => {
      return Promise.resolve(value);
    })
    .catch(e => {
      return Promise.reject(e);
    });
};

export class Counter {
  constructor() {
    this.number = 0;
  }
  add() {
    this.number++;
  }
  minus() {
    this.number--;
  }
}

export const runCallback = callback => {
  callback(123);
};

export const createObject = classItem => {
  new classItem();
};
export const getData = classItem => {
  return axios.get("/api").then(res => res.data);
};

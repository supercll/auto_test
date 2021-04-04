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

export default function getResponseFromAPI() {
  const promise = new Promise(((resolve, reject) => {
    // eslint-disable-next-line no-constant-condition
    if (true) {
      resolve('true');
    } else {
      reject(Error('false'));
    }
  }));
  return (promise);
}

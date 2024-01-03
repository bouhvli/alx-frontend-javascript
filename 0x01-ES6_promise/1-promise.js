export default function getFullResponseFromAPI(success) {
  const promise = new Promise(((resolve, reject) => {
    // eslint-disable-next-line no-constant-condition
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(Error('The fake API is not working currently'));
    }
  }));
  return (promise);
}

/* eslint-disable func-names */
export default function handleResponseFromAPI(promise) {
  // eslint-disable-next-line no-unused-expressions
  return promise
    .then(() => ({ status: 200, body: 'Success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}

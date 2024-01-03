/* eslint-disable func-names */
export default function handleResponseFromAPI(promise) {
  // eslint-disable-next-line no-unused-expressions
  promise.then(() => ({ status: 200, body: 'Success' }),
    // eslint-disable-next-line no-sequences, function-paren-newline
  ), function () {
    return (Error(''));
  };
  promise.then(() => {
    console.log('Got a response from the API');
  });
  return (promise);
}

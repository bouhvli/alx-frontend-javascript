const weakMap = new WeakMap();

function queryAPI(endpoint) {
  let cnt = weakMap.get(endpoint) || 0;
  cnt += 1;
  if (cnt >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, cnt);
}
export { queryAPI, weakMap };

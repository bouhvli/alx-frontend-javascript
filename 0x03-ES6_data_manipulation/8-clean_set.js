export default function cleanSet(set, startString) {
  const setArray = [];

  if (startString && typeof startString === 'string') {
    for (const item of set) {
      if (item && item.startsWith(startString)) {
        setArray.push(item.slice(startString.length));
      }
    }
  }
  return (setArray.length > 0 ? setArray.join('_') : '');
}

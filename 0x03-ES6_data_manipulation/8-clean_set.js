export default function cleanSet(set, startString) {
  const setArray = [];
  let specificString = '';

  if (startString && typeof startString === 'string') {
    for (const item of set) {
      if (item && item.startsWith(startString)) {
        setArray.push(item.slice(startString.length));
      }
    }
    specificString = setArray.join('-');
  }
  return (specificString);
}

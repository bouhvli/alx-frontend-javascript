export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const values = Array.from(set).filter((value) => value.startsWith(startString));
  return values.map((value) => value.slice(startString.length)).join('-');
}

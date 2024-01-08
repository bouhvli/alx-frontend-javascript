export default function hasValuesFromArray(set, array) {
  let check = true;
  for (const item of array) {
    if (!set.has(item)) {
      check = false;
    }
  }
  return check;
}

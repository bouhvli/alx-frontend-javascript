export default function createIteratorObject(report) {
  const list = [];
  const keys = report.allEmployees;
  for (const item in keys) {
    if (Object.hasOwn(keys, item)) {
      list.push(...keys[item]);
    }
  }
  return list;
}

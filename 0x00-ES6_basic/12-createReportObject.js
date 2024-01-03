export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      let count = 0;
      for (const idx in employeesList) {
        if (Object.hasOwn(employeesList, idx)) {
          count += 1;
        }
      }
      return count;
    },
  };
  return obj;
}

export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeeList) {
      return Object.keys(employeeList).length;
    },
  };
  return obj;
}

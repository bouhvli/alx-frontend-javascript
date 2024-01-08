export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const match = newGrades.find((grade) => grade.studentId === student.id);
      if (match) {
        // eslint-disable-next-line no-return-assign, no-param-reassign
        student.grade = match.grade;
        return (student);
      }
      // eslint-disable-next-line no-return-assign, no-param-reassign
      student.grade = 'N/A';
      return (student);
    });
}

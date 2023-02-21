import { Seq } from 'immutable';

function printBestStudents(grades) {
  const filteredGrades = Seq(grades)
    .filter((student) => student.score >= 70)
    .map((student) => ({
      ...student,
      firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }))
    .toObject();
  // eslint-disable-next-line
  console.log(filteredGrades);
}

export default printBestStudents;

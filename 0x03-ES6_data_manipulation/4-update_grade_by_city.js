function getStudentIdsSum(studentsArray) {
  if (!Array.isArray(studentsArray)) {
    return 0;
  }

  // Use the reduce function to sum up student ids
  const sumOfIds = studentsArray.reduce((accumulator, student) => accumulator + student.id, 0);

  return sumOfIds;
}

// Export the function
module.exports = getStudentIdsSum;

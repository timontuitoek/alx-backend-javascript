#!/usr/bin/node
function getListStudentIds(studentsArray) {
  if (!Array.isArray(studentsArray)) {
    return [];
  }

  // Use the map function to extract ids
  const studentIds = studentsArray.map((student) => student.id);

  return studentIds;
}

// Export the function
module.exports = getListStudentIds;

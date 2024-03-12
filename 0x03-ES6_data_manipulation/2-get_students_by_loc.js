#!/usr/bin/env node
function getStudentsByLocation(studentsArray, city) {
  if (!Array.isArray(studentsArray) || typeof city !== 'string') {
    return [];
  }

  // Use the filter function to get students in the specified city
  const studentsInCity = studentsArray.filter((student) => student.location === city);

  return studentsInCity;
}

// Export the function
module.exports = getStudentsByLocation;

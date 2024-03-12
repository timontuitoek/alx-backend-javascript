function cleanSet(Set, startString) {
  let result = '';

  Set.forEach((value) => {
    if (value.startsWith(startString)) {
      result += `${value.substring(startString.length)}-`;
    }
  });

  // Remove the trailing '-' if there are any elements
  if (result.length > 0) {
    result = result.slice(0, -1);
  }

  return result;
}

export default cleanSet;

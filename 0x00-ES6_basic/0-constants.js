export function taskFirst() {
    const task = 'I prefer const when I can.'; // Use const to instantiate variable
    return task;
  }
  
  export function getLast() {
    return ' is okay';
  }
  
  export function taskNext() {
    let combination = 'But sometimes let'; // Use let to instantiate variable
    combination += getLast();
  
    return combination;
  }
  
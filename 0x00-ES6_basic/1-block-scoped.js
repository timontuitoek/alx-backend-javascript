// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
    var task = false;
    var task2 = true;
  
    if (trueOrFalse) {
      // Using block scope with curly braces
      {
        var task = true;
        var task2 = false;
      }
    }
  
    return [task, task2];
  }
  
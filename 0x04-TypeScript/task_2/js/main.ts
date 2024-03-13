interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  class Director implements DirectorInterface {
    workFromHome(): string {
      return 'Working from home';
    }
  
    getCoffeeBreak(): string {
      return 'Getting a coffee break';
    }
  
    workDirectorTasks(): string {
      return 'Getting to director tasks';
    }
  }
  
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return 'Cannot work from home';
    }
  
    getCoffeeBreak(): string {
      return 'Cannot have a break';
    }
  
    workTeacherTasks(): string {
      return 'Getting to work';
    }
  }
  
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  
  // Example usage:
  const employee1 = createEmployee(450);
  console.log(employee1 instanceof Teacher); // true
  console.log(employee1 instanceof Director); // false
  
  const employee2 = createEmployee(600);
  console.log(employee2 instanceof Teacher); // false
  console.log(employee2 instanceof Director); // true

// Type predicate function
function isDirector(employee: Director | Teacher): employee is Director {
    return 'workDirectorTasks' in employee;
  }
  
  // Function to execute work based on employee type
  function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
      console.log(employee.workDirectorTasks());
    } else {
      console.log(employee.workTeacherTasks());
    }
  }
  
  // Example usage
  executeWork(createEmployee(200)); // Output: Getting to work
  executeWork(createEmployee(1000)); // Output: Getting to director tasks
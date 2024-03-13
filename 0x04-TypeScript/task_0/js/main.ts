interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
  };
  
  const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 22,
    location: 'Los Angeles'
  };
  
  const studentsList: Student[] = [student1, student2];
  
  const table = document.createElement('table');
  document.body.appendChild(table);
  
  studentsList.forEach(student => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });
  
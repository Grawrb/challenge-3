// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];
  let shouldContinue = true;
  while(shouldContinue) {
    employees.push(getEmployee());
    shouldContinue = confirm("Add additional employees?");

  }

 

  return employees;

}
function getEmployee() {
  let firstName = prompt("Enter first name", "First Name");
  let lastName = prompt("Enter last name", "Last Name");
  let salary = prompt("Enter salary", "$");

  const employee = {    
    firstName: firstName,
    lastName: lastName,
    salary: getSalary(salary)
  }
  return employee
}

function getSalary(x) {
  
  if (isNaN(x)) {
    return 0;
  } else {
    return Number(x);
  }
  
}



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];
    sum += currentEmployee.salary;
  
  }
  const salaryAverage = sum / employeesArray.length
  console.log(`Average employee salary ${salaryAverage}, number of employees ${employeesArray.length}`);
  
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(`${randomEmployee.firstName} ${randomEmployee.lastName}`);

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

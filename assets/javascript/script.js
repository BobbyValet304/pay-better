// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const data = [];
  let accept = true;
  while (accept) {
    const firstName = prompt("Enter first name");
    const lastName = prompt("Enter last name");
    const salary = prompt("Enter salary");

    //We need to create an employee
    //We need to take this employee and add to data
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseInt(salary),
      //salary is was a string and is now an integer
    };
    data.push(employee);

    accept = confirm("Would you like to add another employee?");
  }
  console.log(data);
  return data;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  //Add employee salaries and divide by length of array(total employees)

  let totalSalary = 0;
  employeesArray.forEach((employee) => {
    totalSalary += employee.salary;
  });

  const averageSalary = totalSalary / employeesArray.length;
  console.log(
    `Average Salary: $${averageSalary.toFixed(2)} for ${
      employeesArray.length
    } employees`
  );
};

// Select a random employee

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);

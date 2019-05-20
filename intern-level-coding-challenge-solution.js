/*
  This is my solution for the Intern Level Coding Challenge.

  By: Joshua Odeyemi
  Email: aodeyem2@students.kennesaw.edu
  Github: github.com/joshuamango/intern-coding-challenge.git

  Thanks you for taking the time to review my solution!
*/

/* All employees in the "remainingEmployeesArray" have been added to the 
"employeesArray" in the same manner as the original two entries. Each employee
is an Object with two properties: name and department. */
const employeesArray = [
  { name: "Oscar Martinez", department: "Accounting" },
  { name: "Michael Scott", department: "Sales" },
  { name: "Jim Halpert", department: "Sales" },
  { name: "Pam Beezley", department: "Reception" },
  { name: "Kevin Malone", department: "Accounting" },
  { name: "Dwight Schrute", department: "Sales" },
  { name: "Andy Bernard", department: "Sales" },
  { name: "Angela Martin", department: "Accounting" },
  { name: "Erin Hannon", department: "Reception" },
  { name: "Toby Flenderson", department: "Human Resources" },
  { name: "Stanley Hudson", department: "Sales" },
  { name: "Jan Levinson", department: "Corporate" },
  { name: "Creed Bratton", department: "Support" },
  { name: "Ryan Howard", department: "Temps and Interns" },
  { name: "Darryl Philbin", department: "Warehouse" },
  { name: "Holly Flax", department: "Human Resources" },
  { name: "Meredith Palmer", department: "Support" },
  { name: "Kelly Kapoor", department: "Support" },
  { name: "Gabe Lewis", department: "Human Resources,Temps and Interns" }, // Gabe is a member of two departments
  { name: "Robert California", department: "Corporate" },
  { name: "Phyllis Vance", department: "Sales" },
  { name: "Roy Anderson", department: "Warehouse" },
  { name: "Peter Miller", department: "Temps and Interns" },
  { name: "Clark Green", department: "Support" }
];

// Declare & Initialize "firstNamesArray", "lastNamesArray", and "departmentsCount"
let firstNamesArray = [];
let lastNamesArray = [];
let departmentsCount = {
  accounting: 0,
  sales: 0,
  humanResources: 0,
  tempsAndInterns: 0,
  corporate: 0,
  warehouse: 0,
  reception: 0,
  support: 0
};

/* As defined in the challenge statement, this function will loop through each employee in
"employeesArray" and add their first and last name to "firstNamesArray" and "lastNamesArray" 
respectively. Employees who are members of the Human Resources department or Corporate 
department are excluded. *They are not family according to Michael :( */
function processAllEmployees(allEmployees) {
  allEmployees.forEach(employee => {
    // Increment the department(s) the employee belongs to
    incrementDepartmentCount(employee.department);

    /* Check if the employee is in the corporate or human resources department.
    If so, the function moves on to the next iteration. */
    if (employee.department.includes("Corporate") || employee.department.includes("Human Resources")) {
      return;
    }

    /* Split the name string along the space in between the first and last name
    and return an array containing both. */
    let splitNamesArray = splitFullName(employee.name);

    // Add the now seperated names to their respective arrays.
    firstNamesArray.push(splitNamesArray[0]);
    lastNamesArray.push(splitNamesArray[1]);
  })
}

/* This function will split the input string along the space in between the first and last name
  and return an array containing both. */
function splitFullName(fullName) {
  return fullName.split(" ");

  /*
  Here is another, more
  manual way of doing it:

  let indexOfSpace = fullName.indexOf(" ");
  let firstName = fullName.substring(0, indexOfSpace);
  let lastName = fullName.substring(indexOfSpace + 1);
  return [firstName, lastName];
  */
}

/* This function determines which department(s) an employee is a member of and increments
the value of that department within the "departmentsCount" object.*/
function incrementDepartmentCount(department) {
  // This split method is needed for employees who are members of multiple departments
  let departmentArray = department.split(',');

  /* Determine which department the employee is a member of and increment the corresponding 
  value in the "departmentsCount" object */
  departmentArray.forEach(department => {
    switch (department) {
      case "Accounting": departmentsCount.accounting++; break;
      case "Sales": departmentsCount.sales++; break;
      case "Human Resources": departmentsCount.humanResources++; break;
      case "Temps and Interns": departmentsCount.tempsAndInterns++; break;
      case "Corporate": departmentsCount.corporate++; break;
      case "Warehouse": departmentsCount.warehouse++; break;
      case "Reception": departmentsCount.reception++; break;
      case "Support": departmentsCount.support++;
    }
  });
}

// This function will print each element in the "firstNamesArray" to the console
function printOutFirstNames() {
  firstNamesArray.forEach(name => console.log(name));
}

// Process all employees and print out the first name of each employee
processAllEmployees(employeesArray);
printOutFirstNames(firstNamesArray);
'use strict';

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA; // Descending order
  });

  items.forEach((item) => list.appendChild(item)); // Re-append sorted elements
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

const list = document.querySelector('ul');

sortList(list); // Sort list items by salary

const employees = getEmployees(list); // Get array of employee objects

console.log('Sorted employees by salary:', employees);

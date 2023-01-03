
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string
};

let student1: Student = {
    firstName: 'Mouna',
    lastName: 'Ben Ali',
    age: 36,
    location: 'Tunis'
};

let student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 15,
    location: 'San Diego'
};

let studentsList: Student[] = [student1, student2];
let body: HTMLBodyElement = document.getElementsByTagName("body")[0];
let table: HTMLTableElement = document.createElement("table");
let thead: HTMLTableSectionElement = document.createElement("thead");
let tbody: HTMLTableSectionElement = document.createElement("tbody");
let headerRow: HTMLTableRowElement = thead.insertRow(0);
let header1: HTMLTableCellElement = headerRow.insertCell(0);
let header2: HTMLTableCellElement = headerRow.insertCell(1);

header1.innerHTML = "firstName";
header2.innerHTML = "location";
table.append(thead);

studentsList.forEach((student) => {
  let row: HTMLTableRowElement = tbody.insertRow(0);
  let cell1: HTMLTableCellElement = row.insertCell(0);
  let cell2: HTMLTableCellElement = row.insertCell(1);

  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

table.append(tbody);
body.append(table);
//Task 1
function createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary, minBirthYear, maxBirthYear) {
    let employeesArr = [];
    let uniqIds = [0];
    minId = Math.pow(10, idDigits - 1);
    maxId = Math.pow(10, idDigits);
    for (let i = 0; i < nEmployees; i++) {
        let id = getUniqueRandomId(minId, maxId, uniqIds);
        employeesArr.push(createEmployee(
            id, "name" + id, getRandomIntValue(minBirthYear, maxBirthYear), getRandomIntValue(minSalary, maxSalary)));
    }
    return employeesArr;
}
function createEmployee(id, name, birthYear, salary) {
    return { id, name, birthYear, salary };
}
function getUniqueRandomId(minId, maxId, uniqIds) {
    let id = uniqIds[0];
    do {
        id = getRandomIntValue(minId, maxId);
    }
    while (!uniqIds.every(uniqueId => uniqueId != id))
    uniqIds.push(id)
    return id;
}
function getRandomIntValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
//TEST :
let allEmps = createRandomEmployees(5, 4, 8000, 18000, 1965, 2005);
console.log("TASK #1", allEmps);


//Task 2
function getAverageAge(employeesarr) {
    let currentDateYear = (new Date()).getFullYear();
    return Math.round(employeesarr.reduce((sum, empl) => {
        return sum + currentDateYear - empl.birthYear;
    }, 0) / employeesarr.length);
}
//TEST :
console.log("TASK #2", getAverageAge(allEmps));


//Task 3
function getEmployeesBySalary(employeesarr, minSalary, maxSalary) {
    return employeesarr.filter(empl => empl.salary > minSalary && empl.salary < maxSalary)
        .sort((empl1, empl2) => empl1.salary - empl2.salary);
}
//TEST :
console.log("TASK #3", getEmployeesBySalary(allEmps, 14500, 17100));


//Task 4
function increaseSalary(employeesarr, borderSalary, percent) {
    employeesarr.filter(empl => empl.salary < borderSalary)
        .forEach(empl => empl.salary += empl.salary * percent / 100);
}
increaseSalary(allEmps, 15000, 10);
console.log("TASK #4", allEmps);
function increaseSalary1(employeesarr, borderSalary, percent) {
    return employeesarr.map(employee => {
        if (employee.salary < borderSalary) {
            employee.salary += employee.salary * percent / 100;
        }
        return employee;
    })
}
//TEST :
console.log("TASK #4.1", increaseSalary1(allEmps, 15000, 10));

const inputElements = document.querySelectorAll(".form-class [name]");
const errorElement = document.querySelector(".error");
const minSalary = 2000;
const maxSalary = 50000;
const minYearBirth = 1950;
const currentYear = new Date().getFullYear();
const timeout = 5000;
let timer = 0;

function onSubmit(event) {
    event.preventDefault();
    console.log("Submitted")
    const employee = Array.from(inputElements).reduce((res, cur) => {
        res[cur.name] = cur.value;
        return res;
    }, {}
    )
    console.log(employee);
}

function onChange(event) {
    if (event.target.name == "salary") {
        getSalary(event);
    }
    if (event.target.name == "birthDate") {
        getBirthDate(event);
    }
}

function getBirthDate(event) {
    const deteArr = event.target.value.split("-");
    const yearSel = +deteArr[0];
    if (yearSel < minYearBirth || yearSel > currentYear) {
        getError(event, `Enter year more ${minYearBirth}, enter year less ${currentYear}, Year = ${yearSel}`);
    }
}

function getSalary(event) {
    const salary = +event.target.value;
    if (salary < minSalary || salary > maxSalary) {
        getError(event, `Enter salary more ${minSalary}, enter salary less ${maxSalary}
                salary = ${salary}`);
    }
}

function getError(event, textError) {
    event.target.value = '';
    errorElement.innerHTML = textError;
    timer = setTimeout(() => {
        errorElement.innerHTML = '';
    }, timeout);
}
console.log("Function - sumDigits.js");
function sumDigits(number) {
   
    if(number < 0) {
        number =- number;
    }
    let sum = 1;
    for(i = 0; i <= number; i++) {

        console.log("check i =", i);                // debug
       console.log("check sum", sum);         // debug

        sum += number % 10;
        number = Math.floor(number/10);        // floor - rounded to a smaller                                              
    }
    return sum;
}
console.log('SUM =', sumDigits(123467));
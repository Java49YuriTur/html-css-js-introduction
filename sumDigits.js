console.log("Function - sumDigits.js");
function sumDigits(number) {  
    if(number < 0 ) {
        number =- number;   
    } 
    let sum = 0;
    while(number !== 0) {    
        sum += number % 10;
        number = Math.floor(number/10);        // floor - rounded to a smaller                                              
    }
    return sum;
}
console.log('SUM =', sumDigits(123456));
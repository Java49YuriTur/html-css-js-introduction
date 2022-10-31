//HW #11
function sumDigits(number) {
    //compute sum of digits for the integer numbers
    number = Math.abs(number);    // if the number is negative then there will be a partial
    let sum = 0;
    number = Math.trunc(number); // get rid of the fractional party
    do {
        let digit = number % 10;
        number = (number - digit) / 10;
        sum += digit;
    }while(number != 0);
    return sum;

}
// Example
let sum = sumDigits(123);
console.log(sumDigits(123)); //should be printed out 6

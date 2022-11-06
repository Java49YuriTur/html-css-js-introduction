
const nineDigits = '012345678';
const minDigit = 0;
const maxDigit = 9;
const char0 = '0'.charCodeAt();
function checkTeudatZehut(tzStr) {
    if(tzStr.length != nineDigits.length || isNaN(+tzStr)) {
         console.log("TZ=", tzStr, 'valid=', false);
        return false;
    }
    let ctrlSum = getControlSum(tzStr);
    let valid = ctrlSum % 10 == 0;
    console.log("TZ=", tzStr, "ctrlSum=", ctrlSum, 'valid=', valid);
    return valid;
}
function getControlSum(tzStr) {
    return Array.from(tzStr).map(function(symbol, ind) {
        let value = symbol.charCodeAt() - char0;
        return ind % 2 == 0 ? getEvenValue(value) : getOddValue(value*2);
    }).reduce(function(sum, cur) {
        return sum+cur;
    }, 0);
}
function getOddValue(number) {
    return number<10 ? number : number%10 + Math.trunc(number/10);
}
function getEvenValue(number) {
    return number;
}
//====================================================================
function generateTeudatZehut() {
    let array = getGeneratedArray();
    array[8] = updateCtrlDigit(array);
    if(!checkTeudatZehut(integerArray2String(array))) {
        console.log('Generation failed');
    }
}
function getGeneratedArray() {
    return Array.from(nineDigits).map(function(symbol, ind) {
        let value = (ind==8) ? 0 : getRandomIntegerValue(minDigit, maxDigit+1);
        return ind % 2 == 0 ? getEvenValue(value) : getOddValue(value*2);
    });
}
function integerArray2String(array) {
    return array.reduce(function(str, cur) {
        return str + String.fromCharCode(cur+char0);
    }, "");
}
function updateCtrlDigit(array) {
    let sum = getControlSum(integerArray2String(array));
    let roundedSum = Math.floor(sum/10)*10;
    if(roundedSum === sum) {
        return 0;
    } 
    return roundedSum+10-sum;
}
function getRandomIntegerValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min); 
}
// Tests
checkTeudatZehut('311769103');
checkTeudatZehut('311769129');
checkTeudatZehut('311759129');
checkTeudatZehut('336097183');
checkTeudatZehut('33609183');
checkTeudatZehut('33609as83');
checkTeudatZehut('012345674');
generateTeudatZehut();

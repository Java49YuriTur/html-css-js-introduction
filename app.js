///////////////////////Task #1////////////////////////
let strings =["abc","lmn","cd"];
strings = usSurround(strings);
function usSurround(strings) {
    strings = strings.map(function(element, ind) {
        return '<li>' + element + '</li>';
    });
    strings.splice(0, 0, '<ul>');
    strings.splice(4, 0, '</ul>');
    return strings;     
} 
// Test :
console.log(strings);



///////////////////////Task #2///////////////////////////

let strings1 = ["abc", "lmn", "cd", "abc", "abc"];
function count(strings1, s) {
    return strings1.reduce(function(count, element) {
        return element === s ? count +1 : count;
    }, 0);
}
// Test :
console.log('abc=', count(strings1, 'ab'));



///////////////////////Task #3/////////////////////////////
let arS = [1,2,3,4,5,6,7];
let arD = [10,20,30,40,50,60,70,];
arrayCopy(arS, 3, arD, 4, 3);
function arrayCopy(src, srcPos, dst, dstPos, Length) {
    src.slice(srcPos, srcPos + Length).reverse().forEach(element => {
        dst.splice(dstPos, 0, element);
    });
}
// Test :
console.log('arS = ',arS);
console.log('arD = ',arD);

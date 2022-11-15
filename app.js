////////////////////////// Task #1 ////////////////////////////////////////////

// function minMax(numbers) {
//     return numbers.reduce((res, cur) => {
//         if (cur < res[0]) {
//             res[0] = cur;
//         } else if (cur > res[1]) {
//             res[1] = cur;
//         }
//         return res;
//     },[numbers[0], numbers[0]]);
// }
// //Test:
// console.log("test for minMax function");
// let array = [[1, 2, 3, 5, 100], [2, -10, 3, 1], [100, 38, 7], [10000]]
// array.forEach(a => console.log(`inpute array: ${a}, min-max array is: ${minMax(a)}`));

///////////////////////////////////////// Task #2 /////////////////////////////////

// function deleteWithPrefix(strings, prefix) {
//     return strings.filter(str => !str.startsWith(prefix))
// }
// let strings = ["abc", "old_abc", "lmn", "123", "old_lmn"];
// let prefix = "old";
// console.log(`deleteWithPrefix. input: ${strings}, prefix: ${prefix} output: ${deleteWithPrefix(strings,prefix)}`);


////////////////////////////// Task #3 ///////////////////////////////////////////////////

function getSortedEvenOdd(numbers) {
    const result = numbers.slice();
    return result.sort((a, b) => {
        let res = 1;
        if(a % 2 == 0 && b % 2 != 0) {
            res = -1;
        }else if(a % 2 == 0 && b % 2 == 0) {
            res = a - b;
        }else if (a % 2 == 1 && b % 2 == 1) {
            res = b - a;
        }
         return res;
    })
}
// Test:
let numbers = [1, 6, 3, 8, 5, 2, 7, 4]
console.log(`input: ${numbers}: output: ${getSortedEvenOdd(numbers)}`)





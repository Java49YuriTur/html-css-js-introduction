//////////////////////////////////// Task# 1 ///////////////////////////////////////////

function minMax(numbers) {
    return numbers.reduce((mnmx, element) => {
        if(element < mnmx[0]) {
            mnmx[0] = element;
        }
        if(element > mnmx[1]) {
            mnmx[1] = element;
        }
        return mnmx;
    },[numbers[0],numbers[0]]);
}
// Test:
let numbers = [1, 2, 3, 4, 5];
console.log(`minMax. input: ${numbers} output: ${minMax(numbers)}`);


////////////////////////// Task #2 /////////////////////////////////////////////

function deleteWithPrefix(strings, prefix) {
    return strings.filter(element => !element.startsWith(prefix));
}
//Test:
let strings = ["abc", "old_abc", "lmn", "123", "old_lmn"];
let prefix = "old";
console.log(`deleteWithPrefix. input: ${strings}, prefix: ${prefix} output: ${deleteWithPrefix(strings,prefix)}`);



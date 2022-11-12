function getEvenNumbers(numbers) {
    let res = numbers.filter((n) => i % 2 == 0);
    return res;
}
let ar = [2, 9, 3, 1999];
ar.sort((a, b)=>a - b);

console.log(ar);
ar = ["abc", "a", "lmn", "y"];
ar.sort((a,b)=>a.length - b.length);
console.log(ar);


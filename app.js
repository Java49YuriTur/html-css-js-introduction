// ////////////////////////// Task #1 ///////////////////////////////////////

// function ulSurround(strings) {
//     let res = strings.map(str => `<li>${str}</li>`); 
//        // return `<li>${str}</li>`  // => "<li>"+ str + "</li>"
    
//     res.unshift("<ul>"); //res.splice(0, 0, "<ul>");
//     res.push("</ul>");  // res.splice(strings.length, 0 , "</ul>")
//     return res;
// }
// //Test :
// let ar = ["123", "abc", "tur", "lmn"];
// console.log(`input: ${ar} output: ${ulSurround(ar)}`);



////////////////////////////////// Task #2 /////////////////////////////

// function count(array, element) {
//     return array.reduce((res, cur) => cur == element ? res + 1 : res,0);
// }
// //Test :
// let str = "tur";
// console.log(`input: ${ar} , counter of: ${str} is ${count(ar,str)} ` )



///////////////////////////////// Task #3 ////////////////////////////////

// function arrayCopy(src, srcPos, dst, dstPos, length) {
//     let arForCopy = src.slice(srcPos, srcPos + length);
//     dst.splice(dstPos, 0, ...arForCopy);
//     //arForCopy.forEach((e, i) => dst.splice(dstPos + i, 0, e));
//     return dst
// }
// //Test:
// let ar1 = [1, 2, 3, 4, 5, 6];
// let ar2 = [10, 30, 40, 50];
// arrayCopy(ar1,2,ar2,1,3);
// console.log(`ar1: ${ar1}, ar2: ${ar2} arrayCopy(ar1,2,ar2,1,3): ${ar2}`)



////////////////////////////// Task #4 ///////////////////////////////////////

// function move(array, index, offset) {
//     let movedElem = array.splice(index, 1)[0];
//     array.splice(index + offset, 0, movedElem);
//     return array;
// }
// let ar = [1, 2, 3, 4 , 5, 6, 7];
// console.log(`${ar} ${move(ar,2,1)}`)

///////////////////////////////////////////////////////////////////////////////


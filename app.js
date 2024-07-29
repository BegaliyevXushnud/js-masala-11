
// 96-masala
function firstUnique(arr) {
    let result = arr.find(x => arr.indexOf(x) === arr.lastIndexOf(x));
    return result;
}

// console.log(firstUnique([2, 3, 4, 2, 3, 5, 6, 5]));
// Output: 4



// 97-masala
// function extractAndSortNumbers(str) {
//     let number = str.split('').filter(char => !isNaN(char) && char !== ' ').join(' ')
//     return number;
// }
//
// console.log(extractAndSortNumbers("a3c2d4b1"));
// // Output: [1, 2, 3, 4]



// 98-masala
// function doubleNumericValues(obj) {
//     for(let key in obj) {
//         if(typeof obj[key] === 'number') {
//             obj[key] *= 2;
//         }else if(typeof obj[key] === 'object') {
//             doubleNumericValues(obj[key]);
//         }
//     }
//     return obj;
// }
//
// // Test case
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: 4
//         }
//     }
// };
// console.log(doubleNumericValues(obj));
// Output: { a: 2, b: { c: 4, d: { e: 6, f: 8 } } }


// 99-masala
// function toCamelCase(obj) {
//     const camelCaseString = str => str.replace(/([-_][a-z])/g, s => s.toUpperCase().replace('-', '').replace('_', ''));
//
//     if (typeof obj !== 'object' || obj === null) {
//         return obj;
//     }
//
//     const newObj = {};
//     for (let key in obj) {
//         const newKey = camelCaseString(key);
//         newObj[newKey] = typeof obj[key] === 'object' ? toCamelCase(obj[key]) : obj[key];
//     }
//
//     return newObj;
// }
//
// // Test case
// const obj = {
//     'first_key': 1,
//     'second-key': {
//         'third_key': 2
//     }
// };
// console.log(toCamelCase(obj));
// // Output: { firstKey: 1, secondKey: { thirdKey: 2 } }




// 100-masala
// function transformStrings(obj, transformFunc) {
//     if (typeof obj !== 'object' || obj === null) {
//         return obj;
//     }
//
//     const newObj = {};
//     for (let key in obj) {
//         if (typeof obj[key] === 'string') {
//             newObj[key] = transformFunc(obj[key]);
//         } else if (typeof obj[key] === 'object') {
//             newObj[key] = transformStrings(obj[key], transformFunc);
//         } else {
//             newObj[key] = obj[key];
//         }
//     }
//
//     return newObj;
// }
//
// // Test case
// const obj = {
//     a: "hello",
//     b: {
//         c: "world",
//         d: {
//             e: "test"
//         }
//     }
// };
// console.log(transformStrings(obj, str => str.toUpperCase()));
// // Output: { a: "HELLO", b: { c: "WORLD", d: { e: "TEST" } } }




// 101-masala
// function sortKeys(obj) {
//  return Object.keys(obj).sort().reduce((acc, key) => {
//      acc[key] = obj[key];
//      return acc;
//  },{})
// }
//
// // Test case
// const obj = {
//     b: 2,
//     a: 1,
//     c: 3
// };
// console.log(sortKeys(obj));
// // Output: { a: 1, b: 2, c: 3 }



// 102-masala
// function uniqueConcat(arr) {
//     let uniw = new Set(arr);
//     return Array.from(uniw).join('')
// }
//
// // Test case
// console.log(uniqueConcat(['a', 'b', 'c', 'a', 'b', 'd']));
// // Output: "abcd"






// 103-masala
// function findDuplicates(arr) {
//    return arr.filter((item,index) => arr.indexOf(item) !== index)
// }
//
// // Test case
// console.log(findDuplicates([1, 2, 3, 1, 2, 4]));
// // Output: [1, 2]
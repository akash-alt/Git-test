//* Coding Practice (JS Basics – 15 problems) *//

// Problem 1: Reverse string
function reverseString(str) {
    // let reversed = '';
    // for(let i=str.length -1 ; i>=0;i--){
    //     reversed += str[i]
    // }
    // return reversed;

    //M-2
    return str.split("").reverse().join("")
}
console.log(reverseString("hello")); // Output: "olleh"


// Problem 2: Palindrome check
function checkPalli(str){
  // let res = str.split("").reverse().join("")
  // return res === str
  
  //M-2
  let res = "";
  for(let i=str.length-1 ; i>=0;i--){
    res += str[i]
  }
  return str === res
  
}
console.log(checkPalli("madam"))

// Problem 3: Max/min in array

function largest(arr){
//   let unique = [...new Set(arr)]
  // console.log(unique)
  // // return Math.max(...arr)
  // return Math.min(...arr)
  
//   for(let i=0; i<=unique.length;i++ ){
//     // console.log(unique[i])
//     for(let j=0;j<=unique.length;j++){
//       if(unique[i] === unique[j]){
//         return false
//       }
//     }
//   }

    let max = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i] > max){
            max = ar[i]
    }
return max
  
}
console.log(largest([1,2,3,5,99,5,7,99]))


// Problem 4: Remove duplicates
function removeDuplicate(arr) {
  //M-1
  // return [...new Set(arr)]
  
  let unique = [];
  for (let i = 0; i < arr.length; i++) {  // Corrected loop condition
    let isDuplicate = false;
    for (let j = 0; j < unique.length; j++) {  // Start from 0, as you want to check against unique elements
      if (arr[i] === unique[j]) {
        isDuplicate = true;
        break;  // No need to check further if we already found a duplicate
      }
    }
    if (!isDuplicate) {
      unique.push(arr[i]);  // Add the unique element to the result
    }
  }
  return unique;
}
console.log(removeDuplicate([1, 2, 3, 5, 99, 5, 7, 99, 100]));


// Problem 5: Flatten nested array
function flatArr(arr){
  // return arr1.concat(...arr2)
  return arr.flat()
  
}
console.log(flatArr( [1, 2, [3, 4], 5]))

// Problem 6: Map using reduce
function usedMap(arr){
  let res = arr.map((item) => item*2).reduce((acc,curr) => acc+curr,0)
  console.log(res)
  
  // let res2 = arr.reduce((acc,curr) => acc+curr,0)
  // console.log(res2)
}
console.log(usedMap([1,2,3,4,5]))

// Problem 7: Filter using reduce
function usedFilter(arr){
    let res = arr.filter((item) => item%2).reduce((a,b) => a+b,0)
    console.log(res)
}
console.log(usedFilter([2,3,4,65,76,99]))

// Problem 8: Reduce manually
function reduceManually(arr, fn, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = fn(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

// Problem 9: Debounce function
function debounceFunc(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const log = () => console.log('Debounced function called!');
const debouncedLog = debounceFunc(log, 1000);
debouncedLog();  // Call this multiple times quickly to test debouncing


// Problem 10:Throttle function
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Problem 11:Deep clone object
let original = [1,2,3,4,99]
let res = JSON.parse(JSON.stringify(original))
console.log(res)

// Problem 12: Compare arrays
function compareArr(arr1,arr2){
  if(arr1.length !== arr2.length) return false;
  
  for(let i=0;i<arr1.length;i++){
    if(arr1[i] !== arr2[i]) return false;
  }
  return true;
  
}
console.log(compareArr([1,2,3,4],[1,2,3,4]))

// Problem 13:Sum of array

function add(arr){
if(arr.length === 0) return false;
let res = arr.reduce((a,b) => a+b)
return res

}
console.log(add([1,2,34,5]))

// Problem 14:Count occurrences
function countChar(str){
  let res = {};
  for(let char of str){
    console.log(char)
    res[char] = (res[char] || 0) +1
  }
  return res
}
console.log(countChar("akash"))

// Problem 15:Merge sorted arrays
function mergeSorted(arr1, arr2) {
  // Merge and sort arrays
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log(mergeSorted([1, 3, 5, 7], [2, 4, 6, 8]));  // Output: [1, 2, 3, 4, 5, 6, 7, 8]
 

// problem 16: Promises
// function simple(){
//     return new Promise((resolve,reject) =>{
//         let success = true;
//         if(success){
//             resolve("success")
//         }else{
//             reject("failed")
//         }
//     }
//     )
// }
// simple().
// then((result) => console.log(result))
// .catch((result) => console.log(result))

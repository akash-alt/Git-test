
// solving 50 problems today //

// Q --> 1: Reverse a Number

function reverseANumber(num) {
    if(num < 0) return false;
    return num.toString().split("").reverse().join("")
}
console.log(reverseANumber(12345)); // Output: 54321

// Q --> 2: Check if a Number is Prime

function isPrime(num){
    if(num <= 1) return false;
    for(let i=2; i<= Math.sqrt(num);i++){
        if(num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(6));


// Q --> 3: Find the Factorial of a Number

function Fact(num){
    if(num === 0) return 1;
   return num * Fact(num-1)
}
console.log(Fact(5));


// Q --> 4: fibbonaci series
function fibbonaci(n){
    let arr = [0,1];
    for(let i=2;i<n;i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr;
}
console.log(fibbonaci(5));

// Q --> 5: Check if a String is a Palindrome

function isPalindrome(str){
    if(str.length === 0) return false;
    let str1 = str.split("").reverse().join("");
    return str === str1;
}
console.log(isPalindrome("madam")); 
console.log(isPalindrome(""));


// Q --> 6: Find the Max Element in an Array

function findMax(arr){
    if(arr.length === 0) return false;
    return Math.max(...arr)
}
console.log(findMax([1,2,3,4,99]));


// Q --> 7: Remove Duplicates from an Array

function removeDuplicates(arr){
    return [...new Set(arr)]
}
console.log(removeDuplicates([1,2,2,3,4,4,5]));


// Q --> 8: sum of all numbers in an array
function sumArr(arr){
    return arr.reduce((acc,curr) => acc+curr,0)
}
console.log(sumArr([1,2,3,4,5]));

// Q --> 9: find second largest number in an array
function secondLarget(arr){
    if(arr.length  === 0) return false;
    let unique = [...new Set(arr)];
    let res = unique.sort((a,b) =>{
        return b-a
    })
    return res[1];

    // M-2
    // let largest = -1;
    // let second_largest = -1;
    
    // for(let num of arr){
    //     if(largest < num){
    //         second_largest = largest
    //         largest = num
    //     }else if(second_largest < num  ){
    //         second_largest = num
    //     }
    // }
    // return second_largest 
}
console.log(secondLarget([1,2,3,4,5,99,2,5,3,11]));


console.log("------------------------ String Problems ------------------------");

// ------------------------  String Problems ------------------------ //

// Q --> 11: Count the Vowels in a String
function countVowels(str){
    let vowels = 'aeiouAEIOU';
    return str.split("").filter((ch) => vowels.includes(ch)).length;
}
console.log(countVowels("hello world")); 

// Method - 2
function countVowels2(str){
    let vowels = 'aeiouAEIOU';
    let count = 0;

    for(let i=0;i<str.length;i++){
        let ch = str[i];
        for(let j=0;j<vowels.length;j++){
            if(ch === vowels[j]){
                count++;
                break;
            }
        }
    }
    return count;
}
console.log(countVowels2("akash"));

// Q --> 12: longest word in a string

function longestWords(str){
    let words = str.split(" ");
    let longest = "";

    for(let i=0;i<words.length;i++){
        if(words[i].length > longest.length){
            longest = words[i];
    }
    return longest;
}
}
console.log(longestWords("JavaScript is a programming language"));


// Q --> 13: Check if Two Strings are Anagrams
function areAnagrams(str1,str2){
    // M-1
    // let sortedStr1 = str1.split("").sort().join("");
    // return sortedStr1 === str2.split("").sort().join("");

    // M-2
    let sortStr = s => s.toString().split("").sort().join("");
    return sortStr(str1) === sortStr(str2);
}
console.log(areAnagrams("listen","silent"));


// Q --> 14: First Non-Repeating Character

function firstNonRepeatingChar(str){
    for(let i=0;i<str.length;i++){
        let count = 0;
        for(let j=0;j<str.length;j++){
            if(str[i] === str[j]){
                count++;
            }
        }
        if(count === 1) return str[i];
    }
    return null;
}
console.log(firstNonRepeatingChar("swiss"));


// Q --> 15: Reverse Words in a String

function reverseWords(str){
    return str.split(" ").reverse().join(" ");
}
console.log(reverseWords("Hello World from JavaScript")); 


console.log("------------------------ Arrays and Objects Problems ------------------------");

// Q --> 16: Merge Two Sorted Arrays

function mergeSortedArrays(arr1,arr2){
    // m1 return [...arr1,...arr2]

    // m2
    let merged = [];
    for(let i=0;i<arr1.length;i++){
        merged.push(arr1[i]);
    }
    for(let j=0;j<arr2.length;j++){
        merged.push(arr2[j]);
    }
     return merged
}
console.log(mergeSortedArrays([1,3,5],[2,4,6]));

// Q --> 17: Flatten a 2D Array

function flatten2DArray(arr){
    return arr.flat()
}
console.log(flatten2DArray([[1,2],[3,4],[5,6],[7,8]]));

// Q --> 18: Find missing Number in an Array
function findMissingNumber(arr,n){
    let total = (n*(n+1))/2;
    let sum = arr.reduce((acc,curr) => acc+curr,0);
    return total - sum;
}
console.log(findMissingNumber([1,2,4,5],5));


// Q --> 19: Is array shorted or not
function isArraySorted(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i] > arr[i+1]){
            return false;
        } 
    }
     return true;
}
console.log(isArraySorted([1,2,99,4,5]));

// Q --> 20: Count Properties of an Object

function countProperties(obj){
    return Object.keys(obj).length;
}
console.log(countProperties({a:1,b:2,c:3,d:4,e:5}));

// Q --> 21: Merge Two Objects
function mergeObjects(obj1,obj2){
    // return {...obj1,...obj2}
    return Object.assign({},obj1,obj2)

}
console.log(mergeObjects({a:1,b:2},{c:3,d:4}));


// Q --> 22: Deep Clone an Object
function deepClone(obj){
    return JSON.parse(JSON.stringify(obj))
}
console.log(deepClone({a:1,b:{c:2,d:3}}));


// Q --> 23: Group Anagrams from an Array of Strings
function groupBy(arr, key) {
  return arr.reduce((acc, obj) => {
    (acc[obj[key]] = acc[obj[key]] || []).push(obj);
    return acc;
  }, {});
}

let data = [
  {name:"Alice", dept:"HR"},
  {name:"Bob", dept:"IT"},
  {name:"Charlie", dept:"HR"}
];

console.log(groupBy(data, "dept"));


console.log("------------------------ Advanced Strings, Arrays & Recursion. ------------------------");

// Q --> 24: Capitalize First Letter of Each Word

function capitalizeFirstLetter(str){
    let words = str.split(" ");
    let res = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    return res.join(" ");
}
console.log(capitalizeFirstLetter("hello world from javascript"));

//M-2
function capitalizeWords(str) {
  let words = str.split(" ");   // break sentence into words
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length > 0) {
      // take first char → uppercase
      let firstChar = word[0].toUpperCase();
      // take remaining chars
      let rest = word.slice(1);
      // combine them
      let capitalized = firstChar + rest;

      // add space except for last word
      result += capitalized + (i < words.length - 1 ? " " : "");
    }
  }

  return result;
}

console.log(capitalizeWords("hello javascript world"));


// Q --> 25: Count Character Frequency

function charFrequency(str){
    let freq = {};
    for(let i=0;i<str.length;i++){
        freq[str[i]] = (freq[str[i]] || 0) + 1;
    }
    return freq;
}
console.log(charFrequency("hello world"));


// Q --> 26: Check if String is Rotation of Another

function isRotation(str1,str2){
    if(str1.length !== str2.length) return false;
    return (str1 + str2).includes(str2);
}
console.log(isRotation("abcd","cdab"));


// Q --> 27: Remove All White Spaces
function removeSpaces(str) {
  return str.replace(/\s+/g, "");
}

console.log(removeSpaces("  hello   world ")); 


// Q --> 28: Find Intersection of Two Arrays

function intersection(arr1,arr2){
    return arr1.filter(value => arr2.includes(value));
}
console.log(intersection([1,2,3,4],[3,4,5,6]));

// Q --> 29: Find Union of Two Arrays
function union(arr1,arr2){
    return [...new Set([...arr1,...arr2])]
}
console.log(union([1,2,3,4],[3,4,5,6]));

// Q --> 30: Find Difference Between Two Arrays
function difference(arr1,arr2){
    return arr1.filter(value => !arr2.includes(value));
}

console.log(difference([1,2,3,4],[3,4,5,6]));

// Q --> 31: Sum of Digits Using Recursion
function sumOfDigits(num){
    if(num === 0) return 0;
    return (num % 10) + sumOfDigits(Math.floor(num / 10));
}
console.log(sumOfDigits(12345));


console.log("------------------------ Async, DOM, and Miscellaneous JavaScript problems. ------------------------");

// Q --> 32: Delay Execution (Sleep Function)

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function demo(){
    console.log("Start");
    await sleep(2000);
    console.log("End after 2 seconds");
}
demo();

console.log("After demo function");

function findDupplicate(arr){
    let exist = new Set();
    let dupl = new Set();

    for(let num of arr){
        if(exist.has(num)){
            dupl.add(num)
        }else{
            exist.add(num)
        }
    }
    return [...dupl];
}

console.log(findDupplicate([1,2,3,4,5,3,2,1]));











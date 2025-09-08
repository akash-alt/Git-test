// Problem statement

// 🔹 Practice Problems (5–7 small ones)

// Print numbers 1–10 using loop.

// Reverse an array without using reverse().

// Find max number in an array.

// Check if a string is a palindrome.

// Count vowels in a string.

// Factorial of a number using loop.

// Sum of even numbers from 1–100.

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//


// 1>
// function printNumbers() {
//     for(let i=0;i<10;i++){
//         console.log(i+1);
//     }   
// }
// printNumbers();
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

// 2>
// const users = [
//     {id:1,name:"akash",active:'true'},
//     {id:2,name:"danni",active:'false'},
//     {id:3,name:"abc",active:"true"}
//     ]
    
// let res = users.filter((ele) => ele.active).map((ele) => ele.name);
// console.log(res)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//


// const users = [
//     {id:1,name:"akash",active:'true'},
//     {id:2,name:"danni",active:'false'},
//     {id:3,name:"abc",active:"true"}
//     ]
    
// let res = users.filter((ele) => ele.active).map((ele) => ele.name);
// console.log(res)


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// filter, sort, map chaining for products with rating >=4 and sort descending

// const products = [
//   {name:'A', rating:4.2}, {name:'B', rating:3.1},
//   {name:'C', rating:4.8}, {name:'D', rating:4.5},
//    {name:'E', rating:3.8}, {name:'F', rating:4.9}
// ];

// const res = products.filter((item) => item.rating >=4).sort((a,b) => b-a).map((item) => item.name)
// console.log(res)


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// 3>   
// let stack = [];

// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);

// stack.pop();
// stack.pop();

// console.log(stack);



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// 4>

// console.log("1");
// setTimeout(() =>{
//     console.log("2,(macro task)");
    
// })
// Promise.resolve().then(() => {
//     console.log("3 (micro task)");
// })

// console.log("4");


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// 5> async await/promises

// function Wait(){
//     setTimeout(() => {
//         console.log('====================================');
//         console.log("setTimeout after 2 sec");
//         console.log('====================================');
//     });
// }

// async function Wait2(){
//     console.log("test");
//     await Wait(1000)
//     console.log("test2");  
// }
// Wait2();


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// 6> Prototypal inheritance

// let animal = {
//     eats: true
// };

// let dog = Object.create(animal);
// dog.barks = true;
// console.log(dog.barks);

// 2nd example

// function Person(name){
//     this.name = name
// }
// Person.prototype.greet = function(){
//     console.log(`Hello, my name is ${this.name}`);
// }

// let details = new Person("Akash");
// details.greet();


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Wait & log sequence


// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve,ms))
// }

// async function run(params) {
//     console.log("1");
//     await wait(2000);
//     console.log("2");
//     await wait(1000)
//     console.log("3");
// }
// run();


// 2nd example
// function fakeApi(){
//     return new Promise((resolve) => {
//         setTimeout(() =>{
//             resolve("data from api")
//         })
//     })
// }

// async function run(params){
//     const data = await fakeApi({name:"akash"});
//     console.log(data);
// } 
// run();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// 3rd example

// const arr = [1,2,3,4,5];
// let res = arr.reverse();
// console.log(res);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// 4th: example Find Maximum & Minimum in Array
// const arr1 = [3,5,7,2,8,1,4];
// let max = Math.max(...arr1);
// let min = Math.min(...arr1);
// console.log(max);
// console.log(min);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//    
//Sum of All Elements

// const arr2 = [3,5,7,2,8,1,4];
// let sum = arr2.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Remove Duplicates from Array
// const arr3 = [1,2,2,3,4,4,5];
// let unique = [...new Set(arr3)];
// console.log(unique);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// missing values in array

// const arr = [1,2,4,6,3,7,8];
// let n = 8;

// let missing = n*(n+1)/2 - arr.reduce((acc,curr) => acc + curr,0);
// console.log(missing);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
//  Chunk an Array

// function chunkArray(arr,size){
//     let result = [];
//     for(let i=0;i<arr.length;i+=size){
//         let chunk = arr.slice(i,i+size);
//         result.push(chunk)
//     }
//     // return result;
//     console.log(result);
// }
// chunkArray([1,2,3,4,5,6,7],3)


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Longest Word in Sentence

// function longestWord(){
//     let sentence = "Web Development Tutorial";
//     let res = sentence.split(" ").reduce((a,b) => a.length >= b.length ? a : b);
//     console.log(res);
// }
// longestWord()

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// async function fetchData() {
//   try {
//     throw new Error("Network failed");
//   } catch (err) {
//     console.error("Error:", err.message);
//   }
// }
// fetchData();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// const apiCall = (name) => new Promise(r => setTimeout(()=>r(name),500));
// async function run() {
//   console.log(await apiCall("First"));
//   console.log(await apiCall("Second"));
// }
// run();


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// Promise.all([p1, p2]).then(res => console.log(res)); // [1, 2]


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// async function getData() {
//   const result = await fakeAPI();
//   console.log(result);
// }
// getData();


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// const fakeAPI = () =>
//   new Promise(resolve => setTimeout(() => resolve("Data loaded"), 1000));

// fakeAPI().then(console.log);


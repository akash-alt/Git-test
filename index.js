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
function fakeApi(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("data from api")
        })
    })
}

async function run(params){
    const data = await fakeApi({name:"akash"});
    console.log(data);
} 
run();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// 3rd example




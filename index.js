function outer(){
    const count = 0;
    return function inner(){
        count++;
        return count;
    }
}
const res = outer();
console.log(res());
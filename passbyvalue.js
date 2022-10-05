
function passByValue(value){
    //adding the value with 10
    return(10+value);
}
const num=99;
console.log("num before pass by call",num);
const pbv=passByValue(num);
console.log("num after pass by value function all",num);
console.log("result after pass by value function call",pbv);


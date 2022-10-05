
// Create a program to find the largest amongst given 3 numbers.
 function largestNum(a,b,c){

if (a>b && a>c){
    result = ("a is largest number");
    console.log(result);
} else if (b>a && b>c){
    result = ("b is largest number");
    console.log(result);
} else 
console.log("invalid number");
 }
 largestNum(3,2,1);
 largestNum(2,3,1);
 largestNum(1,2,3);
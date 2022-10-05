
//Create a program to get sum of all digits of a number.

function sumOfAll(number){
    var output = 0;
while (number !=0){
    output = output+number%10;
    number = parseInt(number/10);

}
return output;

}
var number = 10;
console.log(sumOfAll(number));
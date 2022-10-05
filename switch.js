
// Create a program to find if the number is positive, negative or zero.

// function checknum(num){
//     switch
//     case (x > 0);
//   result = "number is positive";
//   console.log(result);
// break; 
// case (x<0);
// result = "number is negative";
// console.log(result);
// break;
// default;
//     result ="number is zero";
//     console.log(result);
// }
// checknum(5);
function checkNum (num){
// let x=3;
switch (true){
    case  (num>0):
    result = "number is positive";
    console.log(result);
    break;
    case (num<0):
    result = "number is negative";
    console.log(result);
    break;
    default:
        result ="result is zero";
        console.log(result);

}
}
checkNum(10);
checkNum(-3);
checkNum(0);

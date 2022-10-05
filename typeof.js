

let num = 10
let str = "gyanendra"
console.log(typeof num)  // returns number
console.log(typeof str)  // returns string

let num1 = "10"
let str1 = "gyanendra"
console.log(+num1)  // converts string "20" to number 20.
console.log(+str1)  // returns NaN, means not a number.
                           // as it cant convert "gyanendra" to a number
let num2 = 10
let str2 = "gyanendra"
let num3 = 0           // ! operator covert truthy value to falsy value or vice versa.
console.log(!num2)  // a number (except 0) is a truthy value so it returns false.
console.log(!str2)  // a string is truthy value so retuns false.
console.log(!num3)  // 0 is falsy value so it returns true.


// let mystr =Number ("320");
// let mynum = 30;
// console.log(mynum + mystr);

// let html ;
// html = "<h1> this is heading</h1>"+
//     "<h2> this is my paragraph</h2>";

//     html = html.concat("this","str2");// concat mean is adding variables

    // console.log(html);
    // console.log(html.length);
    // console.log(html.toLowerCase());
    // console.log(html.toUpperCase());
    // console.log(html);

    // console.log(html.indexOf("<"));
    // console.log(html.lastIndexOf("<"));
    // console.log(html.charAt(3));
    // console.log(html.slice());    
    // console.log(html.split());
    // console.log(html.includes("my"));

// const age=28;
    
// switch (age){
//     case 18:
//         console.log("you are 18");
//         break;

//         case 28:
//             console.log("Gyan you are 28");
//             break;

//             case 38:
//                 console.log("you are 38");
//                 break;

//                 default:
//                     console.log("invalid age");
//                     break;
// }


// for(let i=10; i<=1; i--){
//     console.log(i);
// }

// let j= 0;
// while (j<=10){
//     console.log(j+3);
//     j+=1;
// }

// let k= 120;
// do{
//     console.log(k+2);
//     k++;
// }while(k<=10);

// const http = require("http");

// http.createServer((req,res)=>{
//     res.end("welcome to node js server");
// }).listen(4000);


// var y=10;
// function printMessage(){
    // var x= "hello";
    // console.log(x);
    // return x;
// }
// var result = printMessage();
// console.log(result);
// console.log(x);


// let a=10;
// var x = a++;

// console.log(x);
// console.log(a);


// var x= 10;
// // x+=5;
// x -=5;
// console.log(x);

// console.log(x);

// let y= 20;
// function printMessage(){
//     let s="Gyneendra";
//     {
//         var x="Hello";
//         var xs="hi";
//         console.log(y);
//         console.log(xs);

//     }
// }
// printMessage();


function isPositiveOrnegative(num){
    if(num>=0){
        console.log("This number is positive");
    } else{
        console.log("This number is negative");
    }
}
isPositiveOrnegative(10);
isPositiveOrnegative(-10);
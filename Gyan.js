
// function checkTime(time){

//     if(time<4 && time>=22){
//         console.log("this is night");
//     }
//     else if(time>=4 && time<=12){
//         console.log("this time morning");
//     }
//     else if(time>=12 && time<=16){
//         console.log("afternoon")
//     }
//     else if(time>=16 && time<=22){
//         console.log("evening");
//     }
//     else {
//         console.log("invalid time");
//     }
// }
// checkTime(5);
// checkTime(20);
// checkTime(28);
// checkTime(14);


// function attendClass(userType){

//     if(userType=="student"){
//         console.log("Allow");
//     }
//     else if(userType=="instructor"){
//         console.log("please allow");

//     }else {
//         console.log("deny");
//     }

//     }
// attendClass("student");
// attendClass("instructor");
// attendClass("unknown");


// for(let i=100; i>=1; i--){
//     console.log(i);
// }

// let j=4;
// while(j<=10){
//     console.log(j);
//     j+=2;
// }

// function isVotingAge(age){
//     if(age>=18){
//         return true;
//     }else 
//     {
//         return false;
//     }
// }
// console.log(isVotingAge(12));
// console.log(isVotingAge(52));
// console.log(isVotingAge(21));

// function checkOrder(a,b,c){

//     if( a<b && b<c){
//         console.log("incresing order");
//     }
//     else if(a>b && b>c){
//         console.log("decreasing order");
//     }
//     else{
//         console.log("no order");
//     }
// }
// checkOrder(2,5,6);
// checkOrder(1,2,3);
// checkOrder(5,5,6);
// checkOrder(6,5,4);


//  function add(a,b){
//     console.log(a+b);

// }
// add(10,20);
// console.log(typeof add);

// var add = function(a,b){
//     console.log(a+b);
// }
// function addgg(c,d){
//  c(10,20);
//     console.log(d);
// }
// addgg(add,"welcome");

// const add = function(a,b){
//     console.log(a+b);
// }
// const sub = function(a,b){
//     console.log(a-b);
// }
// const mult=function(a,b){
//     console.log(a*b);
// }
// const div = function(a,b){
//     console.log(a/b);
// }
// function calc(func){
//     func(10,20);
// }
// calc(add);
// calc(sub);
// calc(mult);
// calc(div);

function canGoPark(temp,isRaining){
    if(temp>=20 && temp<=25 && !isRaining){
        console.log("children go to play park");
    }
    else if(temp>=18 && temp<=20 && isRaining){
        console.log("children cant`t go to park");
    }
    else {
        console.log("invalid data")
    }
}
canGoPark(22,false);
canGoPark(18, true);
canGoPark(40,true);
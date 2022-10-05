
//01...

// const array = [8,25,,2,5,,2];
// console.log(array.slice(2,5));

//02

//   function minMaxFind(array){
//     let min=array[0];
//     let max=array[1];

//     for(let i=2; i<array.length; i++){
// // for updating min element
// if(array[i]<min){
//     min = array[i];

// }
//     // for updating max element.
//     if(array[i]>max){
//         max=array[i];
//     }
// }
//     console.log("Min: "+min);
//     console.log("Max: "+max);
//   }
//   minMaxFind([2,3,15,6]);
//   minMaxFind([14,8,5,25]);

// 03...

// function findMaxProfit(array){

//     let MaxProfit=0;
//     let buyingPrice=0;
//     let sellingPrice=0;
//     let changeBuyingPrice=true;

//     for(let i=0; i<array.length-1; i++){
//         sellingPrice=array[i+1];
//         if(changeBuyingPrice){
//             buyingPrice=array[i];
//         }
       

//         // Loss
//         if (sellingPrice<buyingPrice){
//             buyingPrice=true;
// continue;
//         }else{
//             //profit
//             let profit=sellingPrice-buyingPrice;
//             if(profit>MaxProfit){
//                 MaxProfit=profit;
//             }
//             changeBuyingPrice=false;
//         }
//     }
//     console.log(MaxProfit);
// }

// findMaxProfit(100,180,260,310,40,535,695);

//04


// function add(){
//     var x=10;
//     console.log(x);

//     return;
// }
// var result =add();
// console.log(result);

// function add(num){
//     var x=function(){
//         // return 10;
//         console.log(10);
//         return;
//     };

//    return x();
// }
// var result =add(20);
// console.log(result);

// const add=function(){
//     var x=10;
//     console.log(x);
//     return function add2(){
//         var y=20;
//         console.log(x+y);
//     }
// }
// const result = add();
// const result2 = result();
// console.log(result2);


// const print = ()=>{
//     console.log("hello world");
// }

// print();

// ((a,b)=>{
//     console.log("hello world",a+b);
// })(10,20);

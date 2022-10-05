
//Problem – Given an array denoting the cost of stock on different days. Your task is to find the
//maximum profit which can be earned after buying or selling the stock on that particular day.

// function findMaxProfit(array){
//     let maxProfit=0;
//      let buyingPrice=0;
//      let sellingPrice=0;
//     let changeBuyingPrice=true;

//     for(let i=0; i<array.length-1; i++){
//         sellingPrice=array[i+1];

//         if(changeBuyingPrice){
//             buyingPrice=array[i];
//         }
//         if(sellingPrice<buyingPrice){
//             //Loss.
//             changeBuyingPrice=true;
            
//         }else{
//             //Profit.
//             let profit=sellingPrice-buyingPrice;
//             if(profit>maxProfit){
//                 maxProfit=profit;
//             }
//             changeBuyingPrice=false
//         }
//     }
//     console.log(maxProfit);
// }
// findMaxProfit([100,180,260,310,40,535,695]);
// findMaxProfit([120,898,260,489,40,585,695]);
// findMaxProfit([100,180,258,310,45,535,785]);


function findMaxProfit(array){
    let maxProfit=0;
    let buyingPrice=0;
    let sellingPrice=0;
    let changeBuyingPrice=true;

    for (let i=0; i<array.length-1; i++ ){
sellingPrice =array[i+1];

if (changeBuyingPrice){
changeBuyingPrice= array[i];
}
if (sellingPrice<buyingPrice){

    changeBuyingPrice=true;
}else{
let profit =sellingPrice-buyingPrice;
if(profit>maxProfit){
    maxProfit=profit;
}
changeBuyingPrice=false;
    }
    }
    console.log(maxProfit);
}
// 
findMaxProfit([120,158,450,100,358,458]);
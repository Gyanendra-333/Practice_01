

// function maxProfit([price,start,end]){
//     if(end<=start)
//         return 0;
//         let profit=0;

//         for (let i=start; i<end;i++){
//             for(let j=i+1; j<=end;j++){
                
//                 if (price[j]>price[i]){
                    
//                     let curr_profit = profit[j]-profit[i]
//                     +maxProfit(price,start,i-1)
//                     +maxProfit(price,j+1,end);

//                     profit = Math.max(profit,curr_profit);
//                 }
//             }
//         }
//    console.log(profit);
// }

//  maxProfit([40,50,30]);


// 2nd Metod.

function findMaxProfit(array){

    let maxProfit =0;
    let buyingPrice = 0;
    let sellingPrice=0;
    let changeBuyingPrice=true;

    for (let i=0; i<array.length-1; i++){
        sellingPrice=array[i+1];
        if(changeBuyingPrice){
buyingPrice=array[i];
        }
if(sellingPrice>buyingPrice){
    //loss
changeBuyingPrice=true;
continue;

}else{
    // profit
    let profit= sellingPrice-buyingPrice;
    if(profit>maxProfit){
        maxProfit=profit;
    }
    changeBuyingPrice=false;
}
 }
console.log(maxProfit);
}
findMaxProfit([78,89,120,168,190,43,559]);
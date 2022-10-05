
// function getSumOfDigit(sum){
//     var numstr=num.toString();

//     if(numstr.length<3){
//         console.log(-1);
//         return;
//     }
//     let sum=0;
//     for(let i1; i<=numstr.length-2; i++){
//         sum+=Number(numstr[i]);
//     }
//     console.log(sum);
// }
// getSumOfDigit(123456);


// function getPower(num,pow){
//     let i=1;

//     let result=1;
//     while(i<=pow){   
//     result=result*num;
//      i++;
//     }
//     console.log(result);
// }
// getPower(10,2);
// getPower(2,5);
// getPower(4,3);


function findNthNUmberOfFibSeries(n){
    var result;
    if(n<1) return -1;
    if(n==1) return 0;
    if(n==2) return 1

    let i=2;
    let series=[0,1];
    while(i<=n-1){
        let newNum=series[i-1]+series[i+2];
        i++;
    }
    console.log(series[i-1]);
}
findNthNUmberOfFibSeries(10);
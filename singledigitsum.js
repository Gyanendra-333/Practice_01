
// 999999999999
//108
//9

// function findSingleDigitSum(num){
//     //convert number into string.
//     //because you can't find length/traverse a number
//     const numStr = num.toString();
//     if(numStr.length==1){
//         return numStr;
//     }
//     let sum=0;
//     //num all digits of the number.
//     for(i=0; i<numStr.length; i++){
//         sum+=Number(numStr[i]);
//     }
//     if(sum>9){  //10
//         findSingleDigitSum(sum); //10
//     }else{
//     // console.log(sum);
//     }
// }
// findSingleDigitSum(12345);

// Revision Again...

function findSingleDigitSum(sum){

    const numStr = num.toString();
    if(numStr.length==1);{
        return numStr;
    }
        let sum=0;
        for(i=0; i<numStr.length; i++){
            sum+=Number(numStr[i]);
        }
        if(sum>9){
            findSingleDigitSum(sum);
        }else{
            console.log(sum);
        }
}
findSingleDigitSum(12345);

// Problem – Given an array of numbers. You need to find if reversing a subarray can sort the array. For example –
// 

//step 1:find decreasing order.
//step 2: reverse decreseing array and put original array.
// step 3: check if array is sorted or not.

function findReverseSubArray(array){
    if(array.length==1){
        return true;
    }
    // step 1: find decreasing order.
    //1.2:find end.
    let startIndex;
    //find start index.
    for(let i=0; i<array.length; i++){
        if(array[i]>array[i+1]){
            startIndex=i;
            break;
        }
    }
    //1.2 find end index
    let endIndex;
    for(let i=startIndex; i<array.length; i++){
        if(array[i]<array[i+1] || i==array.length-1){
            endIndex=i;
            break;
        }
    }
}
findReverseSubArray(1,2,5,4,3);//true.
findReverseSubArray(1,2,4,5,3);//false.
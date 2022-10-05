
//PROBLEM=> Given an array of numbers. Your task is to find the minimum and maximum element.

// function findMinMax(array){
//     let min = array[0];// Assume that.
//     let max = array[1];// Assume that.
// for (let i=2; i<array.lenght; i++){

// // for updating min element

// } if (array[i]<min){
//      min=array[i];

//  }
//      // for updating max element

//  if(array[i]>max){
//      max=array[i];

//  }
// //  console.log("Min:"+max);
// //  console.log("Max:"+min);
//  }

//  findMinMax([3,2,9,8]);
// // findMinMax([7,58,6,2]);


function findMinMax(array){
    let min= array[0];
    let max=array[1];
for(let i=2; i<array.length; i++){
 // for updating min elelment.
if(array[i]<min){
    min=array[i];
}
// for updating max elelment.
if(array[i]>max){
    max=array[i];
}
}
console.log("Min:"+min);
console.log("Max:"+max);

}

findMinMax([2,3,15,6]);
findMinMax([3,2,9,8]);
findMinMax([7,14,6,9]);
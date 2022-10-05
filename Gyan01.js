

// var x= true;

// console.log(x);
// console.log(!x);
// var a=10;
// var b=20;
// console.log(a==b);

// function sumTillN(n){
//     let sum =0;
//     for(let i=0; i<=n; i++){
//         sum =sum+i;
//     }
//     console.log(sum);
// }
// sumTillN(10);
// sumTillN(5);
// sumTillN(20);


// function pattern(num){

//     for (let i=1; i<=num; i++){
//         let stars = "";

//         for (let j=1; j<=i; j++){
//             stars +="*";
//         }
//         console.log(stars);
//     }
// }
// pattern(5);

// function pattern(num){

//     stars="";
//     for(i=1; i<=num; i++){ // loop for create rows till 5.

//         for(j=1; j<=num-i; j++){ // loop for create space. 
//             stars +=" ";
//         }
//         for(k=0; k<2*i-1; k++){  // loop for create stars.
//             stars +="*";
//         }
//         stars +="\n";
//     }
//     console.log(stars);
// }
// pattern(5);

// function checkAtLargest(a,b,c){

//     return a>b && a>c ? "a is largest" : b>a && b>c ? "b is largest":"c is largest";
// }

// console.log(checkAtLargest(8,2,3));
// console.log(checkAtLargest(3,5,2));
// console.log(checkAtLargest(3,6,9));

// var arrayOfNumbers = [10,20,30,40,50];
// var arrayOfStrings = ["Ram","shyam","Gyan","Sita","Geeta"];
// var arrayOfMixedValues = [10,50,"Gyan","Ram",true,false];

// console.log(arrayOfNumbers[0]+arrayOfNumbers[3]);
// console.log(arrayOfNumbers.length);
// console.log(arrayOfNumbers.indexOf(50));
// console.log(arrayOfMixedValues.length);


// var x= "Bareilly";
// var x= 20;

// function reverseString(str){
//     var output ="";
//     for (let i=str.length-1; i>=0; i--){
//         output =output+str[i];
//     }
//     console.log(output);

// }
// reverseString("bareilly");
// reverseString("Ram");


function calculateBricks(){
    let lOfWall = 24;
    let hOfWall = 8;
    let thicknes = 0.6;
    let volumeOfWall = lOfWall*hOfWall*thicknes;
    let volumeOfBricks =24*12*8;
    let mortor = 15;
    
    let noOfBricks =(((100-mortor)/100)*volumeOfWall*(100*100*100)/ volumeOfBricks);
    console.log(Math.ceil(noOfBricks));
}
calculateBricks();
console.log(Math.round(10.2));
console.log(Math.ceil(10.9));
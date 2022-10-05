

// function printSpiralMatrix(matrix){

//     let startRow=0;
//     let startCol=0;
//     let endRow=matrix.length-1;
//     let endCol=matrix[0].length-1;

//     while(startRow<endRow && startCol<endCol){
//     // 1. 1st Loop from 1st row 1st column to 1st row last column.
//     for(let i=startCol; i<=endCol; i++){
//         console.log(matrix[startRow][i]);
//     }

//     // 2. 2nd Loop from 2ndrow last column to last row last column
//     startRow=startRow+1;
//     for(let i=startRow;i<=endRow;i++){
//         console.log(matrix[i][endCol]);
//     }

//     endCol = endCol-1;
//     for(let i=endCol; i>=startCol; i--){
//         console.log(matrix[endRow][i]);
//     }

//     endRow = endRow-1;
//     for(let i=endRow; i>=startRow; i--){
//         console.log(matrix[i][startCol]);
//     }
//     startCol=startCol+1;
//     }
// }

// const matrix = [
//                 [1,2,3,4],
//                 [5,6,7,8],
//                 [9,10,11,12],
//                 [13,14,15,16]
// ];

// printSpiralMatrix(matrix); 


// 2nd problem


// function printWaveForm(matrix){
//     const colLength = matrix[0].length;
//     // going through all the columns
//     for(let col=0; col<colLength; col++){
//         if(col%2==0){
//             for(let row=0; row<matrix.length; row++){
//                 console.log(matrix[row][col]);
//             }
//         }else{
//             for(let row = matrix.length-1; row>=0; row--){
//                 console.log(matrix[row][col]);
//             }
//         }
//     }
// }

// const wmatrix = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ];

// printWaveForm(matrix); 

 // Submitted by=>  Gyanendra Prakash.
// const person = {
//     id: 0133,
//     name: "Robert",
//     positon: "web-developer",
//     salary: 8000,
//     pColor: "red",
//     pSports: "football",
//     pMovies: ["word war 1", "destroy the world", "long way", "Where is my home"],
//     pChild: {
//         firstChild: "Adiba",
//         secondChild: "Aman"
//     }
// }
// const { secondChild } = person.pChild;
// console.log(secondChild);


// // program to clone the object

// // declaring object
// const person = {
//     name: 'Gyan',
//     age: 25,
// }

// // cloning the object
// const clonePerson = Object.assign({}, person);

// console.log(clonePerson);

// // changing the value of clonePerson
// clonePerson.name = 'Prakash';

// console.log(clonePerson.name);
// console.log(person.name);



// Javascript program to update every array element with
// multiplication of previous and next numbers in array




// JavaScript Code for the same approach
 
// function move(arr){
//     arr.sort();
// }
 
// // driver code
   
// let arr = [ -1, 2, -3, 4, 5, 6, -7, 8, 9 ];
// move(arr);
// for (let e of arr)
//     console.log(e , " ");
   

// const array = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
// for(let i=0; i<array.length; i++){
//     for(let j=0; j<array.length; j++){
//         console.log(array[i][j]);
//     }
// }


function printSpiralMatrix(matrix){

    
}
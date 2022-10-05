

function isDiaogonalMatrix(matrix){

    //loop to go through every row in matrix.
    for(let i=0; i<matr.length; i++){
        for(j=0; j<matr[0].length; i++){
            //if this is not diagonal area
            if(i!=j && matr[i][j]!=0){
                return false;
            }
        }
    }
    return true;
}
matrix = [
    [1,0,0,0],
    [0,2,0,0],
    [0,0,2,0],
    [0,0,0,6]
];

matrix1 = [
    [1,4,0,0],
    [0,2,0,0],
    [0,0,2,0],
    [0,0,0,6]
];


console.log(isDiaogonalMatrix(matrix));
console.log(isDiaogonalMatrix(matrix1));
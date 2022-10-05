

function isMatrixIsDifferent(matrix){
const result=[];
    //1. go through each column in matrix.
    for(let i=0; i<matrix[0].length; i++){

        //2. go through every array.
        for(let j=0; j<matrix.length; j++){
            sum=sum+matrix[j][i];
        }
        result.push(sum);
    }
    console.log(result);
}
const matr=[
    [3,4,5],
    [3,4,2],
    [2,3,4],
    [4,4,4]
];

isMatrixIsDifferent(matr);
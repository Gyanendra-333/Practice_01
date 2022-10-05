

// var array=[1,2,3,4,5,6,7,8,9];
// console.log([array.length]);

var n=4,m=5;
var matrix = new Array(n);

for(i=0; i<matrix.length; i++){
    matrix[i]= new Array(m);
}
var cnt=0;

for(var i=0; i<n; i++){
    for(var j=0; j<m; j++){
        matrix[i][j]=cnt++;
console.log(matrix[i][j]+" ")
}
console.log("\n");
}


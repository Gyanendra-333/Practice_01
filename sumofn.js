

// Create a program to get sum of all digits of a number.

function sumTiillN(n){
    let sum = 0;
    for(i=1; i<=n; i++){
        sum =sum+i;  // 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15.
        // sum+=i;
    }
        console.log(sum);
    

}
sumTiillN(5);
sumTiillN(10);
sumTiillN(100);

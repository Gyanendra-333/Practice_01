

// Create a pattern using ‘*’ as shown below using loops.

function pattern(num){
    for (let i=1; i<=num; i++){
let pat ="";
for (let j=1; j<=i; j++){
    pat+="*";
}
console.log(pat);
    }

}
pattern(7);
pattern(5);
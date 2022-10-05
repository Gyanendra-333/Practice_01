

function reverseString(star){
    let j = " ";
    for (let i=star.length-1; i>=0; i--){
        j +=star;
        console.log(j);
    }
    return j;

}
reverseString(" * " + " $ ");


// Create a program to find if the number is positive, negative or zero.

function checkNumber(num){
    if(num>0){
        console.log("positive");
    }
    else if(num<0){
        console.log("negative")
    }
    else if(num==0){
        console.log("zero")
    }
    else{
        console.log("invalid")
    }
    

}
checkNumber(10);
checkNumber(-10);
checkNumber(0);
checkNumber("Gyan");
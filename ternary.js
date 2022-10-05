 
 //Create a program to print the result as pass if the marks obtained is greater than or equal to 40 using ternary operator.

function ifPassFail(marks){
    let result = marks>=40? "pass" : "fail";//1=>Condition 2=>Cond.True 3=> Cond.False.
        console.log(result);
    
}
ifPassFail(45);
ifPassFail(20);
ifPassFail(90);
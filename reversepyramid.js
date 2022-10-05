

function findReversePyramid(num){
    for(let i=1; i<=num; i++){
        let Line=+"";
        //1. print initial space.
        for (let j=1; j<1; j++){
            Line=Line+"";
        }
        // 2. print nums and spaces in between.
        for(let k=i; k<=num; k++){
            Line+=k+" ";
        }
        console.log(Line);
    }
}
findReversePyramid(9);
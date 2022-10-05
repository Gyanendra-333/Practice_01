

// Problem =>  Create a program which gives output for children to go out in park if the temperature is between 20
// degrees Celsius – 25 degrees Celsius and if it’s not raining outside, ask them to be in play school if
// the temperature is between 18 degrees Celsius to 20 degrees Celsius and raining otherwise, they
// should not step out of the home.


function childrenGoToPark(temp,isRaining){
    if(temp>=20 && temp<=25 && !isRaining){
        console.log("children can go to park");
    }
    else if(temp>=18 && temp<=20 && isRaining){
        console.log("children can not go to park");
    }else{
        console.log("invalid");
    }
    
    }

    childrenGoToPark(22,false); // can go park.
    childrenGoToPark(19,true); // cant go park.
    childrenGoToPark(40,true); // invalid.


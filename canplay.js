// problem=>

// Create a program which gives output for children to go out in park if the temperature is between 20 degrees Celsius – 25 degrees Celsius and if it’s not raining outside, ask them to be in play school if the temperature is between 18 degrees Celsius to 20 degrees Celsius and raining otherwise, they should not step out of the home.


function isRaining(temp){
    if (temp>=20 && temp<=25 && "is not raining"){
console.log("you can play outside")
    }
    else if (temp>=18 && temp<=20 && "is raining"){
        console.log("you can not play outside");
    } else {
        console.log("go home and play inside")
    }
}
isRaining(22);
isRaining(19);
isRaining(40);
isRaining(26);
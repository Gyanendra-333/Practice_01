

//1=>.. syntax for declearing an single dimesion array.

const myarray = [`Gyan`,`Ram`,`Shyam`];
// console.log(myarray[0]);  // print first element.
// console.log(myarray[1]);  // print second element.
// console.log(myarray[2]);  // print third element.

//2=>.. example of multidimesional array

var items = [
    [2,3],
    [4,5],
    [6,7]
];
// console.log(items[0][0]);//2
// console.log(items[0][1]);//3
// console.log(items[1][0]);//4
// console.log(items[1][1]);//5
// console.log(items[2][0]);//6
// console.log(items[2][1]);//7
// console.log(items);

//3=> commom length

const cities = [`lucknow`,`delhi`,`Bareilly`]
let length = cities.length;
// console.log(length);
// console.log(cities);

// 4=> for loop; creating an array 

for (i=0;i<cities.length;i++){
    // console.log(cities[i]);
}

//5=>  commom operations...

const obj = [10,20,30];
    // console.log(obj.length);
    // console.log(obj);

    //looping through an object 

    const animals = {
        lion: 1,
        fox: 2,
        tiger: 3,
        Elephant: 2,
    };
    // const entries = 
    // const entries = object.entries(animals);
    console.log(animals);
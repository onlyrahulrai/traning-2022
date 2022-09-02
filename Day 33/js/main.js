// const items = [  ]

/*
integer,
float,
string,
object,
null,
undefined,
Symbol,
BigInt,
Boolean
*/

const object = {
    name:"Ramroop Yadav"
}

// type of array and null is object.
// Type of undefined is undefined

const symbol = Symbol('1')

const items = [1,2,3,"Ramroop Yadav",true,null,false,undefined,object,1.2,1];

// It is used to access array elements.
// items[2]

// Ramroop Yadav ------> Mansi Singh

// It is used to update Array elements.
items[3] = "Mansi Singh";
items[4] = false;

// items[5] = '';

items[1000] = "Ramroop Yadav"

items.push("ABC");
items.unshift("XYZ");

items.push(false)

// items.pop()
// items.shift()

// items.findIndex(function)

console.log(items)


// function getIndex(element){
//     return element === false
// }

const getIndex = function(element){
    return element === false
}

console.log(items.findLastIndex(getIndex))



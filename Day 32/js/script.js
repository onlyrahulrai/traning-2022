// const age = parseInt(prompt("How old are you? "))

// if(age > 18){
//     console.log("Your are eligible to see this movie. ")
// }else{
//     console.log("You're not eligible to see this movie. ")
// }

// let counter = 0;

// while(true){
//     if(counter === 18){
//         break;
//     }
//     counter++;
// }

// console.log(" ----- Counter ----- ",counter)

// switch(true){
//     case age > 18:
//         console.log("Your are eligible to see this movie. ")
//         break;
//     default:
//         console.log("You're not eligible to see this movie. ")
// }

// ------ Function ------



let a = 5;
let b = 7;

// function sum(a,b){
//     return a+b;
// }

// const sum = (a,b) => {
//     return a+b
// };

// const sum = function(a,b){
//     return a+b;
// }

// console.log(sum(a,b))

function userDetails(firstName,lastName,age,email,mobile){

    // console.log(arguments)

    // let [firstName,lastName,age] = arguments;

    // arguments[0] + arguments[1] + arguments[2]

    // return arguments[0] + " " + arguments[1] + " " + arguments[2]

    return firstName + " " + lastName + " " + age;


}

// console.log(userDetails("Mansi","Singh",24));


let age = 18;

function eligible(age){
    if(age > 18){
        console.log("Eligible")
    }else{
        console.log("Not eligible")
    }
    // return " ----- Hello World ----- ";
}

console.log(eligible(18));









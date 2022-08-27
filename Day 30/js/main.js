// while,do...while,for

// While structure

// let count = 0;

/*
    continue;
    break;
*/

/*
while(count <= 10){
    // Your code goes here

    
    // if(count === 5){
    //     break;
    // }
    
    
    // if(count === 5 || count === 9){
    //     continue;
    // }
    

    if(count < 5){
        console.log("Hello world!");
    }else{
        console.log(count);
    }

    count++;
}
*/

// let count = 0; // Begin

/*
while(count < 0){
    console.log("Hello World!");
    count++;
}
*/

/*
let count = 0; // Begin

do{
    console.log("Hello World!");
    count++; // Step
}while(count < 0) // - Condition 
*/

/*
for(begin;condition;step){
    // Your code goes here
}
*/


/*
for(let count = 0;count <= 10;count++){
    if(count === 5){
        break;
    }

    console.log("Hello World!");
}
*/

let i = 0;

/*
while(++i < 5){
    console.log("Hello World!")
}
*/

/*
while(i++ < 5){
    console.log("Hello World!",i)
}
*/

/*
    1 < 5 - true - Hello World!
    2 < 5 - true - Hello World!
    3 < 5 - true - Hello World!
    4 < 5 - true - Hello World!
    5 < 5 - true - Hello World!
*/

/*
    while(i++ < 5){
        console.log("Hello World!")
    }
*/

/*
0 <= 10 - true - Hello World!
1 <= 10 - true - Hello World!
2 <= 10 - true - Hello World!
3 <= 10 - true - Hello World!
4 <= 10 - true - Hello World!
5 <= 10 - true - Hello World!
6 <= 10 - true - Hello World!
7 <= 10 - true - Hello World!
8 <= 10 - true - Hello World!
9 <= 10 - true - Hello World!
10 <= 10 - true - Hello World!
11 <= 10 - true - Hello World!
*/


// Switch Statement

const num1 = parseInt(prompt("Enter first number: "))
const operator = prompt("Enter the operation: ")
const num2 = parseInt(prompt("Enter second number: "))

/*
if(operator === '+'){
    alert(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
}else if(operator === '-'){
    alert(`Subtraction of ${num1} and ${num2} is ${num1 - num2}`);
}else if(operator === '*'){
    alert(`Multiplication of ${num1} and ${num2} is ${num1 * num2}`);
}else if(operator === '/'){
    alert(`Division of ${num1} and ${num2} is ${num1 / num2}`);
}else if(operator === '**'){
    alert(`Exponentiation of ${num1} and ${num2} is ${num1 ** num2}`);
}else if(operator === '%'){
    alert(`Modules of ${num1} and ${num2} is ${num1 % num2}`);
}else{
    alert("Please input operation from this [+,-,*,/,%,**]:")
}
*/

/*
switch(operator){
    case 'add':
    case '+':
        alert(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
        break;
    case 'subtract':
    case '-':
        alert(`Subtraction of ${num1} and ${num2} is ${num1 - num2}`);
        break;
    case 'multiply':
    case '*':
        alert(`Multiplication of ${num1} and ${num2} is ${num1 * num2}`);
        break;
    case 'divide':
    case '/':
        alert(`Division of ${num1} and ${num2} is ${num1 / num2}`);
        break;
    case 'exponent':
    case '**':
        alert(`Exponentiation of ${num1} and ${num2} is ${num1 ** num2}`);
        break;
    case 'modulas':
    case '%':
        alert(`Modules of ${num1} and ${num2} is ${num1 % num2}`);
        break;
    default:
        alert("Please input operation from this [+,-,*,/,%,**]:")
}
*/

/*
    1. Write a program that print month by taking month number by using Switch and if else condition.
    2. Write a program that print weak name by taking weak number by using Switch and if else condition.
    3. Write a program to print factorial of given number.
    4. Write a program that reverse a given number.
    5. Write a program to check whether a number is even or odd. 
*/

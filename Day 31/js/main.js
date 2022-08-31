const marks = parseInt(prompt("Enter your obtain marks: "))

/*
if(marks >= 90 && marks <= 100){
    console.log(" S Grade ");
}else if(marks >= 80 && marks < 90){
    console.log(" A Grade ");
}else if(marks >= 70 && marks < 80){
    console.log(" B Grade ");
}else if(marks >= 60 && marks < 70){
    console.log(" C Grade ");
}else if(marks >= 50 && marks < 60){
    console.log(" D Grade ")
}else if(marks >= 40 && marks < 50){
    console.log(" E Grade ");
}else if(marks > 0 && marks < 40){
    console.log(" Student has been failed! ")
}else{
    console.log(" Please enter a valid marks ");
}
*/

switch(true){
    case (marks >= 90 && marks <= 100):
        console.log(" S Grade ");
        break;
    case (marks >= 80 && marks < 90):
        console.log(" A Grade ");
        break;
    case (marks >= 70 && marks < 80):
        console.log(" B Grade ");
        break;
    case (marks >= 60 && marks < 70):
        console.log(" C Grade ");
        break;
    case (marks >= 50 && marks < 60):
        console.log(" D Grade ");
        break;
    case (marks >= 40 && marks < 50):
        console.log(" E Grade ");
        break;
    case (marks > 0 && marks < 40):;
        console.log(" Student has been failed! ");
        break;
    default:
        console.log(" Please enter a valid marks ");
}
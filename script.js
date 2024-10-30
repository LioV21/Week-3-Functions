//  Greeting Function
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("some name")); 

// Function for approximate circumference of a circle
function circumference(diameter) {
    const pi = 3.14159;
    return pi * diameter;
}

console.log(circumference(10)); 

//  Function that calls another function
function firstFunction() {
    console.log("Entering first function...");
    secondFunction(); 
    console.log("Exiting first function...");
}

function secondFunction() {
    console.log("Inside second function...");
}

firstFunction();

// Function causing a stack overflow 
function causeOverflow() {
    return causeOverflow(); 
}

console.log(causeOverflow()); 






//switch cases ----- easier to write this then multiple if statments & saves time
//example below 

var hero = 1

if ( typeof hero === "string")
switch(hero){
    case "ww":
        console.log(`${hero} is the 1st character`)
        break;   //break is used to stop outcome from looping i.e repeating it self over and over
    case "superman":
        console.log(`${hero} is the 2nd character`)
        break;    
     case "batman":
        console.log(`${hero} is the 3rd character`)
        break;
     case "joker":
        console.log(`${hero} is the 4th character`)
        break;
     case "ironman":
        console.log(`${hero} is the 5th character`)
        break;
default: (hero)        //default means else statment 
        console.log("I dont know this character")
        break;
}
else{
    console.log("characters can only be a word")
}

//function ---- function are compartmentalized peices of code - live and exist on their own-- they are private peices of code and therefore not accesible unless specifcally stated



//an e.g 

/*const name = "Hashim"

function naming(){
    const name = "casermiro"
    console.log(name)
}

console.log(name)
naming()
*/

const a = "125"
const b = 35 

function addition(number1,number2){
    console.log(number1+number2)
}

function subtraction (number1,number2){
    console.log (number1-number2)
}

function multiplaction (number1,number2){
    console.log(number1*number2)
}

function division (number1,number2){
    console.log(number1/number2)
}

if (typeof a=== "number" && typeof b=== "number"){
    addition(a,b)
    multiplaction(a,b)
    subtraction (a,b)
    division (a,b)
}
else{
    console.log("var a and b have to be a number")
}

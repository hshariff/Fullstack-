 //how we can obtain info inside of functions 

  //e.g using the return variable 


/*var name = "has"

console.log(name)

function nam(){
      const name = "d"
    return name;  // the return variable executes and exits the code- meaning anything after it is not read 
}

var name2= nam()
console.log(name2)

function numbers(number1,number2){
    var result= (number1/number2)
    const name= "has"
    return number1+number2;
}

var answer = numbers(2568,2)


console.log(answer)

if( typeof answer=== "number"){
    console.log(answer)
}

else {
  console.log(`answer cannot be a string, only a number: ${answer}`)
}


function list(){
    var array = ["milk", "bread", "butter"]
    return array;
}

function item(param){
    var list= [ "sweet potato", "cucumber", "lettuce"]
    return list[param]
}

var array = item (2)

var array = list() 

array.push(array)

console.log(array)
*/

var name = "skfskf"

function validation (param){

    var answer = stringValidation(param)
    var result = stringLength(param)

    if(answer === true && result === true){
        console.log(`name ${param} is a string that is a greater than 2 and less than 10 so passes validation`)
    } else{
        console.log(` ${param} does not meet the specified requirements`)
    }
}

function stringValidation(name){
    

    if(typeof name === "string")

        var result = true 
    else{
        var result = false 
    }

    return result
}

function stringLength(name){
    if(name.length >2 && name.length <=10){
        var result = true
    }
   
    return result
}

validation(name)

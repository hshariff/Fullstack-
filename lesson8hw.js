/* Homework questions 

1. **Write a conditional statement to state if hero is a dc character or marvel character. (i.e superman would be dc, spiderman would be marvel).**
2. **write a conditional statement taking age as variable and what year group they will be in a school (i.e 11-16 will be secondary school year group, 16-18 college anyone above optional education). (if this does not make sense please watch the summary video or the youtube video pasted above)**
3. **Create a shopping list of 5 items. Now make a conditional statement that checks if the list contains 5 items only. if above 5 print out error and if less than 5 print out error.**
4. **Write a conditional statement that takes into consideration validations (i.e case sensitivity). this will be entire up to you as to what the conditional statement is on. (if this does not make sense please watch the summary video or the youtube video pasted above)**
5. **Write a conditional statement that prints whether the phone being used is an Iphone or an android**
*/ 

//1 
 
var hero= "Iron man"   //=== is used for it to be strict!!

if (hero === "Superman"){
    console.log (`${hero} is a dc character`)
}
else if(hero ==="Spiderman"){

console.log (`${hero} is a dc character`)
}

else{
    console.log ("unspecified character")
}

//2 

let age= 19; 

if (age >=11 && age< 16){
    console.log("secondary school")
}

else if(age >=16 && age <= 18){
    console.log("college or sixth form")
}

else{
    console.log("option for further education")
}

//3

var list= ["butter ", "milk ", "bread ", "eggs "]


if(list.length === 5){
  console.log("there are 5 items in the shopping list")
}
else if (list.length > 5){
     console.log("error")
}
else{
    console.log("error")
}

//4 

var team = "Man UniTed"

if (team.toUpperCase ()=== "MAN UNITED"){
     console.log(`${team} is the team I support`)  
 } 

 else if ( team.toLowerCase() === "Arsenal"){
    console.log(`${team} is arguable their biggest rivals`)
 }

 else{
    console.log("unrelated")
 }

//5 

var phone = "iphone"  

if (phone === "iphone"){
    console.log("phone being used is an iphone")
}

else if (phone === "android"){
    console.log("phone being used is an android")
}

else{
    console.log("phone is not a iphone or a android device")
}


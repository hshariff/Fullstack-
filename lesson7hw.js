/* Hw - JS Questions

1. **Using string concatenation add two different strings together and print this off.**
2. **Using variables create a variable for a number, a string. Then print each of these variables**
3. **Using string concatenation in javascript combine 3 different variables and prints it off. I.e variable for name age and date of birth will result in “my name is abdulkadir I am 24 years old and I was born in 1998”. (you cannot use name age and dob as your variables)**
4. **Print off the datatypes for a number variable, string variable**
5. **From you understanding of array create an array with 15 items inside**
6. **From the array just created in the above question remove the last item in the array. You cannot alter the original array.**
7. **Add an item to the end of the list. Cannot alter the original array**
8. **Find the position of the first item, middle item and last item of the list and print them off separately.**

*/

// 1 
    console.log("first string ", "second string")

// 2 
    var Name = ("Hashim ")
    var Numbers = 1 
    console.log( Name + Numbers)

//3 
    var sport = ("Football")
    var team = ("United")
    var country = ("England")

    console.log("My favourite " + sport + " team " + " is " + team + " who play in " + country)

//4 
    time = 24
    console.log(typeof time)
    console.log("This equals ", 2+2+2+2+2)

    string = "testing"
    console.log(typeof string)

//5  
    var countries = ["Algeria", "Bahrain", " Egypt", "Kuwait", "Palestine", "Saudi Arabia", "Jordan" , "Yemen" , "Oman", "Tunisia", "UAE" , "Turkey", "Libya", "Syria", "Lebanon"]
    console.log(countries)

//6 
    countries.pop(0)
    console.log(countries)

//7 
    countries.push("The Middle-east")
    console.log(countries)

//8 
    

countries.push ("Algeria")
        console.log(countries)

countries.push ([2])

console.log(countries)   


   



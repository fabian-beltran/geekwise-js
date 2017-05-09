/* 1. In assignment.html, create boilerplate & link assignment.js.

2. Ask for first name, last name, age, and place.

3. Ask user if place is correct.

4. Create a popup messaging first & last name combined.

5. Log age.

*/

var firstName = prompt("Hey, what's up man.. what's your name?")
confirm("Oh, nice to meet you, " + firstName+".")

var lastName = prompt("Oh, by the way, what's your last name? Just curious.")
confirm(lastName+"? Nice!")

var age = prompt("Also, last thing.. How old are you? I don't want me parents to think I'm hanging out with some older stranger.")
confirm("You're "+age+"? Perfect! You're almost my age!")

var place = prompt("We should hangout sometime. Where do you wanna hangout at?")
confirm("Okay.. hold on lemme take a note of that.. "+place+" right?")

alert("Alright, cya there, "+firstName+" "+lastName+"!")

console.log(age)

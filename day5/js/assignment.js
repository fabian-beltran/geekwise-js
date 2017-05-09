var name = prompt("Hey, wassup man, what's yo name?")

var lunchPlace = prompt("Oh hey, "+name+", where do you wanna go eat?")

alert("Alright, man, let's go eat at "+lunchPlace+". *walks to "+lunchPlace+"*")

var menu = ["Number 1","Number 2","Number 3","Cheeseburger","Soda","Milkshake"]

var mealType = prompt("Alright, Ill order for you, what would you like? A number 1, 2, 3, cheeseburger, soda or a milkshake? Only one because I only have a few bucks so yea..")

switch(mealType){
	case menu[0]:
		alert("Alright, can I have a "+menu[0]+"?")
		break;
	case menu[1]:
		alert("Alright, can I have a "+menu[1]+"?")
		break;
	case menu[2]:
		alert("Alright, can I have a "+menu[2]+"?")
		break;
	case menu[3]:
		alert("Alright, can I have a "+menu[3]+"?")
		break;
	case menu[4]:
		alert("Alright, can I have a "+menu[4]+"?")
		break;
	case menu[5]:
		alert("Alright, can I have a "+menu[5]+"?")
		break;
}

alert("Okay, I ordered your meal.")

alert(lunchPlace+" Worker: Number "+Math.floor(Math.random()* 99)+", your food is ready!")

alert("Oh that's us, I'll get it.")
// named func

// function myName(){
// 	// code
// 	console.log("not cool")
// }
// myName()

// // anonymous func

// function(){
// 	// stuff
// }

// func expression

// var myName = function(){
// 	console.log('hello from the other side');
// }();

// // Immdiatly Invoked Functon Expressiion (IIFE)

// (function(){
// 	var tst = "dis is a test"
// 	alert("This will run IMMEDIATLY");
// }());

// function myName(firstName,lastName){
// 	console.log(firstName+' '+lastName)
// }

// myName("Fabian","Beltran")

//write func that accepts a number
//log the number * 5

// function checkNumber(num){
// 	console.log(num*5)
// }
// checkNumber(12)


// var myName = function(){
// 	// console.log(arguments[0]+" "+arguments[1])

// 	// for(let i = 0; i < arguments.length; i++){
// 	// 	console.log(arguments[i])
// 	// }

// 	for(i in arguments) {
// 		console.log(arguments[i])
// 	}
// };

// myName('Fabian','Beltran')



// var myName = getName('beltran');

// function getName(lastName){
// 	return 'Fabian '+lastName;
// }

// console.log(myName)

// call getName func passingin a string
// eturn string back to origional func cal
// console myName




// create variable and call birthplace func
// write birthplace func expecting 2 things
// returned a concatinated string pecing city and state together separated by comma

//Fresno, California


// var birthPlace = getBirthPlace("Barranquia","Colombia");

// function getBirthPlace(city,state){
// 	return city+', '+state
// }

// console.log(birthPlace)

// var userName = modUserName(prompt('Username?'));
// var lastName = modUserName(prompt('Last Name?'));
// // var formattedName = userName.charAt(0).toUpperCase()+userName.substr(1).toLowerCase();
// // console.log(userName)

// function modUserName(name){
// 	return name.charAt(0).toUpperCase()+
// 	name.substr(1).toLowerCase();
// };

// console.log(userName+' '+lastName);


///////////////////////////////////////////////////////////////////////////////////


// DOM Manipulation
// .getElementById()

// var btn = document.getElementById('btn');

// console.log(btn);

// // .getElementByTagName()

// var links = document.getElementsByTagName('a');

// console.log(links);

// // .getElementByClassName()

// var dropdowns = document.getElementsByClassName('dropdown')

// console.log(dropdowns)

// // .querySelector()

// var turkey = document.querySelector('#turkey')

// console.log(turkey)

// var aLink = document.querySelector('ul li:last-child a')

// console.log(aLink)

// // .querySelectorAll()

// var allDropdowns = document.querySelectorAll('.dropdown')

// console.log(allDropdowns)

// var allSubLinks = document.querySelectorAll('a li li ul')

// console.log(allSubLinks)



//Event Listeners

var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
	btn.style.backgroundColor = 'red';
});

// mousedown

btn.addEventListener('mousedown', function(){
	btn.style.backgroundColor = 'green';
});

// mouseup

btn.addEventListener('mouseup', function(){
	btn.style.backgroundColor = 'blue';
});

// mousemove

window.addEventListener('mousemove', function(e){
	// console.log(e)
	// console.clear()
	// console.log(e.screenX+':'+e.screenY)
});


// mouseenter

btn.addEventListener('mouseenter', function(){
	btn.style.fontSize = '2em'
	btn.style.color = 'white'
	btn.style.backgroundColor = 'black';
});

// mouseleave

btn.addEventListener('mouseleave', function(){
	btn.style.fontSize = '1em'
	btn.style.color = 'black'
	btn.style.backgroundColor = 'grey';
});

// scroll
window.addEventListener('scroll',function(e){
	//console.log(e)
})

// keypress
window.addEventListener('keypress',function(e){
	console.log(e)
})
// keyup
window.addEventListener('keyup',function(e){
	console.log(e)
})
// keydown
window.addEventListener('keydown',function(e){
	console.log(e)
})
var firstNameBtn = document.getElementById('firstName')
var midNameBtn = document.getElementById('middleName')
var lastNameBtn = document.getElementById('lastName')

firstNameBtn.addEventListener('click',function(){
	var firstName = prompt("Enter your first name.")
})
midNameBtn.addEventListener('click',function(){
	var midNameBtn = prompt("Enter your middle name.")
})
lastNameBtn.addEventListener('click',function(){
	var lastNameBtn = prompt("Enter your last name.")
})
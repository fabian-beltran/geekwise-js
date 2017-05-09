// var meObj = {
// 	firstName: "Fabian",
// 	lastName: "Beltran",
// 	hair: "Black",
// 	eyes: "Black",
// 	height: "56in.",
// 	age: "12",
// 	talk: function(){
// 		console.log('Hello, my name is '+this.firstName+', and my hair is '+this.eyes);
// 	}
// }
// meObj.hair = "black"
// console.log(meObj);

// function person(first,last, age, hair){
// 	this.firstName = first;
// 	this.lastName = last;
// 	this.age = age
// 	this.hair = hair
// }


// var myFather = new person("Fabian","Beltran",57,"Grey")
// console.log(myFather);
// myFather.age = 58;
// console.log(myFather);



/*
	Listen for a NewUser click
*/

var usersArr = [];
var newUser = document.querySelector('nav button');
var newUserForm = document.querySelector('nav form');

newUser.addEventListener('click', function(){
	newUserForm.classList.toggle('hidden');
	// newUserForm.reset();
});

/*
	Listen for a CreateUser click
*/

var newUserBtn = document.querySelector('nav form input[type="submit"]');

var user = {
	first: "Default",
	last: "Default",
	user: "Default"
};

newUserBtn.addEventListener('click',function(event){
	event.preventDefault();
	console.log(newUserForm.children);
	createUser(newUserForm.children);
	newUserForm.classList.add('hidden');
	newUserForm.reset();
});


function NewUserObj(firstName,lastName,userName){
	user.first = firstName;
	user.last = lastName;
	user.user = userName;
};
function createUser(obj){
	usersArr.push(new NewUserObj(obj[0].value,obj[1].value,obj[2].value));
	createAvatar();
	outputUsers();
};
function createAvatar(){
	// add random color generation
	var avatarBox = document.createElement('ul');
	for(let i = 0; i<16;i++){
		var avatarBlok = document.createElement('li');
		avatarBlok.style.backgroundColor = 'white';
		if(Math.floor(Math.random()*2)){
			avatarBlok.style.backgroundColor = 'blue'
		};
		avatarBox.append(avatarBlok);
	};
};
function outputUsers(){
	var userProfiles = document.getElementById('userProfiles')
	userProfiles.innerHTML = '';
	for(let i=0; i< usersArr.length; i++){
		var userli = document.createElement('li')
			userh1 = document.createElement('h1')
			userdiv = document.createElement('div')

		userh1.textContent = usersArr[i].user;
		userdiv.innerHTML = userArr[i].avatar;
		userli.append(userdiv, userh1);
		userProfiles.append(userli);
	}
};

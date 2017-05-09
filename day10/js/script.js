// console.log("Fabians script loaded")
// var meObj = {
// 	firstName: "Fabian",
// 	lastName: "Beltran",
// 	hairColor: "Black",
// 	eyeColor: "Brown",
// 	age: 12,
// 	talk: function(msg){
// 		alert(meObj.firstName+" says, "+"'"+msg+"'")
// 	} 
// };

// meObj.firstName = "Fabi"

// //Object Constructor
// function Person(first, last, age){
// 	this.firstName = first;
// 	this.lastName = last;
// 	this.age = age;
// 	this.talk = function(salutation){
// 		alert(salutation+', from '+this.firstName)
// 	}
// };

// var trump = new Person("Donald","Trump",70)
// console.log(trump)

localStorage.setItem("user","Fabian Beltran")
localStorage.setItem("user","Donld Trump")


var userArr = [];

if(localStorage.getItem('user')){
	userArr = JSON.parse(localStorage.getItem('users'));
	outputUsers();
};

if(localStorage.getItem('user') === "Donald Trump"){
	document.body.style.backgroundColor = "orange";
};


var newUser = document.querySelector("nav button")
var newUserForm = document.querySelector("nav form")

// add click event to newUser
// onClick, toggle classname hidden on the form

// newUser.addEventListener("click",function(){
// 	newUserForm.classList.toggle("hidden")
// 	newUserForm.reset();
// })
var hoverIntent;
newUser.addEventListener("mouseenter",function(){
	hoverIntent = setTimeout(function(){
		newUserForm.classList.remove('hidden')
	},2000);
});
newUser.addEventListener("mouseleave",function(){
	clearTimeout(hoverIntent);
	if(!newUserForm.classList.contain("hidden")){
		newUserForm.classList.add('hidden')
	}
});
/*
Listening for a create user click
*/
var createUser = document.querySelector('nav form input[type="submit"]')
console.log(createUser)
createUser.addEventListener("click",function(event){
	event.preventDefault();
	genUser(newUserForm.elements);
	newUserForm.reset();
});

//User Object Constructor
function UserObj(fn,ln,user){
	this.firstName = fn;
	this.lastName = ln;
	this.userName = user;
};

//Generate new user
function genUser(f){
	userArr.push(new UserObj(f[0].value,f[1].value,f[2].value,genAvatar()));
	outputUsers();
	localStorage.setItem('users',JSON.stringify(userArr));
	// JSON.stringify()
};

//Output userArr
function outputUsers(){
	var userProfiles = document.getElementById("userProfiles");
	document.getElementById("userProfiles");
	userProfiles.innerHTML = '';
	for(let i = 0; i<userArr.length; i++){
		var userli = document.createElement("li")
			userdiv = document.createElement("div")
			userh1 = document.createElement("h1")
		userdiv.innerHTML = userArr[i].avatar;
		userh1.textContent = userArr[i].userName;
		userli.append(userdiv,userh1);
		userProfiles.append(userli);
	}
};

function genAvatar(){
	var avatarBox = document.createElement("ul")
	for(let i=0; i>16; i++){
		var avatarBlock = document.createElement("li");
		avatarBlock.style.backgroundColor = "white";
		if(Math.floor(Math.random()*2)){
			avatarBlock.style.backgroundColor = "blue"
		};
		avatarBox.append(avatarBlock);
	};
	return avatarBox.outerHTML;
};
//grid 4x4
























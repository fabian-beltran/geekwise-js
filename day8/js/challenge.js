var body = document.body;

var signIn = document.createElement('div')
	username = document.createElement('input'),
	password = document.createElement('input'),
	signInBtn = document.createElement('button');
username.type = 'text'
username.placeholder = 'Username'
password.type = 'password'
password.placeholder = 'Password'
signInBtn.type = 'button'
signInBtn.textContent = 'Sign In'

body.appendChild(signIn)
signIn.appendChild(username)
signIn.appendChild(password)
signIn.appendChild(signInBtn)


var div = document.createElement('div')
	profileImg = document.createElement('img'),
	profileName = document.createElement('h2'),
	profileBio = document.createElement('p'),
	more = document.createElement('a');

div.style.width = '200px'
div.style.height = '500px'

profileImg.src = 'https://t4.rbxcdn.com/a99cafd5521cab74eb0515dc5db192df'
profileName.textContent = 'iiHeroAviator'
profileBio.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam sint error quos odit distinctio doloribus, hic praesentium aliquid, reprehenderit cumque animi maiores quas sit blanditiis.'
more.href = 'https://www.roblox.com/users/42217300/profile'
more.textContent = 'MORE...'
body.appendChild(div);
div.appendChild(profileImg);
div.appendChild(profileName);
div.appendChild(profileBio);
div.appendChild(more);
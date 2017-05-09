// function simpleFunction(){
// 	console.log(this)
// }
// simpleFunction()

// var btn = document.querySelector("button");
// btn.addEventListener('click', colorize);

// function colorize(){
// 	console.log(this)
// }

// CreateElement
var body = document.body;
var header = document.createElement('header'),
	nav = document.createElement('nav'),
	main = document.createElement('main'),
	article = document.createElement('article'),
	aside = document.createElement('aside'),
	footer = document.createElement('footer');

var navTemplateString = `
	<ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>	
	</ul>
`
nav.innerHTML = navTemplateString

header.appendChild(nav)
main.appendChild(article)
main.appendChild(aside)

body.appendChild(header)
body.appendChild(main)
body.appendChild(footer)
console.log(body)
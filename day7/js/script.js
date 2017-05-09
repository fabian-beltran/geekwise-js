// var theDiv = document.getElementById('div')
// console.log(theDiv)

// var theDivMrkup = document.getElementById('divmrkup')

// theDiv.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, fugit.'

// theDivMrkup.innerHTML = '<h2>regulr text</h2>'

// var set = document.getElementById('set')
// var get = document.getElementById('get')

// set.textContent = 'Lorem ipsum dolor sit amet.'
// set.innerHTML = '<p>Here is a <strong>line</strong> of changed text</p>'
// //get.innerHTML = ''
// console.log(get.textContent)
// console.log(get.innerHTML)

// var writeMsg = '<h1>Info</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, alias.</p>'
// document.write(writeMsg)

// var headlineMsg = '<h1>Note</h1><p style="color: red">All HTML has been deleted</p>'

// document.querySelector('h1').addEventListener('click',function(){
// 	document.write(headlineMsg)
// })

// var simpleForm = document.querySelector('form')
// console.log(simpleForm)
// console.log(simpleForm.username.value)
// console.log(simpleForm.password.value)

// simpleForm.childNodes[9].addEventListener('click',function(e){
// 	e.preventDefault()
// 	console.log(e)
// })


// COMPEX FORM!!!!!!!!!!!!!!!!!!!!!!!
var cForm = document.getElementById('complex'),
	cFormEls = cForm.elements;
console.log(cForm)
console.log(cFormEls)

//target submit btn
// add click event litener
// move functionality into anonymous funct

var submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click',function(){
	for(let i = 0; i < cFormEls.length; i++){
	//console.log(cFormEls[i].value)
	if(cFormEls.value){
		if(cFormEls[i].type != 'radio'){
			console.log(cFormEls[i].value)
		}
		if(cFormEls[i].type == 'radio' && cFormEls[i].checked){
			console.log(cFormEls[i].value)
		}
	}
}
})
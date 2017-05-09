// reverse alphabetize each character in each word
//order complrte string alphabetized.


var answer = document.querySelector('input');
var run = document.querySelector('button');

run.addEventListener('click',function(){
	revChar(answer.value)
})

var chars = []
function revChar(string) {
	for(let i = 0; i < string.length; i++){
		chars.push(string.charAt(i))
	}
	chars:reverse()
}
console.log(chars)
var answer = document.querySelector('input');
var run = document.querySelector('button');

run.addEventListener('click',function(){
	alphWords(answer.value);
	revAlphWords(answer.value);
});
//accept user value, arrange words alphabettically

function alphWords(userStr){
	console.log(userStr.split(' ').sort());
}

function revAlphWords(userStr){
	// log reveresd alphbetized string
	var userStrArr = userStr.split(' ')
	var userStrRev = []
	userStrRev.forEach(function(word){
		console.log(word.split('').sort().reverse().join(''))
	})
	console.log(userStrRev.sort().join(' '))
}

// reverse alphabitaze each character in ech word
//order complete string alphbetized

//background-color: hsl(0,50%,50%)

window.addEventListener('mousemove', function(event){
	console.clear()
	console.log(event.screenX)
})
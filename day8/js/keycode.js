var key = document.querySelector('.key')
	h1 = document.querySelector('h1')
	keyed = document.querySelector('.keyed')

window.addEventListener('keypress', function(event){
	event.preventDefault()
	console.log(event.keyCode)

	key.classList.add('hidden')
	keyed.parentElement.classList.remove('hidden')

	h1.textContent = event.keyCode
	keyed.textContent = event.key;

	if(event.keyCode === 32){
		keyed.textContent = 'spacebar'
	}
})
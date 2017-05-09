console.log("Hello World");

/*
//Array
var colors = ["Red","White","Blue","Green","Juan"];
console.log(colors)

//accessing element by index
console.log(colors[1])

//.length
console.log(colors.length)

var lastColor = colors[colors.length - 1]
console.log(lastColor)

//.forEach()
colors.forEach(function(item,index){
	console.log(index + ' : ' + item)
});

// Array.isArray()
console.log(Array.isArray(colors))

// .push()
colors.push("Fabian")
console.log(colors)

//.pop()
colors.pop("Juan")
console.log(colors)

//.unshift()
colors.unshift('Fabian')
console.log(colors)

//.shift()
colors.shift("Fabian")
console.log(colors)

//.indexOf()
var colorPosition = colors.indexOf('Blue')
console.log(colorPosition)

//.lastIndexOf()
colors.push("Fabian","Beltran","Blue")
console.log(colors)

var lastBlue = colors.lastIndexOf("Blue")
console.log(lastBlue)

//.splice()
var removeItem = colors.splice(2,1)
console.log(colors)
console.log(removeItem)

var removeItems = colors.splice(3,2)
console.log(removeItems)

// adding items to an array using .splice()
console.log(colors)
var addItems = colors.splice(1,0,"Black","Teal","Pee")
console.log(colors)
console.log(addItems)

console.log(colors)
var removeAndAdd = colors.splice(5,1,"purple","banana","piano")
console.log(colors)
console.log(removeAndAdd)
*/

var colors2 = ["red","blue","white","black","cyan"]
//idk wat index of black is
//remove and replace black and cyan with indigo

console.log(colors2)
console.log(colors2.splice(3,2,"indigo"))
console.log(colors2)

//.slice()
console.log(colors2)
var newColors2 = colors2.slice()
console.log(newColors2)

var color2Slice = colors2.slice(1,3)
console.log(color2Slice)

//.reverse()
var reversed = colors2.reverse()
console.log(reversed)

//.sort()
var numbers = [1,10,2,20]
console.log(numbers.sort())

var words = ["word","Word","1 word","2 words"]
console.log(words.sort())

//comparison sorting
var numbers2 = [2,4,5,1,3]
numbers2.sort(function(a,b){
	return a-b
});

console.log(numbers2)
// Length
var name = 'Fabian';
console.log(name.length);

// .charAt
console.log(name.charAt(1));

// .indexOf
console.log(name.indexOf('b'));

// .concat
console.log(name.concat(' Beltran'));
console.log(name + " Beltran");

// .substring 
console.log(name.substring(0,3));
console.log(name.substring(3));

// .substr
console.log(name.substr(0,3));
console.log(name.substr(3));

// .toLowerCase
console.log(name.toLowerCase());

// .toUpperCase
console.log(name.toUpperCase());

// .trim
var extraSpaces = "                 fabian                         ";
console.log(extraSpaces);
console.log(extraSpaces.trim());



// Number Methods

// Number.isInteger()
console.log(Number.isInteger(12));

// Number.parseFloat()
console.log(Number.parseFloat('5.2'));

// Number.parseInt()
console.log(Number.parseInt('89'));

// Number.isNaN()
console.log(Number.isNaN(12));
console.log(Number.isNaN(name));
console.log(isNaN(name));

// Date Object
var newDate = new Date()
console.log(newDate);

// getDate()
console.log(newDate.getDate());

// getFullYear
console.log(newDate.getFullYear());

// getDay()
console.log(newDate.getDay());

// getMonth()
console.log(newDate.getMonth());

if (newDate.getDay() == 3){
	console.log('April');
}

var fullMonth = newDate.toLocaleString('en-us', {month: 'long'});
console.log(fullMonth);

var fullDate = fullMonth+" "+(newDate.getDay()+2)+", "+newDate.getFullYear()
console.log(fullDate)


// Math object
var x = 5;
console.log(x)

x--;
console.log(x)


var rand = Math.random()
console.log(rand)

var roundUp = Math.ceil(8.3)
console.log(roundUp)

var roundDown = Math.floor(9.9)
console.log(roundDown)

var roundNum = Math.round(4.5)
console.log(roundNum)



//=============================================
var userId = prompt("Select a Number!");
console.log(typeof userId);
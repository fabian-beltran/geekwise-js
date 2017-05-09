console.log("Hello World")

for(var i = 0; i < 10; i++){
	//console.log(i);
}

for(var i = 0; i < 5; i++){
	//console.log(i*2)
}

var i = 0;
while(i<10){
	//console.log(i);
	i++
}

var i = 0;
do {
	//console.log(i);
	i++
}
while(i<10);

//forEach loop through array
var programmingLanguages = ['lua','html','css','javascript','python','c++','c#','c','java']
programmingLanguages.forEach(function(item,index){
	//console.log(item)
})

// forIn loop
var jeep = {
	make: 'jeep',
	model: 'wrangler',
	year: 2014,
	color: 'black',
	doors: 2
}

for(info in jeep){
	console.log(jeep[info])
};

// if else statements
var getTime = new Date().getHours();
if (getTime < 12){
	//alert('Good morning.')
} else {
	//alert('Good evening.')
}


// if, else if, else
if (getTime<12){
	//alert("Good morning.")
}else if (getTime<18){
	//alert("Good afternoon.")
}else{
	//alert("Good evening.")
}

//another if statement
for (var i = 0; i < 10; i++){
	if (i===0) {
		console.log(i+' is just zero.')
	}else if(i % 2 === 0){
		console.log(i+' is even.')
	}else{
		console.log(i+' is odd.')
	}
}

// == vs ===
var num = 1;
var numStr = '1';
console.log(num);
console.log(typeof(num));
console.log(numStr);
console.log(typeof(numStr));

// === checks datatype and val == checks val
if (num === numStr){
	console.log('one is one');
}else{
	console.log('one is not one');
}

// other comparison operators
var num = 5;
if (num < 6){
	console.log('less than');
}else if (num<6){
	console.log('greater than')
}else if (num<=12){
	console.log('less than or equal to')
}else if (num>=12){
	console.log('greater than or equal to')
}else{
	console.log('other')
}
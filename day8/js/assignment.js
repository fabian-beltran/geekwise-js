// CALCULATION


// CHRISTMAS COUNTDOWN
var xmasForm = document.getElementById("xmas");
var today = new Date();
var xmas = new Date(today.getFullYear(), 11, 25);

console.log(today.getTime());
console.log(xmas.getTime());

if(today.getMonth() == 11 && today.getDate() > 25){
	xmas.setFullYear(xmas.getFullYear()+1);
};

var oneDay = 1000*60*60*24;
xmasForm.children[1].textContent = Math.ceil((xmas.getTime() - today.getTime()) / oneDay);
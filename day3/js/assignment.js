var images = [ 
'http://planetoftheweb.com/i/8ball/19.png',                         
'http://planetoftheweb.com/i/8ball/18.png',     
'http://planetoftheweb.com/i/8ball/17.png', 
'http://planetoftheweb.com/i/8ball/16.png', 
'http://planetoftheweb.com/i/8ball/15.png', 
'http://planetoftheweb.com/i/8ball/14.png', 
'http://planetoftheweb.com/i/8ball/13.png', 
'http://planetoftheweb.com/i/8ball/12.png', 
'http://planetoftheweb.com/i/8ball/11.png', 
'http://planetoftheweb.com/i/8ball/10.png', 
'http://planetoftheweb.com/i/8ball/9.png', 
'http://planetoftheweb.com/i/8ball/8.png', 
'http://planetoftheweb.com/i/8ball/7.png', 
'http://planetoftheweb.com/i/8ball/6.png', 
'http://planetoftheweb.com/i/8ball/5.png', 
'http://planetoftheweb.com/i/8ball/4.png', 
'http://planetoftheweb.com/i/8ball/3.png', 
'http://planetoftheweb.com/i/8ball/2.png', 
'http://planetoftheweb.com/i/8ball/1.png', 
'http://planetoftheweb.com/i/8ball/0.png'
];

var randomChoice = Math.floor(Math.random()*images.length)
document.write("<img style='width: 500px; height: 500px;' src='"+images[randomChoice]+"'>")

// document.write('hello World') makes stuff in HTML
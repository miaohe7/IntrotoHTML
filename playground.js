function welcomeMsg(){
	alert("Welcome to JavaScript!")
}
function welcome(msg){
	alert(msg);
}

// var x = "Hello";
// welcome(x);
// x = "Goodbye";
// welcome(x);

function welcomeMsg(Msg){
	alert(msg);
	var name = prompt("What is your name?");
	return name;
}

//var firstName = welcomeMsg("Hi");

// function message(){
// 			alert("This alert box was called with the onload message");
// 		}


function message(msg){
	document.getElementById('output').innerHTML = msg +" event";
}

function displayDate(){
	document.getElementById("demo").innerHTML = Date();
}
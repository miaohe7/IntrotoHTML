var fruits = ["Apple","Banana","Grapes"];
function loadFruits(){
	document.getElementById('fruits').innerHTML = fruits;
}

function myFunction(){
	var fruit = prompt("What is your favourite fruit?");
	fruits[fruits.length] = fruit;
	document.getElementById("fruits").innerHTML = fruits;
}

function check(){
	var email1 = document.getElementById('email_addr');
	var email2 = document.getElementById('email_repeat');
	if(email1.value != email2.value){
		alert("The two emails must match!");
		return false;
	}
}
function change(msg){
	document.getElementById('stuff').innerHTML = "Clicked "+ msg +" button";
}

function openMe(){
	x=document.getElementById("demo");
	//x.style.display="block";
	x.className="open";
}
function closeMe(){
	x=document.getElementById("demo");
	//x.style.display="none";
	x.className="closed";
}
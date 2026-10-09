function myClickEvent(event){
	const box = document.getElementById("movingBox");
	let x = event.clientX;
	let y = event.clientY;
	
	let text = x + ", " + y;
	document.getElementById("clickPos").innerHTML = text;
	
	box.style.left = (x - (box.offsetWidth/2))+"px";
	box.style.top = (y - (box.offsetHeight/2))+"px";
}

document.body.addEventListener("click", myClickEvent);
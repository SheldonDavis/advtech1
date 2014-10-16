var username="Fred"

document.onmousemove=
	function(evt){
	makeOneCircle(evt);
}
	function makeOneCircle(evt){
		evt = (evt || event)//makes all browsers understand event
		//make a new circle
		var newc = document.createElement('div');
			newc.style.left=evt.clientX+"px";
			newc.style.top=evt.clientY+"px";


		document.body.appendChild(newc);



	}
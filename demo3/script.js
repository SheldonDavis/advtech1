var username="Fred"

document.onclick=
	function(evt){
	makeOneCircle();
}
	function makeOneCircle(evt){
		evt = (evt || event)//makes all browsers understand event
		//make a new circle
		var newc = document.createElement('div');
		document.appendChild(newc);

	}
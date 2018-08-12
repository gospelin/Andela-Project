
var form = document.getElementById('form');
var display = document.getElementById('result');
var button = document.getElementById('submit');
var input = document.getElementById('input');


/*
	This function gets the input form the input field 
	and validates to ensure it meets the required length.
*/

function getNumber () {
	
	 var num = document.getElementById('input').value;
	 display.style.padding = "8px 4px 8px 4px";

	 if((num.length < 3 && num.length >= 1)|| num.length != 3){
	 			button.disabled = true;
	 			display.style.backgroundColor = 'red';
	 			display.textContent = "Three Digits only required";
	 	if(num.length == "0"){
		 	button.disabled = true;
		 	display.style.backgroundColor = 'rgba(0,0,200,0.3)';
		 	display.style.padding = "0px";
		 	display.textContent = "";
		}
	}else {
	 	button.disabled = false;
	 	checkArmStrong(num);
	}
}

/*	
	This function checks if it is an ArmStrong

	Here the function named - checkArmStrong takes a parameter (num) which is a string and
	value for the input field.

	Iterating through the string, I call the cube() which returns the "cube" of the argument
	The sum variable adds the numbers returned by the cube()

	IT however displays a message indicating if its an Armstrong or not

*/

function checkArmStrong(num){
	var sum = 0;

	for (var i = 0; i < num.length; i++){
		var cubes = cube(parseInt(num[i], 10));
		sum += cubes;
	}
	console.log(sum);

	if (sum === parseInt(num)){
		display.textContent = "This is an ArmStrong number";
		display.style.backgroundColor = 'red';
	}else{
		display.textContent = "This is not an ArmStrong number";
		display.style.backgroundColor = 'red';
	}
}//end of function checkArmStrong

function cube(num){
	var value = 1;
	for(var i = 1; i <= 3; i++){
		value = value * num;
	}
	num = value;
	return num;
}//end of function cube


//These EventListeners triggers on the "submit" and "keyup" event respectively
form.addEventListener("submit", function (e) {
	e.preventDefault();
	getNumber();
}, false);

input.addEventListener('keyup', function (e) {
	getNumber();
}, false);
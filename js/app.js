var user_value = prompt("Enter a whole number between 1 and 100", "60");
if (isNaN(user_value)) {
	document.write('Invalid! You entered an invalid number!');
} else if (user_value % 1 != 0) {
	document.write('Invalid! You entered a decimal!');
} else {
	if (user_value % 3 === 0 && user_value % 5 === 0) {
		document.write('fizzbuzz');
	} else if ( user_value % 3 === 0) {
		document.write('fizz');
	} else if ( user_value % 5 === 0) {
		document.write('buzz');
	} else {
		document.write(user_value);
	}	
}



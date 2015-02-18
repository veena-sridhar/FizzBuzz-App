for (var i = 1; i < 101; i++) {
	document.body.innerHTML += " <br /> "
	if ( i % 3 === 0 && i % 5 === 0) {
		document.write('fizzbuzz');
	} else if ( i % 3 === 0) {
		document.write('fizz');
	} else if ( i % 5 === 0) {
		document.write('buzz');
	} else {
		document.write(i);
	}	
} 



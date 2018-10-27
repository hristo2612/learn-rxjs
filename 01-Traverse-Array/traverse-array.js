function traverseArray() {
	var names = ["Vancho", "Dragancho", "Petkancho", "Pencho", "Richi"],
		counter;

	for(counter = 0; counter < names.length; counter++) {
		console.log(names[counter]);
	}
}

traverseArray();

// Ask yourself this question: did we need to specify the order in which the names were printed? If not, why do it?
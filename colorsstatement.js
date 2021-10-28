let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

color.forEach(function(color,index) {
	console.log(`${index+1}${index < 3 ? ordinal[index+1] : ordinal[0]} choise is ${color}`);
});

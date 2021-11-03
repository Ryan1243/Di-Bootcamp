async function fetchStarship() {
	try {
		const response = await fetch("https://swapi.dev/api/starships/9/")
		const data = await response.json();
		console.log(data);
	} catch (e) {
		console.log(e);
	}

	}
fetchStarship()
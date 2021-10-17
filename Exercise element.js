// var x = document.getElementsByClassName("example");

let list = document.getElementsByClassName("listPlanets")[0];
let planets = ["pluto", "neptun", "moon", "sun"];
let color = ["red", "yellow", "blue", "black"]
function AllPlanets() {
for (let i = 0; i < planets.length; i++){
	let a = document.createElement("div");
	a.className = "planet";
	a.textContent = planets[i];
	a.style.background = color[i];

let pluto = document.createElement("div"); 
pluto.className = "planets pluto";
		
	a.appendChild(pluto);


let neptun = document.createElement("div");
neptun.className = "planets neptun";
	a.appendChild(neptun);
		
let moon = document.createElement("div") 
moon.className = "planets moon";
 	a.appendChild(moon);
let sun = document.createElement("div");  
sun.className = "planets sun";
	a.appendChild(sun); 
	 list.appendChild(a);

}
}







AllPlanets();
// <section class="listPlanets"></section>
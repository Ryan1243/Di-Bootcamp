const gameInfo = [
	{
	  username: "john",
	  team: "red",
	  score: 5,
	  items: ["ball", "book", "pen"]
	},
	{
	  username: "becky",
	  team: "blue",
	  score: 10,
	  items: ["tape", "backpack", "pen"]
	},
	{
	  username: "susy",
	  team: "red",
	  score: 55,
	  items: ["ball", "eraser", "pen"]
	},
	{
	  username: "tyson",
	  team: "green",
	  score: 1,
	  items: ["book", "pen"]
	},
];

let names = [];
let highscore = [];
let all = [];

gameInfo.forEach(user => all.push(user.username + "!"));
console.log(names);

gameInfo.forEach(user => user.score > 5 ? highscore.push(user.username) : highscore);
console.log(highscore);

gameInfo.forEach (user => all += user.score);
console.log(all);
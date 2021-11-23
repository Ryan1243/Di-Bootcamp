const exp = require("express");
const fs = require("fs");

app = exp();
app.use("/", exp.static(__dirname + "/public"));

app.use(exp.urlencoded());
app.listen(3000, () => console.log("I am listening"));

app.post("/shopping", (req, res) => {
	console.log("accepted request");
	console.log(req.body);
	let item = req.body.item;
	let amount = req.body.amount;
	fs.appendFileSync("Shopping-list.txt", `${item} : ${amount} \n`);

		fs.readFile("Shopping-list.txt", (err, data) => {
			if (err) {
				console.log(err);
			}else{
				res.json(`${data.toString()}`);
			}
		});
});
let groceries = {
	fruits : ["pear", "apple", "banana"],
	vegetables: ["tomatoes", "cucumber", "salad"],
	totalPrice : "20$",
	other : {
		payed : true,
		meansOfPayment : ["cash", "creditCard"]
	}
};

let newGroceries = groceries;

groceries.totalprice = "35$";
groceries["other.payed"] = false;

console.log(groceries);
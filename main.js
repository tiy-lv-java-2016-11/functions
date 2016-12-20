// #1
var sum = items.reduce(function (a, b) {
	return a + b.price;
}, 0)

var avg = sum/items.length;

document.querySelector("#answer1").innerHTML = "The average price is $" + avg.toFixed(2);

// #2
var priceMatch = items.filter(function (item) {
	if (item.price > 14 && item.price < 18) {
		return "item.title;"
	};
})

var str2 = "";

priceMatch.forEach(function (item) {
	str2 += item.title + "\n";
})

document.querySelector("#answer2").innerHTML = str2;

// #3
var currencyCode = items.filter(function (item) {
	return item.currency_code === "GBP";
})

var str3 = currencyCode[0].title;

document.querySelector("#answer3").innerHTML = str3;

// #4
var woody = items.filter(function (item) {
		var wood = false;
	item.materials.forEach(function (material) {
		if (material === "wood") {
			wood = true;
		}
	})
	return wood;
})

var str4 = "";

woody.forEach(function (item) {
	str4 += item.title + "\n";
})

document.querySelector("#answer4").innerHTML = str4;

// #5
var materials8 = items.filter(function (item) {
	return item.materials.length >= 8;
})

var str5 = "";

materials8.forEach(function (item) {
	str5 += item.title + " has " + item.materials.length + " materials: \n";
	item.materials.forEach(function (material) {
		str5 += material + "\n";
	})
	str5 += "\n";
})

document.querySelector("#answer5").innerHTML = str5;

// #6
var selfMade = items.filter(function (item) {
	return item.who_made === "i_did";
})

var str6 = selfMade.length + " were made by there sellers\n";

document.querySelector("#answer6").innerHTML = str6;






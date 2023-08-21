// Utility functions
function getElementValueById(elementId) {
	const element = document.getElementById(elementId);
	const elementValueString = element.innerText;
	const elementValue = parseFloat(elementValueString);
	return elementValue;
}

function setElementValueById(elementId, newValue) {
	const element = document.getElementById(elementId);
	element.innerText = newValue.toFixed(2);
}

function enableBtn(currentTotal) {
	// purchase button: enable by default
	document.getElementById("btn-purchase").removeAttribute("disabled");
	// discount apply button: enable if total price exceeds 200
	if (currentTotal >= 200) {
		document.getElementById("btn-apply").removeAttribute("disabled");
	}
}

function updateTotals(plusValue) {
	const previousTotal = getElementValueById("total-price");
	const currentTotal = previousTotal + plusValue;
	setElementValueById("total-price", currentTotal);

	const previousFinalTotal = getElementValueById("total-final");
	const currentFinalTotal = previousFinalTotal + plusValue;
	setElementValueById("total-final", currentFinalTotal);

	enableBtn(currentTotal);
}

function appendToCart(productName) {
	const cartList = document.getElementById("cart-list");
	const count = cartList.childElementCount;
	const p = document.createElement("p");
	p.innerText = `${count + 1}. ${productName}`;
	cartList.appendChild(p);
}

// Coupon button
document.getElementById("btn-apply").addEventListener("click", function () {
	if (document.getElementById("coupon-code").value === "SELL200") {
		const total = getElementValueById("total-price");
		const discount = parseFloat((total * 0.2).toFixed(2));
		setElementValueById("discount", discount);

		let finalTotal = getElementValueById("total-final");
		finalTotal = total - discount;
		setElementValueById("total-final", finalTotal);
	} else {
		alert("Please enter the correct coupon code.");
	}
});

// All product cards
document.getElementById("k-accessories").addEventListener("click", function () {
	updateTotals(39);
	appendToCart("K. Accessories");
})
document.getElementById("k-set").addEventListener("click", function () {
	updateTotals(25);
	appendToCart("Kitchen Set");
})
document.getElementById("home-cooker").addEventListener("click", function () {
	updateTotals(49);
	appendToCart("Home Cooker");
})
document.getElementById("sports-cap").addEventListener("click", function () {
	updateTotals(49);
	appendToCart("Sports Back Cap");
})
document.getElementById("full-jersey").addEventListener("click", function () {
	updateTotals(69);
	appendToCart("Full Jersey Set");
})
document.getElementById("sports-skates").addEventListener("click", function () {
	updateTotals(159);
	appendToCart("Sports Skates");
})

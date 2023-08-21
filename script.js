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


document.getElementById("k-accessories").addEventListener("click", function () {
	const previousTotal = getElementValueById("total-price");
	const currentTotal = previousTotal + 39;
	setElementValueById("total-price", currentTotal);

	const cartList = document.getElementById("cart-list");
	const count = cartList.childElementCount;
	const p = document.createElement("p");
	p.innerText = `${count}. K. Accessories`;
	cartList.appendChild(p);

	enableBtn(currentTotal);
})

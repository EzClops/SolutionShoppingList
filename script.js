var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let value = document.querySelectorAll('li');
let delButton = '';

function inputLength() {
	return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function reportOrders(minionOrders) {
	for (let minion of minionOrders) {
		minion.addEventListener('click', function handleClick3() {
			minion.classList.toggle('done');
		});
	}
}

function addButton(minionOrders) {
	var x = '';
	var t = '';
	for (let minion of minionOrders) {
		x = document.createElement("BUTTON");
		t = document.createTextNode("Delete");
		x.appendChild(t);
		minion.appendChild(x);
		deleteButton(minion, x)
	}	
}

function deleteButton(minion, b) {
	b.addEventListener('click', function handleClick4() {
		minion.remove();
	});
}

function speakOrders(orders, callback) {
	callback(orders);
}

function createListElement() {
	var li = document.createElement("li");
	var x = '';
	var t = '';
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.setAttribute("id", "noclick");
	value = document.querySelectorAll("li");
	for (let i = value.length - 1; i < value.length; i++) {
		value[i].addEventListener('click', function handleClick2() {
			value[i].classList.toggle('done');
		});
	}
	for (let i = value.length - 1; i < value.length; i++) {
		x = document.createElement("BUTTON");
		t = document.createTextNode("Delete");
		x.appendChild(t);
		value[i].appendChild(x);
		x.addEventListener('click', function handleClick4() {
			value[i].remove();
		});
	}
	input.value = "";
	
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

speakOrders(value, reportOrders);

speakOrders(value, addButton); 
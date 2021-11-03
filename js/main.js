const HTML_OBJECT = {
	btnOne: document.getElementById('btn-one'),
	pOne: document.getElementById('return-one'),
	btnTwo: document.getElementById('btn-two'),
	pTwo: document.getElementById('return-two'),
	btnThree: document.getElementById('btn-three'),
	pThree: document.getElementById('return-three'),
}

let arrayOne = [];
let arrayTwo = [];
let arrayThree = [];

HTML_OBJECT.btnOne.addEventListener("click",() => {
	let testOne = test();
	arrayOne.push(testOne())
	HTML_OBJECT.pOne.innerText = arrayOne.length;
})

HTML_OBJECT.btnTwo.addEventListener("click",() => {
	let testTwo = test();
	arrayTwo.push(testTwo())
	HTML_OBJECT.pTwo.innerText = arrayTwo.length;
})

HTML_OBJECT.btnThree.addEventListener("click",() => {
	let testThree = test();
	arrayThree.push(testThree())
	HTML_OBJECT.pThree.innerText = arrayThree.length;
})

function test () {
	a = 0;
	return function() {
		a++
		return a;
	}
}

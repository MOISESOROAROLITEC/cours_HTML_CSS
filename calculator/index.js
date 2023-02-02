// console.dir("input : ", document.querySelector('.inputBox input'))
// console.dir(document.querySelector('.padBox'));
var pad = document.querySelectorAll('button')
var input = document.querySelector("input")

var inputVal
pad.forEach((button, key)=>{
	button.addEventListener("click", clickButton)
})
console.dir(pad)
var listKey = ""
function clickButton(event) {
	inputVal = input.value
	console.log(event.target)
	if(event.target.innerText === "AC"){
		input.value = input.value.slice(0, input.value.length - 1)
		return
	}
		if(event.target.innerText === "C"){
		input.value = ""
		return
	}
	console.log(inputVal.length >= 19);
	if(!(inputVal.length >= 19)){
		inputVal += event.target.innerText
		input.value = inputVal
	}
	
}
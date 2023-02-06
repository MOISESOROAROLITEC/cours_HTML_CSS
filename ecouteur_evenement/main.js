let bigbox = document.querySelector(".bigbox")
function bigClick(event) {

	console.log(event.target);
}
function mediumClick(event) {
	// event.stopPropagation()
	console.log(event.target);
}
function smallClick(event) {
	event.stopPropagation()
	console.log(event.target);
}
let square = document.querySelectorAll('.square')
let dropzone = document.querySelector('.dropzone')



for (let a of square) {
	a.addEventListener('dragstart', function (e) {
		store = e.target
	})
}

dropzone.addEventListener('dragover', function (e) {
	e.preventDefault()
})

dropzone.addEventListener('drop', function (e) {
	if (store) {
		e.target.appendChild(store)
	}
})
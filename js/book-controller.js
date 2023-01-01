'use strict'

$(onInit)

function onInit() {
	renderBooks()
}

function addEventListeners() {}

function renderBooks() {
	const books = getBooksToDisplay()
	console.log(books)
	const strHTML = books.map((book) => {
		return `<li>
           <img src="${book.img}" alt="book image">
           <h2>${book.name}</h2>
           <p>${book._id}</p>
           <h3>${book.price}</h3>
        </li>`
	})

	$('.books-container').html(strHTML)
}

'use strict'

$(onInit)

function onInit() {
	renderBooks()
}

function addEventListeners() {}

function renderBooks() {
	const books = getBooksToDisplay()
	const strHTML = books.map((book) => {
		return `<li class="book-preview flex" data-book-id="${book._id}">
	       <img src="${book.img}" alt="book image">
	       <h4>${book.name}</h4>
	       <p class="id">${book._id}</p>
	       <h4>${book.price}$</h4>
             <div class="actions flex">
                 <button class="btn remove-btn">Delete</button>
                 <button class="btn edit-btn">Edit</button>
                 <button class="btn details-btn">Details</button>
             </div>
	    </li>`
	})

	$('.books-container').html(strHTML)
	btnActions()
}

function btnActions() {
	$('.remove-btn').on('click', function () {
		const bookId = $(this).closest('[data-book-id]').data('bookId')
		onRemoveBook(bookId + '')
	})

	$('.details-btn').on('click', function () {
		const bookId = $(this).closest('[data-book-id]').data('bookId')
		onReadBook(bookId + '')
	})
}

function onRemoveBook(id) {
	console.log(id)
}

function onReadBook(id) {
	const book = getBookById(id)
	console.log(book)
}

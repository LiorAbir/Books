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

	$('.edit-btn').on('click', function () {
		const bookId = $(this).closest('[data-book-id]').data('bookId')
		onUpdateBook(bookId + '')
	})
}

function onRemoveBook(id) {
	console.log(id)
}

function onReadBook(id) {
	const book = getBookById(id)

	const $elDetailsModal = $('.details-modal')
	$elDetailsModal.children('.name').text(book.name)
	$elDetailsModal.children('img').attr('src', book.img)
	$elDetailsModal.children('.price').text(book.price)
	$elDetailsModal.children('.id').text(book._id)
	$elDetailsModal.children('.author').text(book.author)
	$elDetailsModal.children('.desc').text(book.desc)

	$('.save-btn').on('click', function () {
		onSaveBook(id)
	})
	onOpenModal($elDetailsModal)
}

function onUpdateBook(id) {
	const book = id ? getBookById(id) : getEmptyBook()
	const editTitle = id ? 'Book Edit' : 'Add Book'

	const $elEditModal = $('.edit-modal')
	const $elEditform = $('.edit-form')

	$elEditform.children('.title').text(book.name)
	$elEditform.children('.name').val(book.name)
	$elEditform.children('.img').val(book.img)
	$elEditform.children('.price').val(book.price)
	$elEditform.children('.author').val(book.author)
	$elEditform.children('.desc').val(book.desc)
	$elEditform.children('.rate').val(book.rate)

	onOpenModal($elEditModal)
}

function onSaveBook(ev) {
	ev.preventDefault()
}

function onOpenModal($elModal) {
	$elModal.show('slow')
	$elModal.fadeIn('slow')
}

function onCloseModal() {
	$('.modal').fadeOut('fast')
}

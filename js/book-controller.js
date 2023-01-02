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
           <div class="info">
	          <h4>${book.name}</h4>
	          <p class="id">${book._id}</p>
	          <h4>${book.price}$</h4>
           </div>
             <div class="actions flex">
                 <button class="btn remove-btn">Delete</button>
                 <button class="btn edit-btn">Edit</button>
                 </div>
                 </li>`
	})

	// <button class="btn details-btn">Details</button>
	$('.books-container').html(strHTML)
	btnActions()
}

function btnActions() {
	$('.remove-btn').on('click', function () {
		const bookId = $(this).closest('[data-book-id]').data('bookId')
		onRemoveBook(bookId + '')
	})

	$('.book-preview').on('click', function () {
		const bookId = $(this).data('bookId')
		onReadBook(bookId + '')
	})

	$('.edit-btn').on('click', function () {
		const bookId = $(this).closest('[data-book-id]').data('bookId')
		onUpdateBook(bookId + '')
	})
}

function onRemoveBook(id) {
	removeBook(id)
	renderBooks()
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

	onOpenModal($elDetailsModal)
}

function onUpdateBook(id) {
	const book = id ? getBookById(id) : getEmptyBook()
	const editTitle = id ? 'Book Edit' : 'Add Book'

	const $elEditModal = $('.edit-modal')
	const $elEditForm = $('.edit-form')

	$elEditForm.children('.title').text(book.name)
	$elEditForm.children('.name').val(book.name)
	$elEditForm.children('.img').val(book.img)
	$elEditForm.children('.price').val(book.price)
	$elEditForm.children('.author').val(book.author)
	$elEditForm.children('.desc').val(book.desc)
	$elEditForm.children('.rate').val(book.rate)

	$('.edit-btn').on('submit', function () {
		onSaveBook($elEditForm, id)
	})

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

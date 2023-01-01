'use strict'

const BOOKS_KEY = 'booksDB'

var gBooks

function getBooksToDisplay() {
	const books = gBooks
	return books
}

function _createBooks() {
	const books = localStorage.getItem(BOOKS_DB)
	gBooks = !books || !books.length ? _getBooks() : books
	_saveToStorage(BOOKS_KEY, gBooks)
}

function _saveToStorage(key, val) {
	localStorage.setItem(key, JSON.stringify(val))
}

function _getBooks() {
	return [
		{
			_id: '',
			name: '',
			price: 0,
			desc: '',
			img: '',
			rate: 0,
		},
	]
}

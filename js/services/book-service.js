'use strict'

const BOOKS_KEY = 'booksDB'

var gBooks
_createBooks()

function getBooksToDisplay() {
	const books = gBooks
	return books
}

function _createBooks() {
	const books = localStorage.getItem(BOOKS_KEY)
	gBooks = !books || !books.length ? _getBooks() : books
	_saveToStorage(BOOKS_KEY, gBooks)
}

function _saveToStorage(key, val) {
	localStorage.setItem(key, JSON.stringify(val))
}

function _getBooks() {
	return [
		{
			_id: '123',
			name: 'The Hate U Give',
			author: 'Angie Thomas',
			price: 60,
			desc: '',
			img: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0624/9780062498533.jpg',
			rate: 0,
		},
		{
			_id: '456',
			name: 'One Of Us Is Lying',
			author: 'Karen M. McManus',
			price: 74,
			desc: '',
			img: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5247/9781524714680.jpg',
			rate: 0,
		},
	]
}

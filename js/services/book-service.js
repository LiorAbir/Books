'use strict'

const BOOKS_KEY = 'booksDB'

var gBooks
_createBooks()

function getBooksToDisplay() {
	const filteredBooks = gBooks
	return filteredBooks
}

function getBookById(id) {
	const book = gBooks.find((book) => book._id === id)
	return book
}

function getEmptyBook() {
	return {
		_id: _makeId(),
		name: '',
		author: '',
		price: 0,
		desc: '',
		img: '',
		rate: 0,
	}
}

function removeBook(id) {
	const bookIdx = gBooks.findIndex((book) => book._id === id)
	gBooks.splice(bookIdx, 1)
	_saveToStorage(BOOKS_KEY, gBooks)
}

function _createBooks() {
	const books = JSON.parse(localStorage.getItem(BOOKS_KEY))
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
			desc: '',
			img: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0624/9780062498533.jpg',
			rate: 0,
		},
		{
			_id: '999',
			name: 'The Hate U Give',
			author: 'Angie Thomas',
			desc: '',
			img: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0624/9780062498533.jpg',
			rate: 0,
		},
		{
			_id: '888',
			name: 'The Hate U Give',
			author: 'Angie Thomas',
			desc: '',
			img: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0624/9780062498533.jpg',
			rate: 0,
		},
		{
			_id: '765',
			name: 'The Hate U Give',
			author: 'Angie Thomas',
			desc: '',
			img: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0624/9780062498533.jpg',
			rate: 0,
		},
		{
			_id: '456',
			name: 'One Of Us Is Lying',
			author: 'Karen M. McManus',
			desc: '',
			img: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5247/9781524714680.jpg',
			rate: 0,
		},
		{
			_id: '678',
			name: 'One Of Us Is Lying',
			author: 'Karen M. McManus',
			desc: '',
			img: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5247/9781524714680.jpg',
			rate: 0,
		},
		{
			_id: '910',
			name: 'One Of Us Is Lying',
			author: 'Karen M. McManus',
			desc: '',
			img: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5247/9781524714680.jpg',
			rate: 0,
		},
		{
			_id: '112',
			name: 'One Of Us Is Lying',
			author: 'Karen M. McManus',
			desc: '',
			img: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5247/9781524714680.jpg',
			rate: 0,
		},
		{
			_id: '113',
			name: 'One Of Us Is Lying',
			author: 'Karen M. McManus',
			desc: '',
			img: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5247/9781524714680.jpg',
			rate: 0,
		},
	]
}

function _makeId(length = 3) {
	const possible = '123456789'
	var txt = ''
	for (var i = 0; i < length; i++) {
		txt += possible.charAt(Math.floor(Math.random() * possible.length))
	}
	return txt
}

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}
    get state() {
		return this._state;
	}
    set state(value) {
		if (value > 100) this._state = 100;
        else if (value < 0) this._state = 0;
        else this._state = value;
	}
	fix() {
		this.state *= 1.5;
	}
	
}
class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}

}
class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";

	}

}
class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "novel";

	}

}
class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "fantastic";

	}

}
class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "detective";

	}

}


class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}
	findBookBy(type, value) {
		return this.books.find(book => book[type] == value) || null;
	}
	giveBookByName(bookName) {
		let book = this.findBookBy("name", bookName);
		if (book) {
			this.books.splice(this.books.indexOf(book), 1);
		} else {
			this.name = null
		}
		return book;
	}

}




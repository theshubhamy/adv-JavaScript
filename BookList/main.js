 // MYBOOKLIST
var cdate = new Date().toLocaleDateString().replace(/\s/g, "");

//BOOK Class : represnt a book
class Book {
  constructor(Title, Author, Isbn) {
    this.Title = Title;
    this.Author = Author;
    this.Isbn = Isbn;
  }
}
//ui Class: Handle ui task
class Ui {
  static displayBook() {
    const books = Store.getBook();
    if (books !== "") books.forEach((book) => Ui.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `<td>${book.Title}</td><td>${book.Author}</td><td>${book.Isbn}</td><td><a href="#"class="btn btn-danger btn-sm delete">x</a></td>`;
    list.appendChild(row);
  }
  static clearFields() {
    const Title = (document.querySelector("#Title").value = "");
    const Author = (document.querySelector("#Author").value = "");
    const Isbn = (document.querySelector("#ISBN").value = "");
  }
  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }
  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);
    //vanish alert in second
    setTimeout(() => document.querySelector(".alert").remove(), 1000);
  }
}

//Storage class :handle Storage (localstorage)
class Store {
  static getBook() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static addBook(book) { 
    const books = Store.getBook();
    console.log("b");
    books.push(book);
    console.log("d");
    localStorage.setItem("books", JSON.stringify(books));
    console.log("end function");
  }
  static removeBook(Isbn) {
    const books = Store.getBook;
    books.forEach((book, index) => {
      if (book.Isbn === Isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}
//Event :Display Book
document.addEventListener("DOMContentLoaded", Ui.displayBook);

//Event :Add a book

document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  //get form value
  const Title = document.querySelector("#Title").value;
  const Author = document.querySelector("#Author").value;
  const Isbn = document.querySelector("#ISBN").value;
  //validate form
  if (Title === "" || Author === "" || Isbn === "") {
    Ui.showAlert("Please fill in all fields.", "danger");
  } else {
    //instatiate book
    const book = new Book(Title, Author, Isbn);
    //add book to ui
    Ui.addBookToList(book);
    //add book to store
    Store.addBook(book);

    Ui.showAlert("Book Added!", "success");
    //clear form
    Ui.clearFields();
  }
});

//Event : remove a Book
document.querySelector("#book-list").addEventListener("click", (e) => {
  Ui.deleteBook(e.target);
  Ui.showAlert("Book Removed", "success");
});

/* Library Book Management System
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise
*/

class Book{
    constructor(title,author,pages,isAvailable=true){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
    }
    borrow(){
        this.isAvailable=false;
    }
    returnBook(){
        this.isAvailable=true;
    }
    getInfo(){
        return `${this.title} is written by ${this.author} is of ${this.pages} pages `;
    }
    isLongBook(){
        return this.pages>300;
    }
}

//Create at least 5 book objects using the class:
let book1=new Book('Marvel','stan lee',1000);
let book2=new Book('Breaking Bad','vince',700);
let book3=new Book('java','manish',299);
let book4=new Book('python','uday',301,false);
let book5=new Book('kalki','dhanesh',320);
let allBooks=[book1,book2,book3,book4,book5];

//Perform the following operations:

// Display info of all books
book1.getInfo();
book2.getInfo();
book3.getInfo();
book4.getInfo();
book5.getInfo();

// Borrow 2 books and show their availability status
book1.borrow();
console.log('availability of book1',book1.isAvailable);
book2.borrow();
console.log('availability of book2',book2.isAvailable);

// Return 1 book and show updated status
book1.returnBook();
console.log('book1 status after returning is',book1.isAvailable);

//Count how many books are "long books" (more than 300 pages)
let longBooks=allBooks.filter(book=>(book.isLongBook()));
console.log('total no.of long books:',longBooks.length);

//List all available books
let availableBooks=allBooks.filter(book=>book.isAvailable==true);
console.log('Available books are',availableBooks);

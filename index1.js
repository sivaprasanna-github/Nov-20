class Books{
   title;
   author;
   isbn;
   constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
   }

   checkOut(title, isbn){
      console.log(this.title, this.isbn, "Book was Checked out");
   }
   
   returnBook(title, isbn){
      console.log(this.title, this.isbn, "has been returned");
   }

   updateTitle(newtitle, author, isbn){
      this.title = newtitle;
      console.log("Book title is changed to", this.title);
   }
}

var myBook = new Books("Unexpected Meeting", "Siva Prasanna", "61045");
myBook.checkOut("Unexpected Meeting", "61045");
myBook.updateTitle("Good Fellows", "Siva Prasanna", "61045");
console.log(myBook);
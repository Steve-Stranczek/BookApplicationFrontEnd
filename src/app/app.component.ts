import { Component, OnInit } from '@angular/core';

import { Book } from './book.model';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'BookServiceFrontEnd';
  isFetching = false;
  bookArray: Book[] = [];
  isEditing = false;
  editBook?: Book;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.fetchBooks();
  }

  onFetchBooks() {
    this.fetchBooks();
  }

  onInsertBook(bookData: Book) {
    this.bookService
      .InsertBook(
        bookData.bookTitle,
        bookData.author,
        bookData.genreId,
        bookData.numPages
      )
      .subscribe((responseData) => {
        console.log(responseData);
        this.fetchBooks();
      });
  }

  onEditBook(book: Book) {
    this.isEditing = true;
    this.editBook = book;
  }

  onSubmitEditBook(book: Book) {
    if (this.editBook?.bookId)
      this.bookService
        .updateBook(book, this.editBook.bookId)
        .subscribe((response) => {
          this.isEditing = false;
          this.fetchBooks();
        });
  }

  onCancelEdit() {
    this.isEditing = false;
  }

  onDeleteBook(bookId: number) {
    this.bookService.deleteBook(bookId).subscribe((responseData) => {
      console.log(responseData);
      this.fetchBooks();
    });
  }

  private fetchBooks() {
    this.isFetching = true;
    this.bookService.fetchBooks().subscribe((books) => {
      this.isFetching = false;
      this.bookArray = books;
      console.log(books);
    });
  }
}

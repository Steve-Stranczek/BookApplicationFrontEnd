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

  onEditBook() {}

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

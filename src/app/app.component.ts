import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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

  constructor(private http: HttpClient, private bookService: BookService) {}

  ngOnInit() {}

  onFetchBooks() {
    this.fetchBooks();
  }

  onInsertBook(bookData: Book) {
    this.bookService.InsertBook(
      bookData.bookTitle,
      bookData.author,
      bookData.genreId,
      bookData.numPages
    );
  }

  onEditBook() {}

  onDeleteBook(bookId: number) {
    this.bookService.deleteBook(bookId);
  }

  onClearBooks() {}

  private fetchBooks() {
    this.isFetching = true;
    this.bookService.fetchBooks().subscribe((books) => {
      this.isFetching = false;
      this.bookArray = books;
      console.log(books);
    });
  }
}

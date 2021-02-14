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

  onFetchBooks() {}

  onInsertBook(bookData: Book) {}

  onClearBooks() {}
}

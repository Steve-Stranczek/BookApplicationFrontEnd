import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Book } from './book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  constructor(private http: HttpClient) {}

  InsertBook(title: string, author: string, genreId: number, numPages: number) {
    const book: Book = {
      bookTitle: title,
      author: author,
      genreId: genreId,
      numPages: numPages,
    };
    return this.http
      .post('http://localhost:8080/v1//book', book)
      .pipe((responseData) => {
        return responseData;
      });
  }

  fetchBooks() {
    return this.http
      .get<{ [key: number]: Book }>('http://localhost:8080/v1//books')
      .pipe(
        map((responseData) => {
          const bookArray: Book[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              bookArray.push({ ...responseData[key] });
            }
          }
          return bookArray;
        })
      );
  }

  deleteBook(bookId: number) {
    let apiUrl = 'http://localhost:8080/v1/deleteBook/' + bookId;
    return this.http.delete(apiUrl).pipe((responseData) => {
      return responseData;
    });
  }

  updateBook(book: Book, bookId: number) {
    return this.http
      .put('http://localhost:8080/v1//book/' + bookId, book)
      .pipe((responseData) => {
        return responseData;
      });
  }
}

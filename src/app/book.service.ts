import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Book } from './book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {}

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
}

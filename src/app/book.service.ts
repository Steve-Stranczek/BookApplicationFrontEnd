import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Book } from './book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {}

  fetchPosts() {}
}

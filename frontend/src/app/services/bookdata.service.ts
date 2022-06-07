import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {BooksModel} from '../components/books/books.model';

@Injectable({
  providedIn: 'root'
})
export class BookdataService {

  constructor(private http:HttpClient) { }
   getBooks(){
     return this.http.get("http://localhost:3000/books");
   }
   newBook(item: BooksModel){
    return this.http.post("http://localhost:3000/books/insert",{"book": item})
    .subscribe(data =>{console.log(data)})
  }
}

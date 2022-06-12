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
  //  newBook(item: BooksModel){
    newBook(formData: FormData){
    return this.http.post("http://localhost:3000/books/insert",formData)
    .subscribe(data =>{console.log(data)})
  }
}

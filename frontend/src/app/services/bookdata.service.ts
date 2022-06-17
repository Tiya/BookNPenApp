import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {BooksModel} from '../components/books/books.model';

@Injectable({
  providedIn: 'root'
})
export class BookdataService {

  constructor(private http:HttpClient) { }
  getBook(id:any){
    return this.http.get("http://localhost:3000/books/"+id);
  }

   getBooks(){
     return this.http.get("http://localhost:3000/books");
   }
  //  newBook(item: BooksModel){
    newBook(formData: FormData){
    return this.http.post("http://localhost:3000/books/insert",formData)
    .subscribe(data =>{console.log(data)})
  }
  // delete a book
  deleteBook(id:any)
  {
console.log("id to delete", id);
    return this.http.delete("http://localhost:3000/books/remove/"+id)

  }
  //update a book
  editBook(book:any)
  {
    console.log('book update')
    return this.http.put("http://localhost:3000/books/update",book)
    .subscribe(data =>{console.log(data)})
  }
}

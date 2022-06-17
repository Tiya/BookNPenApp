import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthorModel } from '../components/authors/authors.model';

@Injectable({
  providedIn: 'root'
})
export class AuthordataService {

  constructor(private http:HttpClient) { }
   getAuthors(){
     return this.http.get("http://localhost:3000/authors");
   }
  //  newAuthor(item: AuthorModel){
    newAuthor(formData: FormData){
    return this.http.post("http://localhost:3000/authors/insert",formData)
    .subscribe(data =>{console.log(data)})
  }


  getAuthor(id:any){
    return this.http.get("http://localhost:3000/authors/"+id);
  }

  // delete a author
  deleteAuthor(id:any)
  {
console.log("id to delete", id);
    return this.http.delete("http://localhost:3000/authors/remove/"+id)

  }
  //update a author
  editAuthor(book:any)
  {
    console.log('Author update')
    return this.http.put("http://localhost:3000/authors/update",book)
    .subscribe(data =>{console.log(data)})
  }
}

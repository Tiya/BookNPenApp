import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthorModel } from '../components/authors/authors.model';

@Injectable({
  providedIn: 'root'
})
export class AuthordataService {

  constructor(private http:HttpClient) { }
   getAuthor(){
     return this.http.get("http://localhost:3000/authors");
   }
  //  newAuthor(item: AuthorModel){
    newAuthor(formData: FormData){
    return this.http.post("http://localhost:3000/authors/insert",formData)
    .subscribe(data =>{console.log(data)})
  }
}

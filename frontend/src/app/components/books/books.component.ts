import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BookdataService } from 'src/app/services/bookdata.service';
import {BooksModel} from './books.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title:String = 'Book List';
 books: BooksModel[]=[];

  //image properties
 // imageWidth: number=50;
 // imageMargin: number=2;
 thumbnail: any;
  bookImage: any;

  constructor(private sanitizer: DomSanitizer, private bookdataService: BookdataService, private router:Router) { }

  ngOnInit(): void {
    this.bookdataService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
     
      
      this.bookImage = this.books[0].bookImage.data;
       this.getPicture();
     
    })

  }

  deleteBook(book: any)
  {
    console.log(book._id);
    this.bookdataService.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(p => p !== book);
      });
  
    }
  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['update']);

  }
  getPicture() {
    let reader = new FileReader();
    reader.readAsDataURL(this.bookImage);
    reader.onloadend = (() => {
       let objectURL = reader.result;
       this.thumbnail = this.sanitizer.bypassSecurityTrustResourceUrl('' + objectURL);
    });
  }
 
  getImageUrl(book: any) {
 
  console.log(book.bookImage.data);
    let objectURL = 'data:image/png;base64,' + book.bookImage.data;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);

  } 
}
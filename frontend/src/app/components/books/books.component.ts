import { Component, OnInit } from '@angular/core';
import { BookdataService } from 'src/app/services/bookdata.service';
import {BooksModel} from './books.model';
import { DomSanitizer } from '@angular/platform-browser';


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

  constructor(private sanitizer: DomSanitizer, private bookdataService: BookdataService) { }

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
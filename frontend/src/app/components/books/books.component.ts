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

  constructor(private sanitizer: DomSanitizer, private bookdataService: BookdataService) { }

  ngOnInit(): void {
    this.bookdataService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
     
      console.log(this.books);
      this.thumbnail=this.books[0].bookImage;
      this.getImageUrl(this.thumbnail)
    })
  }
 
  getImageUrl(book: any) {
 
  console.log(book.bookImage.data);
    let objectURL = 'data:image/png;base64,' + book.bookImage.data;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);

  } 
}
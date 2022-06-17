import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
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
  myPDF: Uint8Array | undefined;
  blob: Blob | undefined;
  thumbnail: any;
  bookImage:any;

  //image properties
 // imageWidth: number=50;
 // imageMargin: number=2;
  constructor(private sanitizer: DomSanitizer,  private bookdataService: BookdataService, public _auth:AuthService) { }

  ngOnInit(): void {
    this.bookdataService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
     
      console.log(this.books);
      this.thumbnail=this.books[0].bookImage;
      this.getImageUrl(this.thumbnail)
    })
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

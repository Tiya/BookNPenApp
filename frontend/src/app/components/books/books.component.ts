import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BookdataService } from 'src/app/services/bookdata.service';
import {BooksModel} from './books.model';

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

  //image properties
 // imageWidth: number=50;
 // imageMargin: number=2;
  constructor( private bookdataService: BookdataService, public _auth:AuthService) { }

  ngOnInit(): void {
    this.bookdataService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
     
      console.log(this.books);
    })
  }


  
}

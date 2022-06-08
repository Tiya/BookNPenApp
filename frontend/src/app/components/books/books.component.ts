import { Component, OnInit } from '@angular/core';
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
  //image properties
 // imageWidth: number=50;
 // imageMargin: number=2;
  constructor( private bookdataService: BookdataService) { }

  ngOnInit(): void {
    this.bookdataService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
      console.log(this.books);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { BookdataService } from 'src/app/services/bookdata.service';
import { Router } from '@angular/router';
import {BooksModel} from '../books/books.model';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  title:String="Publish Your Book";
  constructor(private bookdataService: BookdataService,  private router: Router) { }
  bookItem= new BooksModel("","","","");
  ngOnInit(): void {
  }
  AddBook()
  {
    this.bookdataService.newBook(this.bookItem);
    console.log("called");
    alert("Success");
    this.router.navigate(['/']);
  }
}

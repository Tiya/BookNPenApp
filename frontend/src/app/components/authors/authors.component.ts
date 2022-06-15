import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AuthordataService } from 'src/app/services/authordata.service';
import { AuthorModel } from './authors.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title:String = 'Author List';
  authors: AuthorModel[]=[];
  blob: Blob | undefined;

   //image properties
 // imageWidth: number=50;
 // imageMargin: number=2;
  constructor(private authordataService: AuthordataService, public _auth:AuthService) { }

  ngOnInit(): void {
    this.authordataService.getAuthor().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
     
      console.log(this.authors);
    })
  }

}

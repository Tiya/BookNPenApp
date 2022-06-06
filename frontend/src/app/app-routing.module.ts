import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorsComponent } from './components/addauthors/addauthors.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { BooksComponent } from './components/books/books.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{path:'',redirectTo: '/home', pathMatch: 'full' },
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'books',component:BooksComponent},
{path:'addbook',component:AddbookComponent},
{path:'authors',component:AuthorsComponent},
{path:'addauthor',component:AddauthorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddauthorsComponent } from './components/addauthors/addauthors.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { AuthorComponent } from './components/author/author.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './components/books/books.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UpdatebookComponent } from './components/updatebook/updatebook.component';
import { HasRoleGuard } from './has-role.guard';
import { GenresComponent } from './components/genres/genres.component';

const routes: Routes = [{path:'',redirectTo: 'home', pathMatch: 'full' },
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'update',component:UpdatebookComponent},
{path:'login',component:HomeComponent},
{path:'author/:id',component:AuthorComponent},
{path:'book/:id',component:BookComponent},
{path:'login',component:HomeComponent},
{path:'books',component:BooksComponent
,canActivate:[AuthGuard]
},
{path:'addbook',component:AddbookComponent,canActivate:[AuthGuard
  , HasRoleGuard
]
// ,data:{roles:['Admin','Author']
// }
},
{path:'authors',component:AuthorsComponent
, canActivate:[AuthGuard]
},
{path:'addauthor',component:AddauthorsComponent
,canActivate:[AuthGuard,HasRoleGuard]
// ,data:{roles:'Admin'}
},
{path:'dashboard',component:DashboardComponent
,canActivate:[AuthGuard]
},
{path:'genres',component:GenresComponent
,canActivate:[AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}

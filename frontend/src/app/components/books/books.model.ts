export class BooksModel{
   constructor(
       public bookName: string,
       public bookAuthor: string,
       public bookCategory: string,
       public bookDescription: string,
       public bookFile : string,
       public bookImage: string
   ){}
}
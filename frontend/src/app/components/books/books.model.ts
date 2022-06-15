export class BooksModel{
   constructor(
       public bookName: string,
       public bookAuthor: string,
       public bookCategory: string,
       public bookDescription: string,
       public bookImage: string,
       public bookFile : string
    //    public bookFile : {
    //     data: Buffer,
    //     contentType: String
    // },
    // public bookImage : {
    //     data: Buffer,
    //     contentType: String
    // },
   ){}
}
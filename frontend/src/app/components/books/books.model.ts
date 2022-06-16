export class BooksModel{
 
   constructor(
       public bookName: string,
       public bookAuthor: string,
       public bookCategory: string,
       public bookDescription: string,
       public bookImagePath: string,
       public bookFilePath : string,
       public bookImage: any
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
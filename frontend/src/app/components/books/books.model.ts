export class BooksModel{
 
   constructor(
      public _id: number,
       public bookName: string,
       public bookAuthor: string,
       public bookCategory: string,
       public bookDescription: string,9
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
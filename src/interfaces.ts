// interfaces.ts

export interface Book {
  id: number;
  title: string;
  author: string;
  publicationDate: Date;
  isbn: string;
  price: number;
  active: boolean;
}

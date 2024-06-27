export interface iPost{
  id: number,
  title: string,
  body: string,
}

export interface iBook{
  id: number,
  bookImg: string,
  title: string,
  categories: string[],
  authors: string[],
  description: string,
}
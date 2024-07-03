export interface iBook {
  id: number,
  bookImg: string,
  title: string,
  categories: string[],
  authors: string[],
  description: string,
}

export interface iBookList {
  items: iBook[],
}

export interface iBookAction {
  type: string,
  items: iBook[],
}

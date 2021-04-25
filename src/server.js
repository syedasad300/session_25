import { createServer } from "miragejs"
import books from './json/books.json';

export function makeServer() {
  let server = createServer({
   
    routes() {
      this.namespace = "api"
      this.get("/books", () => {
        return books;
      })
    },
  })

  return server
}
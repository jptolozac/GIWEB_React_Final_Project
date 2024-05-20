import { Book } from "@/types/book";
import axios from "axios";
import { fromJSON } from "postcss";
import { title } from "process";

const API_BOOKS: string = "https://663bc11cfee6744a6ea2d99a.mockapi.io/movies"

export async function getAllBooks(): Promise<Book[]> {
    const response = await axios.get(API_BOOKS)
    const data: any[] = await response.data

    return data.map(book => ({
        id: book.id,
        title: book.title,
        img: book.img,
        author: book.author,
        synopsis: book.synopsis,
        categories: Array.from<any>(book.categories).map((category: any) => String(category)),
        publicacion_year: book.publicacion_year,
        disponibility: book.disponibility,
        price: book.price,
    }))
}

export async function getBook({ bookId }: { bookId: string }): Promise<Book | null> {
    
    const response = await axios.get(`${API_BOOKS}/${bookId}`)
    const data = await response.data
    const book = data


    return {
        id: book.id,
        title: book.title,
        img: book.img,
        author: book.author,
        synopsis: book.synopsis,
        categories: book.categories.map((category: any) => String(category)),
        publicacion_year: book.publicacion_year,
        disponibility: book.disponibility,
        price: book.price,
    }
}

export async function newBook(data: any) {
    const formdata = new FormData(data)
    const formJson = axios.formToJSON(formdata)
    // const categoriesArray = formdata.getAll('categories[]')
    console.log(formJson);
    const response = await axios.post(API_BOOKS, formJson)
    const responseData = await response.data
    return responseData
}

export async function updateBook(id: string, data: any) {
    const formdata = new FormData(data)
    // const categoriesArray = formdata.getAll('categories[]')
    console.log(formdata.getAll('categories[]'));
    const formJson = {
        title: formdata.get('title')?.toString() || '',
        author: formdata.get('author')?.toString() || '',
        categories: formdata.getAll('categories[]')!.map(item => String(item)),
        synopsis: formdata.get('synopsis')?.toString() || '',
        price: parseInt(formdata.get('price')!.toString()) || 0,
    }
    console.log(formJson);
    const response = await axios.put(`${API_BOOKS}/${id}`, formJson, { headers: { 'content-type': 'application/json' }});
    const dataResponse = await response.data
    console.log(dataResponse);
}

export async function deleteBook(bookId: string){
    const response = await axios.delete(`${API_BOOKS}/${bookId}`)
    const data = await response.data;
    console.log(data);
}
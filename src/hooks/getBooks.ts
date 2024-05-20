import { getAllBooks } from "@/services/books"
import { Book } from "@/types/book"
import { useEffect, useRef, useState } from "react"

export function useGetBooks(){
    const [allBooks, setAllBooks] = useState<Book[]>([])
    const [books, setBooks] = useState<Book[]>([])
    const [search, setSearch] = useState<string>('')
    const headers: (keyof Book)[] = Object.keys(books[0] || []) as (keyof Book)[]

    const inputRef = useRef<HTMLInputElement | null>(null)

    const getBooksData = () => {
        getAllBooks().then(books => {
            setAllBooks(books)
            setBooks(books)
        }).catch(err => {
            console.log(err);
        })
    }
    
    useEffect(() => {
        if (search === '') {
            setBooks(allBooks)
            // getBooksData()
            return
        }
        setBooks(allBooks.filter(book => book.synopsis.toLowerCase().includes(search.toLowerCase())
            || book.author.toLowerCase().includes(search.toLowerCase())
            || book.title.toLocaleLowerCase().includes(search.toLowerCase())
        ))
    }, [search])

    useEffect(() => {
        getBooksData()
    }, [])

    return { books, search, setSearch, headers, inputRef }
}
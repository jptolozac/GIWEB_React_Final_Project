import { getBook } from "@/services/books"
import { Book } from "@/types/book"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export function useGetBook(){
    const { id } = useParams()
    
    const [book, setbook] = useState<Book | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [editable, setEditable] = useState<boolean>(false)
    const [categories, setCategories] = useState<string[] | null>(null)

    useEffect(() => {
        setLoading(true)
        if(id){
            getBook({ bookId: id as string }).then((data: Book | null) => {
                setbook(data)
                setLoading(false)
            })
        }
    }, [])

    useEffect(() => setCategories(book?.categories ?? []), [book])
    
    const addCategory = () => setCategories([...categories!, ''])

    return { id, loading, setEditable, book, categories, editable, addCategory }
}
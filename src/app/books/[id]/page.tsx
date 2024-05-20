"use client"

import { FormEvent } from "react"
import { updateBook } from "@/services/books"
import { MainLayout } from "@/layouts/mainLayout"
import { Routes } from "@/utils/routes"
import { useGetBook } from "@/hooks/getBook"
import { FrontPage } from "@/components/book/frontPage"
import { FormEditable } from "@/components/book/formEditable"

export default function Product() {
    const { id, loading, setEditable, book, categories, editable, addCategory } = useGetBook()

    const handleButtonEdit = (event: FormEvent) => {
        event.preventDefault()
        console.log(event);
        setEditable(!editable)
    }

    const handleButtonFinishEdit = async (event: any) => {
        event.preventDefault()
        await updateBook(book?.id || "", event.target)
        window.location.assign(`${Routes.books.seeBooks}/${id}`)
    }

    return (
        <MainLayout>
            {
                !loading
                    ? <section className="flex flex-wrap pt-12">
                        <FrontPage book={book!} />
                        <FormEditable  
                            addCategory={addCategory}
                            book={book!}
                            categories={categories}
                            handleButtonEdit={handleButtonEdit}
                            handleButtonFinishEdit={handleButtonFinishEdit}
                            editable={editable}
                        />
                    </section>
                    : <span>cargando...</span>
            }

        </MainLayout>
    )
}
"use client"

import { FormEditable } from "@/components/book/formEditable";
import { useGetBook } from "@/hooks/getBook";
import { MainLayout } from "@/layouts/mainLayout";
import { newBook } from "@/services/books";
import { Book } from "@/types/book";
import { Routes } from "@/utils/routes";
import { FormEvent } from "react";

export default function FormCreateBook() {
    const { addCategory, categories } = useGetBook()

    const handleButtonCreate = async (event: FormEvent) => {
        event.preventDefault()
        const book: Book = await newBook(event.target)
        window.location.assign(`${location.origin}/${Routes.books.seeBooks}/${book.id}`)
    }

    return (
        <MainLayout>
            <div className="flex justify-center mt-20">
                <FormEditable
                    editable={true}
                    handleButtonFinishEdit={handleButtonCreate}
                    addCategory={addCategory}
                    categories={categories}
                />
            </div>
        </MainLayout>
    )
}
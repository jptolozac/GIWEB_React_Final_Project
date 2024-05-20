"use client"

import { TextInput } from "@/components/input/textInput";
import { Table } from "@/components/table/table";
import { TableTr } from "@/components/table/tableTr";
import { CoinFormatter } from "@/helpers/coinFormatter";
import { useGetBooks } from "@/hooks/getBooks";
import { MainLayout } from "@/layouts/mainLayout";
import Link from "next/link";
import { FormEvent } from "react";

export default function Home() {
    const {books, headers, search, setSearch, inputRef} = useGetBooks()

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.currentTarget.value)
        console.log(search);
    }

    return (
        <>
            <MainLayout>
                {books
                    ? <section className="">
                        <div className="h-full w-full relative flex items-center">
                            <div className="w-fit mx-auto">
                                <TextInput search inputRef={inputRef!} handleInputChange={handleInputChange} value={search}/>
                            </div>
                            <Link className="absolute right-0" href={'/books/create'}>
                                <div className="bg-indigo-700 px-5 py-2 rounded-md">
                                    Agregar libro
                                </div>
                            </Link>
                        </div>
                        <Table headers={headers}>
                            {books.map(book => (
                                <TableTr reference={`/books/${book.id}`} key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.title}</td>
                                    <td className="min-w-48"><img src={book.img} alt={`Imagen de ${book.title}`} width={500} height={500} /></td>
                                    <td>{book.author}</td>
                                    <td>{book.synopsis}</td>
                                    <td>{book.categories.join(", ")}</td>
                                    <td>{book.publicacion_year}</td>
                                    <td>{book.disponibility}</td>
                                    <td>{CoinFormatter(book.price)}</td>
                                </TableTr>
                            ))}
                        </Table>
                    </section>
                    : <span>cargando...</span>
                }

            </MainLayout>
        </>
    )
}